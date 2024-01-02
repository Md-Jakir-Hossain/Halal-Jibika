import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import styles from "./Jobs.module.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.card}>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
