import React from "react";
import "./Home.css";
import ycIcon from "../../icons/yc.png";
import { Button } from "antd";
import youtubeIcon from "../../icons/youtube.png"
function Home() {
  return (
    <div className="home-main-container container-fluid">
      <div className="row p-5" >
        <div className="col-6 p-2  d-flex flex-column  justify-content-center " >
          <span className="home-heading">
            Modern Creators for Modern{" "}
            <span style={{ color: "#6B54FC" }}>Brands</span>
          </span>
          <span className="home-description mt-2 mb-5">
            <span style={{ color: "#6B54FC" }}>YCreator</span> is where the top
            brands & creators come to accelerate their advertising & earnings.
          </span>
          <div className="d-flex align-items-center">
            <Button className="antd-btn" size="large" >Create a campaign</Button>
            <span className="mx-3"><img  src={youtubeIcon} width={40} height={28} alt="" /> Learn More</span>
          </div>
        </div>
        <div className="col-6">
          <img src={ycIcon}></img> 
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
