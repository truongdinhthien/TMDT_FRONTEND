import React from "react";
import MainLayout from "../common/hocs/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="py-4 mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 "
                      src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
