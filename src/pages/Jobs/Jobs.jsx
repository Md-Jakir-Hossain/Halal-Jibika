import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/db.json");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
