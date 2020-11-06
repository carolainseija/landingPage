import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/header.css";

function Header() {
  return (
    <div className="container-fluid">
      <header className="Row App-header">
        <div className="col-lg-12 d-flex justify-content-center">
            {/* container logo */}
          <div className="d-xs-none d-sm-none d-md-none d-lg-flex col-lg-5 logoBlanco text-center">
           
          </div>
           {/* container navbar responsive LG */}
          <div class="d-xs-none d-md-none d-lg-flex col-lg-7 containerNavbar" id="navbarNav">
            <nav class="navbar navbar-expand-lg d-xs-none d-md-none d-lg-flex justify-content-end">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" id="#servers" href="#servers">
                    Servicios
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    Nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tean">
                    Equipo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Navbar responsible mobile */}
          <div className="col-md-10 d-lg-none d-flex justify-content-center">
            {/* container logo */}
          <div className="d-flex col-sm-5 col-lg-5 logoBlanco text-center">
           
          </div>


          <div class="d-lg-none col-sd-12 col-sm-12  col-md-12 containerNavbar-mobile" id="navbarNav">
            <nav class="navbar-mobile navbar-expand-lg d-flex justify-content-end">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link-mobile" id="#servers" href="#servers">
                    Servicios
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link-mobile" href="#about">
                    Nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link-mobile" href="#tean">
                    Equipo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default Header;