import React from "react";
import styles from "./Job.module.css";

import axios from "axios";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, title, companyName, position, description } = job;
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:9000/jobs/${id}`);
  };
  return (
    <div className={styles.singleCard}>
      <div className={styles.cardContent}>
        <div className={styles.img}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.text}>
          <h1>{title}</h1>
          <h2>{companyName}</h2>
          <h4>{position}</h4>
          <p>{description}</p>
        </div>
        <Link to={`/details/${id}`}>
          <button>Details</button>
        </Link>
        <button onClick={() => deleteItem(id)}>delete</button>
      </div>
    </div>
  );
};

export default Job;
