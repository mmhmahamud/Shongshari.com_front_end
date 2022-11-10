import React from "react";
import profile from "../../assets/images/profile/profile-user.png";
import up from "../../assets/images/profile/up1.jpg";
const SingleProfilesLeft = () => {
  return (
    <>
      <div class="col-xl-4 col-lg-5 col-md-7">
        <div class="left-profile-area">
          <div class="profile-about-box">
            <div class="top-bg"></div>
            <div class="p-inner-content">
              <div class="profile-img">
                <img src={profile} alt="" />
                <div class="active-online"></div>
              </div>
              <h5 class="name">Albert Don</h5>
              <ul class="p-b-meta-one">
                <li>
                  <span>21 Years Old</span>
                </li>
                <li>
                  <span>
                    {" "}
                    <i class="fas fa-map-marker-alt"></i>Paris,France
                  </span>
                </li>
              </ul>
              <div class="p-b-meta-two">
                <div class="left">
                  <div class="icon">
                    <i class="far fa-heart"></i>
                  </div>{" "}
                </div>
                <div class="right">
                  <a href="#" class="profile-custom-button">
                    <i class="fab fa-cloudversify"></i> Get Premium
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-meta-box">
            <ul class="p-m-b">
              <li>
                <a href="#" data-toggle="modal" data-target="#usermessage">
                  <i class="far fa-envelope"></i>
                  <div class="number">04</div>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#usernotification">
                  <i class="far fa-bell"></i>
                  <div class="number">04</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-cogs"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="profile-uplodate-photo">
            <h4 class="p-u-p-header">
              <i class="fas fa-camera"></i> 21 Upload Photos
            </h4>
            <div class="p-u-p-list">
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a href="#" class="light-box mfp-iframe">
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a href="#" class="light-box mfp-iframe">
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a href="#" class="light-box mfp-iframe">
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a href="#" class="light-box mfp-iframe">
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a
                      href="assets/images/profile/up5.jpg"
                      class="light-box mfp-iframe"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-col">
                <div class="img">
                  <img src={up} alt="" />
                  <div class="overlay">
                    <a href="#" class="light-box mfp-iframe">
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProfilesLeft;
