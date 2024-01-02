import React from "react";
import styles from "./Job.module.css";

const Job = ({ job }) => {
  const { id, image, title, companyName, position, description } = job;
  return (
    <div className={styles.singleCard}>
      <h3>{id}</h3>
      <div className={styles.cardContent}>
        <img src={image} alt="" />
        <div className={styles.text}>
          <h1>{title}</h1>
          <h2>{companyName}</h2>
          <h4>{position}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
