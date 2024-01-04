import React, { useState } from "react";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/image/login.gif";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    navigate("/");
    // if (formData.email !== "" && formData.password !== "") {
    //   setLoggedIn(true);
    // }
  };

  return (
    <div className={styles.loginForm}>
      <img src={login} alt="" />
      <div className={styles.login}>
        <h3>Log In</h3>
        {!loggedIn ? (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <p>Welcome, {formData.username}! You have successfully logged in.</p>
        )}
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className={styles.btn}>Create new account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
