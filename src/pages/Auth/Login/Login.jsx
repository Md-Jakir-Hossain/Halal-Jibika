import React, { useState } from "react";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    if (formData.email !== "" && formData.password !== "") {
      setLoggedIn(true);
    }
  };

  return (
    <div className={styles.login}>
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
      <button>Create new account</button>
    </div>
  );
};

export default Login;
