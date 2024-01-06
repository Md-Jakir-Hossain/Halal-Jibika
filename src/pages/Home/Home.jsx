import React from "react";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-aos="zoom-in-right" className={styles.home}>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-linear"
        className={styles.text}
      >
        <h3>Welcome to Halal Jibika</h3>
        <h1>
          Find the job of
          <br /> your <span>Dreams</span>
        </h1>
        <p>Your gateway to halal job opportunities</p>

        <Link to="/jobs">
          <button>Explore Now</button>
        </Link>
      </div>
      <div className={styles.img}>
        <img src="/Job_hunt.gif" alt="" />
      </div>
    </div>
  );
};

export default Home;
