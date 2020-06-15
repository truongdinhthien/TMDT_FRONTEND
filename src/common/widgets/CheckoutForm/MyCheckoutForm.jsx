import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';

const MyCheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const headers = {
    'Content-Type': 'application/json'
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    var price = 300000;

    var paymentIntent = await axios.post("https://localhost:5004/api/order/payment",
      price,
      {headers : headers}
    );

    console.log(paymentIntent.data.paymentIntent.client_secret);

    var client_secret = paymentIntent.data.paymentIntent.client_secret;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {

        //Goi axios post order o day khi ma da success
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        
        <CardElement />
        <span> card demo : 4000002500003155 </span>
        <button type="submit" className = "btn btn-primary" disabled={!stripe}>
          Pay
        </button>
        
    </form>
  );
};

export default MyCheckoutForm;
