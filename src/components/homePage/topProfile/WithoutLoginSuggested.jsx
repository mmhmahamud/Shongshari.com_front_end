import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../../assets/img/registered/pexels-kate-branch-8365152.jpg";
import dummyData from "./dummyData";
function WithoutLoginSuggested() {
  return (
    <div className="collapse show">
      <div className="top-div text-center">
        <div className="swiper top-profile-slider">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              560: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            className="swiper-wrapper"
          >
            {dummyData.map((item, i) => (
              <SwiperSlide>
                <div className="single-slider">
                  <div className="img o__profileCardImg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="inner-content inner__contentSlide">
                    <h4 className="name">
                      {item.name}
                      <span style={{ color: "#ff337c" }}>{item.age}</span>
                    </h4>
                    <span>{item.profession}</span>
                    <p>{item.address}</p>
                  </div>
                  <div className="info__cardUp">
                    <div className="info__cardImg">
                      <img src={item.img} alt="card__img" />
                    </div>
                    <h4 style={{ color: "white" }} className="name">
                      {item.name}
                      <span>{item.age}</span>
                    </h4>
                    <ul>
                      <li>
                        <p>
                          <span>Occupation</span> {item.profession}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Location</span> {item.address}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Home Town</span> Dhake
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Education</span> {item.education}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Religion</span> Muslim
                        </p>
                      </li>
                    </ul>
                    <div className="info__social">
                      <a href="#">
                        <i className="fas fa-user"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-comment"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a id="member__btn" className="btn" href="#">
          See More
        </a>
      </div>
    </div>
  );
}

export default WithoutLoginSuggested;
