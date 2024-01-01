import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
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

    if (formData.username !== "" && formData.password !== "") {
      setLoggedIn(true);
    }
  };

  return (
    <div className={styles.login}>
      {!loggedIn ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name"
              value={formData.username}
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
