import { useState } from "react";

const RegAsProfessional = () => {
  const [userInfo, setUserInfo] = useState({});

  //setting data on
  const handleBlur = (e) => {
    let newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  };
  console.log(userInfo);
  return (
    <div className="main-body">
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <a href="index.html" className="backto-home">
                  <i className="fas fa-chevron-left" /> Back to peyamba
                </a>
              </div>
              <div className="col-lg-7 ">
                <div className="logo">
                  <img src="assets/images/logo2.png" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to PEYAMBA</h2>
                  <p>
                    Let's create your profile! Just fill in the fields below,
                    and we’ll get a new account.{" "}
                    <a href="login.php">already have an account.</a>
                  </p>
                  <div className="row">
                    <div className="col-md-6 pb-4">
                      <div className="o__register">
                        <label htmlFor>Registration</label>
                        <div className="option">
                          <div className="s-input nice-select-wraper">
                            <select
                              onChange={handleBlur}
                              name="role"
                              className="select-bar o__registerOption"
                            >
                              <option>User</option>
                              <option>Lawyer</option>
                              <option>Agent</option>
                              <option>Kazi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-content">
                    <form action="#">
                      <h4 className="content-title">Account Details</h4>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>First Name*</label>
                          <input
                            onBlur={handleBlur}
                            name="firstName"
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Last Name*</label>
                          <input
                            onBlur={handleBlur}
                            name="lastName"
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Last Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Registration For*</label>
                          <div className="option">
                            <div className="s-input nice-select-wraper">
                              <select
                                onChange={handleBlur}
                                name="registerFor"
                                className="select-bar"
                              >
                                <option>Myself</option>
                                <option>My Brother</option>
                                <option>My Sister</option>
                                <option>My Son</option>
                                <option>My Daughter</option>
                                <option>My Relative</option>
                                <option>Friend</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Ancestry</label>
                          <input
                            name="ancestry"
                            onBlur={handleBlur}
                            type="email"
                            className="my-form-control"
                            placeholder="Enter Your Ancestry"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Marital Status*</label>
                          <div className="option">
                            <div className="s-input nice-select-wraper">
                              <select
                                onChange={handleBlur}
                                name="maritalStatus"
                                className="select-bar"
                              >
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorce</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Religion*</label>
                          <div className="option">
                            <div className="s-input nice-select-wraper">
                              <select
                                onChange={handleBlur}
                                name="religion"
                                className="select-bar"
                              >
                                <option>Muslim</option>
                                <option>Hindu</option>
                                <option>Christian</option>
                                <option>Buddhist</option>
                                <option>Shikh</option>
                                <option>Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>I am a*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender1" id="males1" />
                              <label for="males1">Man</label>
                            </div>
                            <div className="s-input">
                              <input
                                onChange={handleBlur}
                                type="radio"
                                name="gender1"
                                id="females1"
                                value="female"
                              />
                              <label for="females1">Woman</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Looking for a*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender2" id="males" />
                              <label for="males">Man</label>
                            </div>
                            <div className="s-input">
                              <input type="radio" name="gender2" id="females" />
                              <label for="females">Woman</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Account*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender3" id="males3" />
                              <label for="males3">Free Account</label>
                            </div>
                            <div className="s-input">
                              <input
                                type="radio"
                                name="gender3"
                                id="females3"
                              />
                              <label for="females3">Premium Account</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Use Refer Code</label>
                          <input
                            name='referCode'
                            onBlur={handleBlur}
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Refer Code"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Email*</label>
                          <input
                            name="email"
                            onBlur={handleBlur}
                            type="email"
                            className="my-form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Phone*</label>
                          <input
                            name="phone"
                            onBlur={handleBlur}
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Password*</label>
                          <input
                            name="password"
                            onBlur={handleBlur}
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Confirm Password*</label>
                          <input
                            name="confirmPassword"
                            onBlur={handleBlur}
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </div>
                      <button
                        className="custom-button"
                        data-toggle="modal"
                        data-target="#email-confirm"
                      >
                        Create Your Profile
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegAsProfessional;
