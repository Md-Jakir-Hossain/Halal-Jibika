import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Loading from "../Loading/Loading";

const Mainlayout = () => {
  const navigation = useNavigation();
  return (
    <div className="container">
      <Header />
      <ScrollRestoration />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
