import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Input } from "antd";
import "./CreatorPage.css";
import creator1 from "../../icons/creator1.png";
import creator2 from "../../icons/creator2.png";
import creator3 from "../../icons/creator3.png";
import playstore from "../../icons/playstore.png";
import appstore from "../../icons/app_store.png";
import creator_com from "../../icons/creator_com.png";

import creator_mobile from "../../icons/creator_mobile.png";
import creator_mobile_circle from "../../icons/creator_mobile_circle.png";

import CreatorVerse from "../../components/CreatorVerse/CreatorVerse";
import Footer from "../../components/Footer/Footer";


function Cards({ img, title, description }: any) {
  return (
    <div className="creator-page-cards ">
      <img src={img} alt="" />
      <h6 className="my-3">{title}</h6>
      <p>{description}</p>
    </div>
  );
}
function CreatorPage() {
  return (
    <div className="creator-page-container">
      <Navbar background="var(--color-primary-black)" />
      <div className="creator-page-home py-4 mt-5">
        <div className="creator-page-home-body my-3">
          <span>Be a Creator</span>
          <h1 className="my-4">FOR CREATORS ONLY</h1>
          <span>
            Get paid to post about the brands you love, whether you have 300
            followers or 1 Million.
          </span>
        </div>
        <div>
          <Button className="my_button" type="primary">
            Join Our Network
          </Button>
        </div>
      </div>
      <div className="creator-page-card-container d-flex justify-content-around mt-5 p-3 pt-5">
        <Cards
          img={creator1}
          title={"CREATOR DISCOVERY"}
          description={
            "We help brands discover you based on your category, social platform and creator experience."
          }
        ></Cards>
        <Cards
          img={creator2}
          title={"CREATOR DISCOVERY"}
          description={
            "We help brands discover you based on your category, social platform and creator experience."
          }
        ></Cards>{" "}
        <Cards
          img={creator3}
          title={"CREATOR DISCOVERY"}
          description={
            "We help brands discover you based on your category, social platform and creator experience."
          }
        ></Cards>
      </div>
      <div className="creator-page-how-does mt-5 pt-5 mx-3">
        <h1>HOW DOES IT WORK?</h1>
        <div className="d-flex justify-content-around py-0 p-5 mx-5 mt-5">
          <div className="p-2 pt-5 border-right-white">
            <span>SIGN UP</span>
            <p className="py-3">SIGN UP with YC Connect Socials </p>
          </div>
          <div className="p-2 pt-5 border-right-white">
            <span>FIND</span>
            <p className="py-3">
              All Campaign Recommendations based on your profile 
            </p>
          </div>
          <div className="p-2 pt-5 border-right-white">
            <span>UPLOAD</span>
            <p className="py-3">Upload your post directly to the app</p>
          </div>
          <div className="p-2 pt-5 ">
            <span>GET PAID</span>
            <p className="py-3">Get Paid straight  into your account</p>
          </div>
        </div>
      </div>
      <div className="d-flex p-5 mt-5 justify-content-center align-items-center creator-page-mobile ">
        <div>
          <img src={creator_mobile} alt="icon" width={619} height={728} />
        </div>
        <div className="d-flex flex-column px-5">
          <span className="text-start" style={{color:"#6EA7DD"}}>For Creators only </span>
          <p  className="text-start">
            Monetize with the largest- <br/>sponsored content marketplace in <br /> the
            influencer marketing industry.
          </p>
          
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="p-5">
          <h1 className="text-start">DOWNLOAD OUR <br />CREATOR APP</h1>
          <p>Start earning and collaborating with brands with YCreator</p>
          <div><img src={playstore} width={200} height={71} alt=""  /><span className="mx-2"></span> <img src={appstore} width={200} height={71}  alt=""  />  </div>
        </div>
        <div className="p-5">
        <img src={creator_mobile_circle} alt="icon" width={450} height={728} />
        </div>

      </div>
      <CreatorVerse/>
      <div >
        <div style={{height:800,marginTop:200} }>
          <div className="p-5 d-flex justify-content-center position-relative">
            <div className="creator-email-input-container p-5 w-75 d-flex justify-content-between">
              <div className="col-6 text-start">

              <h2>BE A PART OF OUR CREATOR COMMUNITY !</h2>
              <p className="my-4">Everything you need to know when you're looking for creator economy !</p>
              <div className="d-flex">
                <Input placeholder="Please enter your email" style={{width:200,borderRadius:50}}></Input>
                <Button type="primary" className="mx-3 my_button my_button-r-0 "  >Submit</Button>
              </div>
            </div>
              </div>
            <div className="position-absolute creator-com-container" style={{height:700,width:500}}>

            <img src={creator_com} alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CreatorPage;
