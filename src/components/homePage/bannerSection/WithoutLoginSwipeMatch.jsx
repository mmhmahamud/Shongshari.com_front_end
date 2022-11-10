import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import card1 from "../../../assets/img/use/card1.jpg";

const leftArrow = {
  position: "relative",
  left: "-45px",
  top: "-30px",
  cursor: "pointer"
};
const rightArrow = {
  position: "relative",
  right: "-225px",
  top: "-30px",
  cursor: "pointer"
};

function WithoutLoginSwipeMatch({ match, setMatch, item }) {
  const increamentIndex = () => {
    let index = match + 1;
    if (index > 6) setMatch(0)
    else setMatch(index);
  };
  const decreamentIndex = () => {
    let index = match - 1;
    if (index < 0) setMatch(6)
    else setMatch(index);
  };
  console.log(match)
  return (
    <SwiperSlide>
      <div className="swiper-slide banner-img-item">
        <img className="img-fluid" src={item.img} alt="" />
        <div className="swipe-overly">
          <div className="swipe-bottom">
            <div className="swipe-details">
              <div className="row">
                <div className="col-md-10">
                  <span
                    onClick={decreamentIndex}
                    style={leftArrow}
                    className="h2 text-white "
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  <span onClick={increamentIndex} style={rightArrow} className="h2 text-white ">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <h2>
                  {item.name} <samp>{item.age}</samp>
                  </h2>
                  <p className="swipe-label1">
                    <i className="fas fa-star"></i> Login first
                  </p>
                  <p className="swipe-label2">
                    <i className="fas fa-star"></i> Login first
                  </p>
                </div>
                <div className="col-md-2">
                  <Link className="swipe-info rounded-circle" to="/">
                    <i className="fas fa-info"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swipe-option">
              <Link className="rounded-circle" to="/">
                <i className="fas fa-undo"></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i className="fas fa-times"></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i className="fas fa-star"></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i className="fas fa-heart"></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i className="fas fa-bolt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default WithoutLoginSwipeMatch;
