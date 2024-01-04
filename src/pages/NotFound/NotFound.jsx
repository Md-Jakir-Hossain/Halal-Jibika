import React from "react";
import error from "../../assets/image/404-error-with-a-cute-animal-animate.svg";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
