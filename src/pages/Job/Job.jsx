import React, { useContext } from "react";
import styles from "./Job.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/ContextProvider";

const Job = ({ job }) => {
  const { id, logo, companyName, position, description } = job;
  const { favourite, addToFavourite, isJobFavorite } = useContext(AuthContext);

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
          <div className={styles.footerBtn}>
            <Link to={`/details/${id}`}>
              <button>Details</button>
            </Link>
            <button onClick={() => addToFavourite(job)}>
              {isJobFavorite(id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
