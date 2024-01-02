import React, { useState } from "react";
import styles from "./AddJobs.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const jakir = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postJobs = await axios.post("http://localhost:9000/jobs", formData);

    setFormData({
      title: "",
      logo: "",
      companyName: "",
      position: "",
      description: "",
    });
    jakir("/jobs");
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default AddJobs;
