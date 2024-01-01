import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../../contextApi/ContextProvider";
import { Toastify } from "toastify";
import { toast } from "react-toastify";

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [updateProfile, updating] = useUpdateProfile(auth);
  const { createUser, userUpdateProfile } = useContext(AuthContext);

  // if (loading || updating) {
  //   return <Loading></Loading>;
  // }

  // let errorElement;
  // if (error) {
  //   errorElement = <p>{error?.message}</p>;
  // }

  // if (user) {
  //   navigate("/");
  // }

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
  };

  // ========== Handler Google =========
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
  // ========== Handler Google =========
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
