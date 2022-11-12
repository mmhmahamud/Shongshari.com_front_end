import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../../firebase";
import { useRegAsMemberMutation } from "../../redux/features/auth/authApi";
import { userLoggedIn } from "../../redux/features/auth/authenticationSlices";

const RegisterMember = () => {
    const [regAsMember, { data: response, isLoading }] = useRegAsMemberMutation();
    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegsitration = async e => {
        e.preventDefault();
        const image = e.target.photo.files[0];
        const data = new FormData(e.target);
        const result = Object.fromEntries(data.entries());
        await createUserWithEmailAndPassword(result.email, result.password);

        const imageName = image.name;
        const storageRef = ref(storage, `image/${imageName}`);
        await uploadBytes(storageRef, image).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(async downloadURL => {
                await updateProfile({ photoURL: downloadURL.toString() });
                // image = downloadURL.toString();
                if (user) {
                    result.profilePhoto = downloadURL.toString();
                    await regAsMember(result);
                }
            });
        });
        // const image = result.photo;
        // const formData = new FormData();
        // formData.append("photo", image);
        // const url = `https://api.imgbb.com/1/upload?key=defefa6fc48176cd7b861950f2479fd3`;
        // fetch(url, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(link => console.log(link));
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
                            <div class="input-box">
                                <span class="details">Select Your Photo</span>
                                <input type="file" name="photo" placeholder="Nid Or Passport Number" required />
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
