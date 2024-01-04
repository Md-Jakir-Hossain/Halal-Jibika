import React from "react";
import {
  Link,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const paramId = +useParams().id;
  const submit = useSubmit();

  const jobs = useRouteLoaderData("root");
  const { id, logo, title, companyName, position, description } = jobs.find(
    (job) => job.id === paramId
  );
  const deleteItem = () => {
    submit(null, {
      method: "delete",
    });
  };
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
          <button>Apply Now</button>
          <Link to={`/update/${id}`}>update</Link>
          <button onClick={deleteItem}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
