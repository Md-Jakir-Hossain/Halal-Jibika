import { useLocalStorage } from "../../hooks/useLocalStorage";
import Job from "../Job/Job";
import styles from "./Jobs.module.css";
import { useRouteLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobs = useRouteLoaderData("root");
  const [appliedList, addToApplied] = useLocalStorage("appliedJobIds");
  console.log("appliedList", appliedList);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {jobs.map((job) => (
          <Job
            key={job.id}
            job={job}
            isApplied={!!appliedList[job.id]}
            addToApplied={addToApplied}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
