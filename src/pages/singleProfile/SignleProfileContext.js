import React from "react";

const SignleProfileContext = () => {
  return (
    <>
      <div class="col-xl-5 col-lg-6">
        <div class="profile-main-content">
          <ul class="top-menu">
            <li>
              <a href="#">Activity</a>
            </li>
            <li>
              <a href="#" class="active">
                Profile
              </a>
            </li>
            <li>
              <a href="#">
                Friends
                <div class="num">04</div>
              </a>
            </li>
            <li>
              <a href="#">
                Groups
                <div class="num">14</div>
              </a>
            </li>
            <li>
              <a href="#">
                Media
                <div class="num">47</div>
              </a>
            </li>
          </ul>
          <div class="info-box">
            <div class="header">
              <h4 class="title">Base</h4>
            </div>
            <div class="content">
              <ul class="infolist">
                <li>
                  <span>Name</span>
                  <span>Albert Don</span>
                </li>
                <li>
                  <span>Birthday</span>
                  <span>1998-01-19</span>
                </li>
                <li>
                  <span>I am a</span>
                  <span>Man</span>
                </li>
                <li>
                  <span>Looking for a</span>
                  <span>Woman</span>
                </li>
                <li>
                  <span>Marital status</span>
                  <span>single</span>
                </li>
                <li>
                  <span>Country</span>
                  <span>France</span>
                </li>
                <li>
                  <span>City</span>
                  <span>Paris</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="info-box">
            <div class="header">
              <h4 class="title">Myself Summary</h4>
            </div>
            <div class="content">
              <p class="text">
                I don`t like talk too much to be honest and especially about
                myself. I am man of actions, I do a lot of sports, I adore to
                travel and to see the world.
              </p>
            </div>
          </div>
          <div class="info-box">
            <div class="header">
              <h4 class="title">Lifestyle</h4>
            </div>
            <div class="content">
              <ul class="infolist">
                <li>
                  <span>Interests</span>
                  <span>Billiards</span>
                </li>
                <li>
                  <span>Looking for</span>
                  <span>Just friends</span>
                </li>
                <li>
                  <span>Smoking</span>
                  <span>Never</span>
                </li>
                <li>
                  <span>Language</span>
                  <span>English</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="info-box">
            <div class="header">
              <h4 class="title">Physical</h4>
            </div>
            <div class="content">
              <ul class="infolist">
                <li>
                  <span>Height</span>
                  <span>5’10</span>
                </li>
                <li>
                  <span>Weight</span>
                  <span>71</span>
                </li>
                <li>
                  <span>Hair Color</span>
                  <span>Black</span>
                </li>
                <li>
                  <span>Eye Color</span>
                  <span>Brown</span>
                </li>
                <li>
                  <span>Body Type</span>
                  <span>Tall</span>
                </li>
                <li>
                  <span>Ethnicity</span>
                  <span>Middle Eastern</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignleProfileContext;
