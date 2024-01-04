import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // ==== create user ======
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ==== update profile =====
  const userUpdateProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  const [favourite, setFavourite] = useState([]);
  const addToFavourite = (job) => {
    const isAlreadyFavorite = favourite.some((favJob) => favJob.id === job.id);

    if (isAlreadyFavorite) {
      setFavourite((prevFavorites) =>
        prevFavorites.filter((favJob) => favJob.id !== job.id)
      );
    } else {
      setFavourite((prevFavorites) => [...prevFavorites, job]);
    }
  };

  const isJobFavorite = (id) => favourite.some((favJob) => favJob.id === id);

  useEffect(() => {
    console.log(favourite);
  }, [favourite]);

  const value = {
    createUser,
    user,
    userUpdateProfile,
    favourite,
    addToFavourite,
    isJobFavorite,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
