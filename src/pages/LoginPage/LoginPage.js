import React from "react";
import appStore from "../../assets/img/appstore.webp";
import pic1 from "../../assets/img/play-store-logo-nisi-filters-australia-11.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="shaskfslfh">
        <div class="containersha">
          <div class="title">Login</div>
          <div class="content">
            <form>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="input-box">
                  <span class="details">Password</span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div class="button">
                <input type="submit" />
              </div>
              <div className="logiFooter">
                <h6>Get the app</h6>
                <div className="logiApp">
                  <a href="#">
                    <img src={appStore} alt="" />
                  </a>
                  <a href="#">
                    <img src={pic1} alt="" />
                  </a>
                </div>
                <Link to="/regAsProfessional" className="custom-button mt-3">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
