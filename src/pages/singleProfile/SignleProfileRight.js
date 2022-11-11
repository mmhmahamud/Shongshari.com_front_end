import React from "react";
import profile1 from "../../assets/images/profile/op-img1.png";
import profile2 from "../../assets/images/profile/op-img2.png";
import profile3 from "../../assets/images/profile/op-img3.png";
import profile4 from "../../assets/images/profile/op-img4 (1).png";

const SignleProfileRight = () => {
  return (
    <>
      <div class="col-xl-3 col-lg-5 col-md-7">
        <div class="profile-aside-area">
          <div class="other-profile">
            <div class="o-p-header">
              <h6 class="title">You may like</h6>
            </div>
            <div class="o-p-content">
              <div class="p-u-p-list-slider owl-carousel owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    // style="transition: all 0s ease 0s; width: 1635px; transform: translate3d(-545px, 0px, 0px);"
                  >
                    <div
                      class="owl-item cloned"
                      // style="width: 242.5px; margin-right: 30px;"
                    >
                      <div class="slider-item">
                        <div class="p-u-p-list">
                          <div class="my-col">
                            <div class="img">
                              <img
                                style={{ borderRadius: "15px" }}
                                src={profile1}
                                alt=""
                              />
                              <a href="#" class="light-box mfp-iframe">
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                          <div class="my-col">
                            <div class="img">
                              <img
                                style={{ borderRadius: "15px" }}
                                src={profile2}
                                alt=""
                              />
                              <a href="#" class="light-box mfp-iframe">
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                          <div class="my-col">
                            <div class="img">
                              <img
                                style={{ borderRadius: "15px" }}
                                src={profile3}
                                alt=""
                              />
                              <a href="#" class="light-box mfp-iframe">
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                          <div class="my-col">
                            <div class="img">
                              <img
                                style={{ borderRadius: "15px" }}
                                src={profile4}
                                alt=""
                              />
                              <a href="#" class="light-box mfp-iframe">
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="owl-item cloned"
                      style={{ width: "242.5px", marginRight: " 30px" }}
                    >
                      <div class="slider-item">
                        <div class="p-u-p-list"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-nav">
                  <button type="button" role="presentation" class="owl-prev">
                    <i class="fa fa-angle-left"></i>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
          <div class="chat-request">
            <div class="c-r-heading">
              <h6 class="title">
                <i class="far fa-comments"></i> Chat Request
              </h6>
            </div>
            <div class="c-r-content">
              <div class="c-r-content-list">
                <div class="single-c-r">
                  <div class="left">
                    <img src="assets/images/profile/c-r-img1.png" alt="" />
                    <div class="active-online"></div>
                  </div>
                  <div class="right">
                    <h4 class="title">laura maria</h4>
                    <p>true love is...</p>
                  </div>
                </div>
                <div class="single-c-r">
                  <div class="left">
                    <img src="assets/images/profile/c-r-img2.png" alt="" />
                    <div class="active-online"></div>
                  </div>
                  <div class="right">
                    <h4 class="title">laura maria</h4>
                    <p>true love is...</p>
                  </div>
                </div>
                <div class="single-c-r">
                  <div class="left">
                    <img src="assets/images/profile/c-r-img3.png" alt="" />
                    <div class="active-online"></div>
                  </div>
                  <div class="right">
                    <h4 class="title">laura maria</h4>
                    <p>true love is...</p>
                  </div>
                </div>
              </div>
              <a href="#" class="load-more">
                load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignleProfileRight;
