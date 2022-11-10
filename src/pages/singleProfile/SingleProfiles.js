import React from "react";

import "../../assets/css/profile.css";
import Footer from "../../components/headerFooter/Footer";
import Header from "../../components/headerFooter/Header";
import SignleProfileContext from "./SignleProfileContext";
import SignleProfileRight from "./SignleProfileRight";
import SingleProfilesLeft from "./SingleProfilesLeft";

const SingleProfiles = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <section class="profile-section">
        <div class="container">
          <div class="row justify-content-center">
            <SingleProfilesLeft />
            <SignleProfileContext />
            <SignleProfileRight />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleProfiles;
