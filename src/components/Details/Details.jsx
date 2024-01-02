import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from "../../pages/Job/Job.module.css";
import axios from "axios";

const Details = () => {
  const loaderData = useLoaderData();
  const { id, logo, title, companyName, position, description } =
    loaderData.data;
  console.log(loaderData.data);
  return (
    <>
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
          <Link to={`/update/${id}`}>
            <button onClick={() => updateItem(id)}>update</button>
          </Link>
          <button onClick={() => deleteItem(id)}>delete</button>
        </div>
      </div>
    </>
  );
};

export default Details;
