import { useRouteLoaderData } from "react-router-dom";
import styles from "./Applied.module.css";
import Job from "./../Job/Job";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Applied() {
  const jobs = useRouteLoaderData("root");
  const [appliedJobIds, addToApplied] = useLocalStorage("appliedJobIds");
  const isApplied = !!Object.values(appliedJobIds);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {isApplied ? "Your Applied JOBS" : "You Don't have any Applied Job"}
      </h1>
      <div className={styles.jobs}>
        {isApplied &&
          jobs.map((job) => {
            if (appliedJobIds[job.id] === undefined) return null;
            return (
              <Job
                key={job.id}
                job={job}
                isApplied={true}
                addToApplied={addToApplied}
              />
            );
          })}
      </div>
    </div>
  );
}
