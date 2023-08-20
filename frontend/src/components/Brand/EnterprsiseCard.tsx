import React from "react"
import './Enterprise.css'
import firstImage from './../../icons/Rectangle1270.png'
import secondImage from './../../icons/Rectangle1272.png'
import thirdImage from './../../icons/Rectangle1273.png'
import avatar from './../../icons/ava.png'
import { Button } from "antd"

const EnterpriseCard = () => {
return (
  <>
  <div className="body">
  <div className="heading"> An enterprise template to ramp up your company website </div>
    <div className="cards">
    <div className="cardOne">
     <div className="text-start my-4"><span style={{fontSize: "20px", fontWeight: 600}}>YCreator </span>
     <span style={{fontSize: "20px", fontWeight: 400}}>has made Creator Discovery processing so simple for us.</span> </div>
     <div className="socialComment">
      <img className='avatar' src={avatar} alt="avatar"  width={50} height={50} style={{marginLeft: "-1rem"}}/>
     <div style={{fontSize: "16px", fontWeight: 600, marginLeft: "10px"}} className="text-start">Farheen Bano <br/><span style={{fontSize: "14px", fontWeight: 400, marginLeft: ""}}> Marketing @ BharatAgri App </span> </div> 
     </div>
    </div>
    <div className="cardOne">
     <div className="text-start my-4">
     <span style={{fontSize: "20px", fontWeight: 400}}>We will definitely hand over all our future demands to <span style={{fontSize: "20px", fontWeight: 600}}> YCreator </span> to fulfil as they are quality driven</span> </div>
     <div className="socialComment">
      <img className='avatar' src={avatar} alt="avatar"  width={50} height={50} style={{marginLeft: "-3rem"}}/>
     <div style={{fontSize: "16px", fontWeight: 600, marginLeft: "10px"}} className="text-start">Aasim Ahmad <br/><span style={{fontSize: "14px", fontWeight: 400, marginLeft: ""}}>Marketing @ Vahaan </span> </div> 
     </div>
    </div><div className="cardOne">
     <div className="text-start my-4"><span style={{fontSize: "20px", fontWeight: 600}}>YCreator </span>
     <span style={{fontSize: "20px", fontWeight: 400}}>manages our creator workforce with ease and the experience is quite enjoyable!</span> </div>
     <div className="socialComment">
      <img className='avatar' src={avatar} alt="avatar"  width={50} height={50} style={{marginLeft: "-3rem"}}/>
     <div style={{fontSize: "16px", fontWeight: 600, marginLeft: "10px"}} className="text-start">Xain Mir <br/><span style={{fontSize: "14px", fontWeight: 400, marginLeft: ""}}> Marketing @ Myntra </span> </div> 
     </div>
    </div>
    </div>
  </div>
  <div className="container">
    <p>Our Socials</p>
    <div className="headingtwo">Value proposition creator management venture</div>
    <div className="cards">
    <div className="imagecard"> 
      <img src={firstImage} alt="icon" width={250} height={200} style={{marginBottom: "13px"}} />
      <a href="#">Linkedin </a><span style={{color: "gray"}}> March 22, 2023</span>
      <div style={{marginTop: "10px"}}>We want to scale among the top and become India’s number 1 creator marketplace</div>
    </div>
    <div className="imagecard"> 
      <img src={secondImage} alt="icon" width={250} height={200}  style={{marginBottom: "13px"}} />
      <a href="#">Product </a><span style={{color: "gray"}}> March 22, 2023</span>
      <div style={{marginTop: "10px"}}>We are developing an end to end solution for advertisers scale creator led growth</div>
    </div>
    <div className="imagecard"> 
      <img src={thirdImage} alt="icon" width={250} height={200}  style={{marginBottom: "13px"}}/>
      <a href="#">Sales </a><span style={{color: "gray"}}> March 22, 2023</span>
      <div style={{marginTop: "10px"}}>We are open for Freemium campaigns to test our Beta Product.</div>
    </div>
    </div>
    <Button style={{borderRadius: "50px", height: 50, width: 170, marginBottom: "10rem", marginTop: "5rem", fontWeight: 700}}>Learn More</Button>
  </div>
  </>
)
}
export default EnterpriseCard