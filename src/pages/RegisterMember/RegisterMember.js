import React from "react";

const RegisterMember = () => {
  return (
    <div className="shaskfslfh">
      <div class="containersha">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">firs tName</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                <span class="details">Last Name</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Nid Or Passport Number</span>
                <input
                  type="text"
                  placeholder="Nid Or Passport Number"
                  required
                />
              </div>
            </div>

            <div class="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterMember;
