import Job from "../Job/Job";
import styles from "./Jobs.module.css";
import { useRouteLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobs = useRouteLoaderData("root");
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
