import React from "react";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const paramId = +useParams().id;
  const jobs = useRouteLoaderData("root").data;
  const { id, logo, title, companyName, position, description } = jobs.find(
    (job) => job.id === paramId
  );
  return (
    <div className={styles.details}>
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
          <Link to={`/update/${id}`}>update</Link>
          delete
        </div>
      </div>
    </div>
  );
};

export default Details;
