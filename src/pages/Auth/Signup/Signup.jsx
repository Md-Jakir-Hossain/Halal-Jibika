import React, { useState } from "react";
import styles from "./Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import auth from "../../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import signup from "../../../assets/image/Signup.gif";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../../components/Loading/Loading";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  const navigate = useNavigate();
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = <p>{error?.message}</p>;
  }

  if (user) {
    navigate("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return toast.error("Password doesn't match");
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    return toast.success("Sign Up Successfully!");
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const gitProvider = new GithubAuthProvider();
  const handleGithub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className={styles.signupForm}>
      <img src={signup} alt="" />
      <div className={styles.signup}>
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <hr />
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
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
          <button onClick={handleGoogle} className={styles.google}>
            <FcGoogle fontSize="20px" />
            Sign up with Google
          </button>
          <button onClick={handleGithub} className={styles.github}>
            <FaGithub fontSize="20px" color="black" />
            Sign up with Github
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Signup;
