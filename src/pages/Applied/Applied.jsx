import React, { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import style from "../Jobs/jobs.module.css";
import Job from "./../Job/Job";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Applied() {
  const jobs = useRouteLoaderData("root");
  const [appliedJobIds, addToApplied] = useLocalStorage("appliedJobIds");
  const isApplied = !!Object.values(appliedJobIds);
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
