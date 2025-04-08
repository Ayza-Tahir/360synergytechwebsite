import "./PortfolioWork.css";

import React from 'react'
import portfolio111 from "./../../../Assets/portfolio32.png";
import portfolio55 from "./../../../Assets/EstimateP.png";
import portfolioPhone from "./../../../Assets/estimatePhone.png";

function PortfolioWork() {
  return (
    <div className="portfolio99-layout1">
      <img src={portfolio55} alt="background" className="portfolio99-layout" />
      <div className="portfolio99-container">
        <img
          src={portfolio111}
          alt="background"
          className="portfolio99-layout2"
        />
        <div className="portfolio99-layout3">
          <img
            src={portfolioPhone}
            alt="background"
            className="portfolio99-layout4"
          />
          <p className="portfolio99-content1">CALL US 24/7</p>
          <p className="portfolio99-content2">(+123) 456-9989</p>
          <p className="portfolio99-content3">BRING IDEAS TO LIFE</p>
          <p className="portfolio99-content4">LET’S TALK ABOUT YOUR PROJECT</p>
          <button className="portfolio99-button">Estimate Your Project</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioWork
