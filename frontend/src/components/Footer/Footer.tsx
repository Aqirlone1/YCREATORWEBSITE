import React from "react";
import "./Footer.css";
import { Input } from "antd";
import fbIcon from "../../icons/Facebook_1.png";
import instagramIcon from "../../icons/Instagram_1.png";
import twitterIcon from "../../icons/Twitter_1.png";
import YoutubeIcon from "../../icons/Youtube_1.png";

function Footer() {
  return (
    <div className="footer-container ">
      <div className="d-flex footer-container-inner" >
        <div className="mx-5">
          <div className="d-flex flex-column my-2">
            <span className="d-flex my-3">Enquires</span>
            <span>For Advertiser Enquiries, contact</span>
            <a href="">contact@ycreator.ai</a>
          </div>
          <div className="d-flex flex-column my-2">
            <span>For Creator Enquiries, contact</span>
            <a href="">contact@ycreator.ai</a>
          </div>
          <div className="d-flex flex-column my-2">
            <span>For Agency Enquiries, contact</span>
            <a href="">contact@ycreator.ai</a>
          </div>
          <div className="d-flex flex-column my-4">
            <span>Subscribe to our daily creator <br /> content and content updates</span>
            <Input className="my-2" placeholder="Name"/>
            <Input className="my-2" placeholder="Email"/>

          </div>
          <div className="d-flex flex-column my-4">
            <span className="my-2">Creator Network</span>
           
           <span>Mumbai  |   Delhi  |   Bangalore  |  Hyderbad <br /> Jaipur  |   Kerala  |   Pune  |  Telengana</span>

          </div>
        </div>
        <div className="d-flex flex-column m-5">
          <span className="d-flex">Company</span>
          <span className="d-flex flex-column">
            <span className="d-flex">Contact Us</span>
            <span className="d-flex">Privacy Policy</span>
            <span className="d-flex">Terms and Condition</span>
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between p-3 mx-3" style={{borderTop:"1px solid gray"}}>
        <span>2021 UPCRED All rights reserved</span>
        <div>
        <img src={fbIcon} height={50} width={50} alt="" />
          <img src={instagramIcon} height={50} width={50} alt="" />
          <img src={twitterIcon} height={50} width={50} alt="" />
          <img src={YoutubeIcon} height={50} width={50} alt="" />
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
