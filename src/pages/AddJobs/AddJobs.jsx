import React, { useState } from "react";
import styles from "./AddJobs.module.css";
import axios from "axios";
import { Form } from "react-router-dom";

const AddJobs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dataForm}>
        <Form method="post" className={styles.jobsForm}>
          <h2>Add job</h2>
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
            <textarea onResize={"none"} id="description" name="description" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default AddJobs;
