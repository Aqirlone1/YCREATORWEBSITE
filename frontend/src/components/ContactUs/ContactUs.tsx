import React, {useState, useEffect, useRef} from 'react'
import { Button, Input, Select } from "antd"
import fbIcon from "../../icons/Facebook_1.png";
import instagramIcon from "../../icons/Instagram_1.png";
import twitterIcon from "../../icons/Twitter_1.png";
import YoutubeIcon from "../../icons/Youtube_1.png";
import './ContactUs.css'
import useDocumentTitle from '../useDocumentTitle';

const ContactUs = () => {
  const [gender, setGender] = useState('')
  const [state, setState] = useState('')
  useDocumentTitle('Contact us')

const states = [
  {label: "Andhra Pradesh", value: "Andhra Pradesh"},
  {label: "Arunachal Pradesh", value: "Arunachal Pradesh"}
  // " Assam", "Bihar",
  // "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  // "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  //  "Madhya Pradesh", "Maharashtra", "Manipur",
  //   "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  //    "Sikkim", "Tamil Nadu", "Telangana", 
  //    "Tripura"," Uttar Pradesh", "Uttarakhand","West Bengal"
]

const genders = [
  {label: "Male", value: "Male"},
  {label: "Female", value: "Female"},
  {label: "Other", value: "Other"},

]

  return(
    <div className="bodyCard">
    <div className="creator-page-container">
      <div className="creator-page-home py-4 mt-5">
        <div className="creator-page-home-body my-3">
           <div className="brand-container mx-5">
             <h1 className="heading">Contact us</h1>   
             <div className="cardAddress">
             <div className='innerCard'>
              <p>Our Address</p>
               Chinappaspark view
               1st Cross Rd, Jaibharath Nagar,
               JCO Colony, Bengaluru,
              </div>
             <div className='innerCard'>
              <p>Call Us</p>
               +91 9622222070<br/>
               +91 7814094366
             </div>
            </div>
          </div>
          <div className="brand-container mx-5">
            <div className="cardAddress">
             <div className='innerCard'>
              <p>Email</p>
              sales@ycreator.ai <br/>
              contact@ycreator.ai
              </div>
            <div className='innerCard'>
             <p>Open Hours</p>
             Monday - Friday<br/>
             9:00AM - 07:00PM
            </div>
            </div>
          </div>
          <div className="footer">
          <div className="brand-container mx-5 about">  
            <div className="enquiry">
                <p>Enquires</p>
                For Advertiser Enquiries, contact <br/>
                <a href="">contact@ycreator.ai</a>  <br/>
                For Creator Enquiries, contact  <br/>
                <a href="#">contact@ycreator.ai</a> <br/>
                For Agency Enquiries, contact <br/>
                <a href="#">contact@ycreator.ai</a>         
            </div>
            <div>
             <p>Company</p>
              About Us  <br/>
              FAQs <br/>
              Contact Us <br/>
              Privacy Policy <br/>
              Terms and Condition
            </div>
            </div>
            <div className='icons'>
              <div>2022 YCreator All rights reserved</div>
              <div>
                <img src={fbIcon} height={50} width={50} alt="" />
                <img src={instagramIcon} height={50} width={50} alt="" />
                <img src={twitterIcon} height={50} width={50} alt="" />
                <img src={YoutubeIcon} height={50} width={50} alt="" />
             </div>
        </div>
        </div>
       </div>
      </div>
      </div>
      <div className="inputBox">
      <div style={{fontWeight: 500, fontSize: "20px"}} className='text-start'> First, We Need A Little Information... </div>
          <div className="custom-select">
          <select>
          <option value="" disabled selected>I would describe myself as...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="arrowOne"></div>
      <div className="input">
        <Input className='customSelect'  placeholder="First Name" />
        <Input  className='customSelectLastName' placeholder="Last Name" />
      </div>
      <div className="d-flex flex-direction-row">
        <Input className='customSelectPhoneNumber' placeholder="Phone Number" />
         <div className="custom-select-state">
          <select className='text-start'>
          <option value="" disabled selected>State</option>
            <option>J & K</option>
            <option>Haryana</option>
            <option>Punjab</option>
          </select>
        </div>
        <div className="arrowTwo"></div>
      </div>
      <Input className='customSelect' placeholder="How can i help you ?" />
      <Button className="submitButton" type="primary"> Submit </Button>
      </div>
    </div>
  )

}
export default ContactUs