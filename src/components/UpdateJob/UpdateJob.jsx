import React, { useRef, useState, useEffect } from "react";
import { useParams, useRouteLoaderData, Form } from "react-router-dom";
import styles from "./UpdateJob.module.css";

const UpdateJob = () => {
  const id = +useParams().updateId;
  const jobs = useRouteLoaderData("root");
  const formData = jobs.find((job) => job.id === id);
  const formRef = useRef(null);

  useEffect(() => {
    [...formRef.current.elements].forEach((element) => {
      const { name } = element;
      element.value = formData[name];
    });
  }, []);

  return (
    <div>
      <div className={styles.dataForm}>
        <Form ref={formRef} method="put" className={styles.jobsForm}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="logo">Logo:</label>
            <input type="text" id="logo" name="logo" />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="position" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateJob;
