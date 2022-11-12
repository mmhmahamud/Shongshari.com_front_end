import React from "react";
import appStore from "../../assets/img/appstore.webp";
import pic1 from "../../assets/img/play-store-logo-nisi-filters-australia-11.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase";
import { useLoginAsMemberMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userLoggedIn } from "../../redux/features/auth/authenticationSlices";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginAsMember, { data: index }] = useLoginAsMemberMutation()
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    const { email, password } = result;

    await signInWithEmailAndPassword(email, password);
    await loginAsMember(result);
  };

  useEffect(() => {
    if (index) {
      localStorage.setItem("accessToken", index.token);
      navigate("/");
      dispatch(userLoggedIn({ userCredentials: index, isauthenticated: true }));
    }
  }, [index, dispatch, navigate]);

  return (
    <>
      <div className="shaskfslfh">
        <div class="containersha">
          <div class="title">Login</div>
          <div class="content">
            <form onSubmit={handleLogin}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="input-box">
                  <span class="details">Password</span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div class="button">
                <input type="submit" value={`${loading ? 'Loading' : 'Login'}`} />
              </div>
              <div className="logiFooter">
                <h6>Get the app</h6>
                <div className="logiApp">
                  <a href="#">
                    <img src={appStore} alt="" />
                  </a>
                  <a href="#">
                    <img src={pic1} alt="" />
                  </a>
                </div>
                <Link to="/regAsProfessional" className="custom-button mt-3">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
