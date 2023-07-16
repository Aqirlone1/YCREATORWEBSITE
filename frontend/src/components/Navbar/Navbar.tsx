import React, { useEffect, useState } from "react";
import logoIcon from "../../icons/logo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
type propType={
background:string
}
function Navbar({background}:propType) {
  const [path,setPath]=useState("/")
  const {pathname}=useLocation()
  useEffect(()=>{
setPath(pathname)
console.log(pathname)
  },[pathname])
 
  return (
    <nav className="navbar header-navbar navbar-expand-lg pt-4 " style={{background}}>
      <div className="container-fluid">
        <Link className={`navbar-brand mx-4`} to="#" >
          <img src={logoIcon} width={278} height={71} alt="" />
        </Link>
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
          <Link className={`nav-link mx-4 ${path=="/"?"active-link":""}`}  to="/">
              Home
            </Link>
            <Link className={`nav-link mx-4 ${path=="/brand"?"active-link":""}`} to="#">
              Brand
            </Link>
            <Link className={`nav-link mx-4 ${path=="/creators"?"active-link":""}`} to="/creators">
              Creators
            </Link>
            <Link className={`nav-link mx-4 ${path=="/contact"?"active-link":""}`} to="#">
              Contact
            </Link>
       
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
