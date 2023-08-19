import { Button } from "antd"
import Navbar from "../Navbar/Navbar"
import './ContactUs.css'

const ContactUs = () => {

  return(
    <div className="creator-page-container">
     <Navbar background="var(--color-primary-black)" />
      <div className="creator-page-home py-4 mt-5">
        <div className="creator-page-home-body my-3">
          <div className="input">
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
             <div className="card">
              hello
            </div>
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
          <div className="brand-container mx-5 about">  
            <div className="enquiry">
             <div className=''>
                <p>Enquires</p>
                For Advertiser Enquiries, contact <br/>
                <a href="contact@ycreator.ai">contact@ycreator.ai</a>  <br/>
                For Creator Enquiries, contact  <br/>
                <a href="#">contact@ycreator.ai</a> <br/>
                For Agency Enquiries, contact <br/>
                <a href="#">contact@ycreator.ai</a>         
              </div>
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
          </div>
        </div>
      </div>
  )

}
export default ContactUs