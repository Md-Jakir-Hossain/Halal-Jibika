import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import styles from "./UpdateJob.module.css";
import axios from "axios";

const UpdateJob = () => {
  const id = +useParams().updateId;
  const jobs = useRouteLoaderData("root").data;
  const navigate = useNavigate();
  const [formData, setFormData] = useState(jobs.find((job) => job.id === id));
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postJobs = await axios.put(
      `http://localhost:9000/jobs/${id}`,
      formData
    );
    navigate("/jobs");
    setFormData({
      title: "",
      logo: "",
      companyName: "",
      position: "",
      description: "",
    });
  };

  return (
    <div className={styles.dataForm}>
      <form className={styles.jobsForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="logo">Logo:</label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateJob;
