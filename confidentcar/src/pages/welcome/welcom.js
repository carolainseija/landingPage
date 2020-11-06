import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../welcome/welcom.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Header/Banner/Banner";

function Welcom() {
  return (
    <div className="container-fluid-main">
      <div className="row">
        <div className="containerHeader col-12">
          <Header />
        </div>
      </div>
      <div className=" containerBannercol-12">
        <Banner />
      </div>
    </div>
  );
}
export default Welcom;