import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-linear"
      className={styles.footer}
    >
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Job Finder</h3>
          <p>Find your dream job with us.</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <ul className={styles.icons}>
            <li>
              <Link to="https://facebook.com">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://linkedin.com">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://instagram.com">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Halal Jibika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
