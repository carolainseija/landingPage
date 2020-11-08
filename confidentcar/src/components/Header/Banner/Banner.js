import React from "react";
import "../Banner/banner.css";

function Banner() {
  return (
    <div className="container-fluid banner">
      <div className="containerTxtWelcom col-12">
        <h1 className="titleWelcom">BIENVENIDO A CONFIDENT-CAR</h1>
      </div>
      <div className="containerAnimations col-8">
        <div className="animation"> 
        <a className="animations-links" href="#">PROXIMOS SERVICIOS</a>
        </div>
        <div className="animation"><a className="animations-links" href="#">PROMOCIONES</a></div>
        <div className="animation"><a className="animations-links" href="#">NUEVOS DEPARTAMENTOS</a></div>
      </div>
    </div>
  );
}
export default Banner;
