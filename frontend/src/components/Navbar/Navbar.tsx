import React from "react";
import logoIcon from "../../icons/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar header-navbar navbar-expand-lg pt-4 ">
      <div className="container-fluid">
        <a className="navbar-brand mx-4" href="#" >
          <img src={logoIcon} width={278} height={71} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav  " >
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Brand
            </a>
            <a className="nav-link" href="#">
              Creators
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
       
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
