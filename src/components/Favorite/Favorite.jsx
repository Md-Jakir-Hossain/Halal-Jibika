import React, { useContext } from "react";
import { AuthContext } from "../../contextApi/ContextProvider";
import styles from "./Favorite.module.css";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favourite, addToFavourite, isJobFavorite } = useContext(AuthContext);
  const { id, logo, companyName, position, description } = favourite;

  return (
    <div>
      {favourite.map((fav) => (
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
              <img src={fav.logo} alt="" />
            </div>
            <div className={styles.text}>
              <h2>{fav.companyName}</h2>
              <h4>{fav.position}</h4>
            </div>
            <Link to={`/details/${id}`}>
              <button>Details</button>
            </Link>
            {/* <button onClick={() => addToFavourite(job)}>
              {isJobFavorite(id) ? "❤️" : "🤍"}
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
