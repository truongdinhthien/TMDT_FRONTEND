import React from "react";
import MainLayout from "../common/hocs/MainLayout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MyCheckoutForm from "../common/widgets/CheckoutForm/MyCheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6o7pM7P9hjj5QYA9LanEBQai00ZlaGAWPH");

const HomePage = () => {
  return (
    <MainLayout>
      <section className="py-4 mt-3">
        <div className="container">
          <Elements stripe={stripePromise}>
            <MyCheckoutForm />
          </Elements>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
