import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import circle from "../../../assets/img/circle.png";
import icon1 from "../../../assets/img/icon01.png";
import icon2 from "../../../assets/img/icon02.png";
import icon3 from "../../../assets/img/icon03.png";
import icon4 from "../../../assets/img/icon04.png";
import illutration from "../../../assets/img/illutration.png";
import ThreeEasySteps from "./ThreeEasySteps";
function FlirtingSection() {

  const handlePopUp = () => {
    toast.warning('Under construction')
  }

  return (
    <div>
      <ThreeEasySteps />
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="feature__img mb-4">
                  <img src={icon1} alt="img" />
                </div>
                <h5>100% Verifide</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="feature__img mb-4">
                  <img src={icon2} alt="img" />
                </div>
                <h5>Most Secure</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="feature__img mb-4">
                  <img src={icon3} alt="img" />
                </div>
                <h5>100% Privacy</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="feature__img mb-4">
                  <img src={icon4} alt="img" />
                </div>
                <h5>Smart Matching</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flirting-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="flirting__content wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h6>Meet Your Perfect Life Partner!</h6>
                <h2>Begain Family Journey</h2>
                <p>
                  Shongshari.com is the ultimate Matchmaking, Matrimony, and
                  Family Management platform in Bangladesh. We are working to
                  achieve a simple objective - to help people find happiness.
                </p>
                <br />
                <p>
                  Shongshari.com - a trusted matrimonial & matchmaking service,
                  has always differentiated itself from other matrimonials
                  through its innovation-led approach not only by redefining the
                  way Bangladeshi brides and grooms meet for marriage, but also
                  maintain and make their family journey smoother!
                </p>
                <Link className="custom-button mt-2" onClick={handlePopUp} >
                  Seek Your Partner
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="flirting__img">
                <img className="flirt1" src={illutration} alt="flirt1" />
                <img className="flirt2" src={circle} alt="flirt2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlirtingSection;
