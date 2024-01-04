import React, { useContext, useState } from "react";
import styles from "./Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import auth from "../../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import signup from "../../../assets/image/Signup.gif";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../../components/Loading/Loading";
import { AuthContext } from "../../../contextApi/ContextProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [updateProfile, updating] = useUpdateProfile(auth);
  const { createUser, userUpdateProfile } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    createUser(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        userUpdateProfile(formData.name)
          .then(() => {
            toast("update Profile name");
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  let errorElement;
  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }
  if (googleError || githubError) {
    errorElement = (
      <p className="text-red-600">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (googleUser || githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  return (
    <div className={styles.signupForm}>
      <img src={signup} alt="" />
      <div className={styles.signup}>
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <hr />
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <fieldset>
          <legend>or</legend>
          <button onClick={() => signInWithGoogle()} className={styles.google}>
            <FcGoogle fontSize="20px" />
            Sign up with Google
          </button>
          <button onClick={() => signInWithGithub()} className={styles.github}>
            <FaGithub fontSize="20px" color="black" />
            Sign up with Github
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Signup;
