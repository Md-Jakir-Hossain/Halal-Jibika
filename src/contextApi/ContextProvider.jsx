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

  const value = {
    createUser,
    user,
    userUpdateProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
