import React from "react";

const Job = ({ job }) => {
  const { id, image, title, companyName, position, description } = job;
  return (
    <div>
      <h3>{id}</h3>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{companyName}</h2>
      <h4>{position}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Job;
