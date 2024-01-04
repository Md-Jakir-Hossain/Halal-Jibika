import React from "react";
import styles from "./Job.module.css";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, companyName, position, description } = job;

  return (
    <div className={styles.container}>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className={styles.singleCard}
      >
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={styles.cardContent}
        >
          <div className={styles.img}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.text}>
            <h2>{companyName}</h2>
            <h4>{position}</h4>
          </div>
          <Link to={`/details/${id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
