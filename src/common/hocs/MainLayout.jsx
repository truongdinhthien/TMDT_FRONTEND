import React, { useState, useEffect } from "react";
import "./MainLayout.css";
import { Link } from "react-router-dom";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import * as authService from "../services/AuthService";

const MainLayout = (props) => {
  const [user, setUser] = useState(null);
  const isLoginedIn = !!user;

  const getUserOidc = async () => {
    const res = await authService.getUser();
    setUser(res);
  };

  useEffect(() => {
    getUserOidc();
  }, []);

  console.log(user);
  console.log(isLoginedIn);
  var url = document.referrer;
  console.log(url);
  return (
    <div>
      <section className="header">
        <nav className="top-bar navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            {/* <div className="top-navbar navbar-collapse"> */}
            <div className="navbar-nav mr-auto">
              <span class="navbar-text">
                Online 24/7 at 0123456789
              </span>
            </div>

            <div className="navbar-nav top-bar-nav">
              <a
                className="top-bar-item nav-item nav-link p-0"
                href="#"
              >
                <i className="far fa-bell"></i>
                Notfication
              </a>
              <a
                className="top-bar-item nav-item nav-link border-left border-light p-0 pl-3 ml-3"
                href="#"
              >
                <i className="far fa-question-circle"></i>
                Help
              </a>
              {isLoginedIn ? (
                <>
                  <a className="top-bar-item nav-item nav-link border-left border-light p-0 pl-3 ml-3">
                    <i class="far fa-user-circle"></i>
                    Hi {user.profile.Fullname}
                  </a>

                  <a
                    className="top-bar-item nav-item nav-link border-left border-light p-0 pl-3 ml-3"
                    onClick={() => authService.logout()}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </a>
                </>
              ) : (
                <a
                  className="top-bar-item nav-item nav-link border-left border-light p-0 pl-3 ml-3"
                  onClick={() => authService.login()}
                >
                  <i class="far fa-user-circle"></i>
                  Login
                </a>
              )}
            </div>
            {/* </div> */}
          </div>
        </nav>
        <div className="mt-3">
          <nav className="header-main navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-5">
                  <li className="nav-item dropdown">
                    <a
                      className="category-menu nav-link dropdown-toggle p-0 text-black"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-align-left"></i>
                      Book Category
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Category 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Category 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Category 1
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="input-group mr-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for books"
                    aria-label="Recipient's username"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="fas fa-search mr-1"></i>
                      Search
                    </button>
                  </div>
                </div>

                <div className="cart-icon">
                  <span className="cart-icon-badge">0</span>
                  <i className="fas fa-shopping-cart" />
                </div>

              </div>
            </div>
          </nav>
        </div>
      </section>
      {props.children}
      
    </div>
  );
};

export default MainLayout;
