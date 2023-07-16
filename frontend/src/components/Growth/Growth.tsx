import React from "react";
import "./Growth.css";
function Growth() {
  return (
    <div className="growth-container d-flex flex-column py-5">
      <span className="my-2" style={{fontSize:20}}>Our Growth</span>
      <span className="my-3" style={{fontSize:48}}>The next big thing: YCreator</span>
      <div className="d-flex my-4 p-2 w-100 justify-content-around">
        <span className="d-flex flex-column align-items-center justify-content-center">
          <span className="values">1000 Hrs</span>
          <span className="values-des my-4">Creative Support</span>
        </span>
        <span className="d-flex flex-column align-items-center justify-content-center">
          <span className="values">45K+</span>
          <span className="values-des my-4">Creative Network</span>
        </span>
        <span className="d-flex flex-column align-items-center justify-content-center" >
          <span className="values">240+</span>
          <span className="values-des my-4">Freemium Campaigns</span>
        </span>
      </div>
    </div>
  );
}

export default Growth;
