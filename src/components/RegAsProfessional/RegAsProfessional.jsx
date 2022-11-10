import { useState } from "react";
import { useRegisterMutation } from "../../redux/features/auth/authApi";

const RegAsProfessional = () => {
  const [registrationAs, setRegistrationAs] = useState("");
  const [register, {data: response, isLoading, isError}] = useRegisterMutation();
  const [gender, setGender] = useState("man");
  const [lookingFor, setLookingFor] = useState('man');
  const [accountType, setAccountType]= useState('free')

  const genderHandler = e => {
    setGender(e.target.value)
  }
  const lookingForHandler = (e) => {
    setLookingFor(e.target.value)
  }
  const accountTypeHandler = (e) => {
    setAccountType(e.target.value)
  }


  const handleRegistration = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const results = Object.fromEntries(data.entries());
    const formData = {...results, registrationAs }
    console.log(formData)

   await register(formData);
   if(response){
    localStorage.setItem("accessToken", response.accessToken)
   }

   

  }
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
                            <select onChange={(e) => setRegistrationAs(e.target.value)} className="select-bar o__registerOption">
                              <option value="User">User</option>
                              <option value="Lawyer">Lawyer</option>
                              <option value="Agent">Agent</option>
                              <option value="Kazi">Kazi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-content">
                    <form action="#" onSubmit={handleRegistration}>
                      <h4 className="content-title">Account Details</h4>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>First Name*</label>
                          <input
                            type="text"
                            name="first_name"
                            className="my-form-control"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Last Name*</label>
                          <input
                            type="text"
                            name="last_name"
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
                              <select name="registrationFor" className="select-bar">
                                <option value="Myself">Myself</option>
                                <option value="My Brother">My Brother</option>
                                <option value="My Sister">My Sister</option>
                                <option value="My Son">My Son</option>
                                <option value="My Daughter">My Daughter</option>
                                <option value="My Relative">My Relative</option>
                                <option value="My Friend">My Friend</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Ancestry</label>
                          <input
                            type="text"
                            name="ancestry"
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
                              <select name="merital_status" className="select-bar">
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorce">Divorce</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Religion</label>
                          <input
                            type="text"
                            name="religion"
                            className="my-form-control"
                            placeholder="Enter Your Religion"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>I am a*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                            <input
        type="radio"
        name="gender"
        value="man"
        id="man"
        checked={gender === "man"}
        onChange={genderHandler}
      />
      <label htmlFor="man">Man</label>
                            </div>
                            <div className="s-input">
                            <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === "female"}
        onChange={genderHandler}
      />
      <label htmlFor="female">Female</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Looking for a*</label>
                          <div className="option">
                            <div className=" mr-3">
                            <input
        type="radio"
        name="lookingFor"
        value="man"
        id="lookingForMan"
        checked={lookingFor === "man"}
        onChange={lookingForHandler}
      />
      <label htmlFor="lookingForMan">Man</label>
                            </div>
                            <div className="">
                            <input
        type="radio"
        name="lookingFor"
        value="female"
        id="lookingForFemale"
        checked={lookingFor === "female"}
        onChange={lookingForHandler}
      />
      <label htmlFor="lookingForFemale">Female</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Account*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                            <input
        type="radio"
        name="accountType"
        value="free"
        id="accountTypeFree"
        checked={accountType === "free"}
        onChange={accountTypeHandler}
      />
      <label htmlFor="accountTypeFree">Free</label>
                            </div>
                            <div className="s-input">
                            <input
        type="radio"
        name="accountType"
        value="premium"
        id="accountTypePremium"
        checked={accountType === "premium"}
        onChange={accountTypeHandler}
      />
      <label htmlFor="accountTypePremium">Premium Account</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Use Refer Code</label>
                          <input
                            type="text"
                            name="refer_code"
                            className="my-form-control"
                            placeholder="Enter Your Refer Code"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Email*</label>
                          <input
                            type="email"
                            name="email"
                            className="my-form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Phone*</label>
                          <input
                            type="text"
                            name="phone"
                            className="my-form-control"
                            placeholder="Enter Your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Password*</label>
                          <input
                            type="text"
                            name="password"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Confirm Password*</label>
                          <input
                            type="text"
                            name="confirm_password"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </div>
                      <input type="submit" value="CREATE YOUR PROFILE" className="custom-button" />
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
