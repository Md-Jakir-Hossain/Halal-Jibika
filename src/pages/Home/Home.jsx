import React from "react";
import hero from "../../assets/image/HeroImg.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <h3>Welcome to Halal Jibika</h3>
        <h1>Find freelance and fulltime developer jobs.</h1>
        <p>Your gateway to halal job opportunities</p>
      </div>
      <div className={styles.img}>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
