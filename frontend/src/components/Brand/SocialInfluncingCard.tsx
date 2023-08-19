import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'

const SocialInfluncingCard = () => {

  return (
    <div className="text-start" style={{background: "rgba(13, 66, 106, 1)", height: 300, display: "flex", alignItems: "center"}}>
        <div className='container'>
          <div style={{ width: 300, marginLeft: '150px'}} className='card-body'>
          <p style={{fontSize: "20px"}}>Socialfluencing</p>
          <p>Use regular social media users to spread the word about your brand.</p>
          <a href='#' style={{color: "white", marginRight: "10px"}}> Get Started</a> <ArrowRightOutlined />
          </div>
        </div>

        <div className='container'>
          <div  style={{ width: 300, marginLeft: '150px'}} className='card-body'>
            <p  style={{fontSize: "20px"}}>Creator Campaigns</p>
          <p>You know the deal. Find, invite, and manage influencers to reach their fans and followers.</p>
          <a href='#' style={{color: "white", marginRight: "10px"}}> Create a campaign</a> <ArrowRightOutlined />
          </div>
        </div>
      </div>
  )

}
export default SocialInfluncingCard