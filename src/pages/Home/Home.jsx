import React from "react";
import hero from "../../assets/image/HeroImg.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div data-aos="zoom-in-right" className={styles.home}>
      <div
        data-aos="fade-left"
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
        <button>Explore Now</button>
      </div>
      <div className={styles.img}>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
