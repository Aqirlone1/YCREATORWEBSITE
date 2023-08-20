import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import './Brand.css'
import left_image from "../../icons/image15.png";
import right_image from "../../icons/image16.png";
import { Button, Input } from "antd";
import SocialInfluncingCard from './SocialInfluncingCard';
import EnterpriseCard from './EnterprsiseCard';
import  Footer  from './../Footer/Footer';
import { ArrowRightOutlined, CheckOutlined, EyeOutlined } from '@ant-design/icons';
import sun from './../../icons/sun.png'
import feather from './../../icons/feather.png'
import Brands from '../Brands/Brands';

const Brand = () => {

  return(
    <>
    <div className="creator-page-container">
     <Navbar background="var(--color-primary-black)" />
      <div className="creator-page-home py-4 mt-5">
        <div className="creator-page-home-body my-3">
          <div className="brand-container mx-5">
            <div>Advertise Better with YCreator <ArrowRightOutlined /></div>
            <h1 className="my-5 mx-2 headingText">REAL PEOPLE. REAL DATA. REAL INFLUENCE.</h1>
            <span className='brand-container-body'>
            <a href= '#' className="my_button" type="text">YCreator </a>
              Advert platform allows brands to turn their consumers into a competitive 
              advantage and create the most authentic promotion and brand sentiment analysis on social media
              in real-time.
            </span>
        <div>
          <Button className="my_button" type="primary">
            Create a Campaign
          </Button>
          <Button className="talk-to-sales-first mx-2" type="link">
            Talk to sales
          </Button>
          </div>
        </div>
        </div>
      </div>
      <div className="growth-container d-flex flex-column py-5">
       <span className="my-3" style={{fontSize:48, fontFamily: "Manrope", fontWeight: 200}}>YCreator Advertising Platform</span>
       <span className="my-2" style={{fontSize:20}}>All in One Creator Marketing Platform</span>
       <div className="d-flex my-4 p-2 w-100 justify-content-around">
        <span className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-inline-flex flex-row align-items-center justify-content-center my-2">
            <Input className="input-box" placeholder="Your email address"/>
            <Button className="talk-to-sales-button mx-3" type="primary"> Talk to sales </Button>
          </div>
        </span>
      </div>
    </div>
    <div className='my-5' style={{fontSize: "20px"}}>Our servicse</div>
    <div className= "text-heading">Handshake infographic mass market crowdfunding iteration.</div>
      <div className="d-flex p-5 mt-5 justify-content-center align-items-center creator-page-mobile ">
        <div>
          <img src={left_image} alt="icon" width={620} height={506} />
        </div>
        <div className="d-flex flex-column px-5">
          <div  className="text-start">
            <div style={{fontWeight: 600, marginBottom: "10px", fontSize: "36px"}}>CREATE & FIND</div>
            <div className="rightSideText">Create custom campaigns in minutes
              and the platform you
              wish to find creators for. 
              Give them direct instructions 
              and then send out the campaign listing!
          </div>
          <div className='check-list text-start'>
            <div className='tick-icon'> <CheckOutlined className='tick'/> Power-up your Marketing Efforts</div>
            <div className='tick-icon'> <CheckOutlined className='tick'/> Flexible based Pricing for your requirement</div>
            <div className='tick-icon'> <CheckOutlined className='tick'/>  Creator Programs for Engagement</div>
            <Button className='button-create'>Create a Campaign</Button> 
          </div>
          </div> 
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="box-text text-start">
          <div className="text-start"  style={{fontWeight: 600, marginBottom: "30px", fontSize: "36px"}}>MANAGE &MEASURE</div>
          <p style={{fontSize: "35px", width: "450px"}}>The YC Advert is designed for volume and performance.
             Manage Creators and Measure the total results of your campaigns through our technology.</p>
          <p className='text-boxes'> <EyeOutlined style={{marginRight: "15px",  marginLeft: "10px"}}/> Hit the ground running for Creator Sourcing</p>
          <p className='text-boxes'>  <img src={sun} alt='' width={20} height={20}  style={{marginRight: "15px",  marginLeft: "10px"}}/> Automated on Campaign Management</p>
          <p className='text-boxes'>  <img src={feather} alt='' width={20} height={20}  style={{marginRight: "15px", marginLeft: "10px"}}/> Creator Programs for Freemium Scale</p>
        </div>
        <div className="right-image">
         <img src={right_image} alt="icon" width={700} height={606} />
         <Button className='button-create'>Talk to sales</Button> 
        </div>
      </div>
      {/* <SocialInfluncingCard /> */}
      <Brands />
      <EnterpriseCard />
  </div>
  <Footer />
  </>
  )
}
export default Brand