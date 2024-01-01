import React from "react";
import error from "../../assets/image/error.gif";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
