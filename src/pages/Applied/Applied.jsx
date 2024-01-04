import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import style from "../Jobs/jobs.module.css";
import Job from "./../Job/Job";

export default function Applied() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root"));
  console.log(jobs);
  const [appliedJobIds, setAppliedJobIds] = useState(
    JSON.parse(localStorage.getItem("appliedJobIds")) || {}
  );
  useEffect(() => {
    localStorage.setItem("appliedJobIds", JSON.stringify(appliedJobIds));
  }, [appliedJobIds]);

  const isApplied = !!Object.values(appliedJobIds).length;

  const addToApplied = (id) => {
    setAppliedJobIds((prevAppliedJobsId) => {
      const updatedAppliedJobsId = { ...prevAppliedJobsId };
      if (updatedAppliedJobsId[id] !== undefined)
        delete updatedAppliedJobsId[id];
      else updatedAppliedJobsId[id] = true;
      return updatedAppliedJobsId;
    });
  };

  return (
    <div className="container">
      <h1 className="title">
        {isApplied ? "Your Applied JOBS" : "You Don't have any Applied Job"}
      </h1>
      <div className={style.jobs}>
        {isApplied &&
          jobs.map((job) => {
            if (appliedJobIds[job.id] === undefined) return null;
            return (
              <Job
                isApplied={true}
                addToApplied={addToApplied}
                key={job.id}
                job={job}
              />
            );
          })}
      </div>
    </div>
  );
}
