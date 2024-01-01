import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.header} ${isMenuOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <h1>HALAL JIBIKA</h1>
      </div>
      <div className={styles.nav_icon} onClick={toggleMenu}>
        <FaBars className={`${styles.nav_icon}`} />
      </div>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <NavLink exact to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" onClick={toggleMenu}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" onClick={toggleMenu}>
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
        <div className={`${styles.auth}`}>
          <li>
            <NavLink to="/signup" onClick={toggleMenu}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={toggleMenu}>
              Log In
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./Header.module.css";

// const Header = () => {
//   return (
//     <div className={styles.header}>
//       <ul className={styles.ul}>
//         <li className={styles.logo}>
//           <h1>HALAL JIBIKA</h1>
//         </li>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/jobs">Jobs</NavLink>
//         </li>
//         <li>
//           <NavLink to="about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/favorite">Favorite</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//         <div className={styles.auth}>
//           <li>
//             <NavLink to="/signup">Sign Up</NavLink>
//           </li>
//           <li>
//             <NavLink to="/login">Log In</NavLink>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Header;
