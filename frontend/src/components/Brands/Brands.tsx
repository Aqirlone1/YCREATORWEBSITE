import React from "react";
import image7 from "../../icons/cop1.png";
import image8 from "../../icons/cop2.png";
import image9 from "../../icons/cop3.png";
import image10 from "../../icons/cop4.png";
import image11 from "../../icons/cop5.png";
import iconStrip from "../../icons/iconstrip.png";
import "./Brands.css";
import { Button } from "antd";
function Brands() {
  return (
    <div className="container py-5 my-5  brands-main-container">
      <div className="row py-5">
        <div className="col-5 d-flex flex-column ">
          <span className="brand-heading">Trusted by top brands</span>
          <span className="brand-description my-4">
            Brands across globe are choosing YCreator as one stop solution for
            Influencer Marketing.
          </span>
        </div>
        <div className="col-7 brand-icon-container d-flex  flex-wrap px-5">
          <img src={image7} height={60} alt="" />
          <img src={image8} height={60} alt="" />
          <img src={image9} height={60} alt="" />
          <img src={image10} height={60} alt="" />
          <img src={image11} height={60} alt="" />
         
        </div>
      </div>
      <div className="row">
        <div className="col-6 mt-5 pt-5">
          <span className="creator-discovery d-flex mx-2">
            {" "}
            <strong>Creator Discovery</strong> Across 5 major Platforms
          </span>
          <span  className="d-flex flex-column my-3">
            <img src={iconStrip} width={400} alt="" />
          </span>
          <span className="d-flex mx-2">

            <Button className="antd-btn" size="large" >Create a campaign</Button>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Brands;
