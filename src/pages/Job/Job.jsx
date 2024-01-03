import React from "react";
import styles from "./Job.module.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const Job = ({ job, setJobs }) => {
  console.log(job);
  const { id, logo, title, companyName, position, description } = job;
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:9000/jobs/${id}`);
  };
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
            {/* <h1>{title}</h1> */}
            <h2>{companyName}</h2>
            <h4>{position}</h4>
            {/* <p>{description}</p> */}
          </div>
          <Link to={`/details/${id}`}>
            <button>Details</button>
          </Link>
          <button
            onClick={() => {
              setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
              deleteItem(id);
            }}
          >
            <MdOutlineFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
