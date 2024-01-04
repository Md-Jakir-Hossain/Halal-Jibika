import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { navLinks } from "../../routes/nav-links";
import auth from "../../firebase/firebase.init";
import styles from "./Header.module.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const logout = () => signOut(auth);

  return (
    <div className={`${styles.header} ${isMenuOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <h1>HALAL JIBIKA</h1>
      </div>
      <div className={styles.nav_icon} onClick={toggleMenu}>
        <FaBars className={`${styles.nav_icon}`} />
      </div>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.showMenu : ""}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink exact to={link.path} onClick={toggleMenu}>
              {link.name}
            </NavLink>
          </li>
        ))}

        <div className={styles.auth}>
          {user ? (
            <li onClick={logout}>Logout</li>
          ) : (
            <li
              onClick={() => {
                toggleMenu();
                navigate("/login");
              }}
            >
              Log In
            </li>
          )}
          <div className={styles.profile}>
            <span>{user?.displayName}</span>
            <span>
              {user?.photoURL ? <img src={user?.photoURL}></img> : ""}
            </span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
