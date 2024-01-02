import React, { useState } from "react";
import Job from "../Job/Job";
import styles from "./Jobs.module.css";
import { useRouteLoaderData } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);

  return (
    <div className={styles.card}>
      {jobs.map((job) => (
        <Job key={job.id} setJobs={setJobs} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
