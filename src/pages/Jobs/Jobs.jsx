import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import styles from "./Jobs.module.css";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/jobs");
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
