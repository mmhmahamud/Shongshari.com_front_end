import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegAsMemberMutation } from "../../redux/features/auth/authApi";
import { userLoggedIn } from "../../redux/features/auth/authenticationSlices";

const RegisterMember = () => {
    const [regAsMember, { data: response, isLoading }] = useRegAsMemberMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegsitration = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const result = Object.fromEntries(data.entries());
        await regAsMember(result);
    };

    useEffect(() => {
        if (response) {
            localStorage.setItem("accessToken", response.token);
            navigate("/");
            dispatch(userLoggedIn({ userCredentials: response, isauthenticated: true }));
        }
    }, [response, dispatch, navigate]);
    return (
        <div className="shaskfslfh">
            <div class="containersha">
                <div class="title">Registration</div>
                <div class="content">
                    <form onSubmit={handleRegsitration}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">first Name</span>
                                <input type="text" name="firstName" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Last Name</span>
                                <input type="text" name="lastName" placeholder="Enter your username" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" name="email" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" name="phone" placeholder="Enter your number" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="text" name="password" placeholder="Enter your password" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Confirm Password</span>
                                <input type="text" name="confirmPassword" placeholder="Confirm your password" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Nid Or Passport Number</span>
                                <input type="text" name="NidOrPassportNumber" placeholder="Nid Or Passport Number" required />
                            </div>
                        </div>

                        <div class="button">
                            <input type="submit" value={isLoading ? "Loading..." : "Register"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterMember;
