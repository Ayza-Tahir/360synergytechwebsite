import "./PortfolioHeader.css";

import Portfolio1 from "./../../../Assets/teamH2.png";
import Portfolio2 from "./../../../Assets/teamH.png";
import React from 'react'

function PortfolioHeader() {
  return (
    <div className="Portfolio12-layout1">
      <img src={Portfolio2} alt="icon" className="Portfolio23-layout1" />
      <div className="Portfolio12-layout2">
        <div className="Portfolio12-layout3">
          <p className="Portfolio12-content1">PORTFOLIO</p>
        </div>
        <div className="Portfolio12-layout4">
          <div className="Portfolio12-layout5">
            <a href=" " class="Portfolio12-content2">
              Home
            </a>
          </div>
          <div className="Portfolio12-layout6">
            <a href=" " class="Portfolio12-content3">
              <img
                src={Portfolio1}
                alt="icon"
                className="Portfolio23-layout8"
              />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PortfolioHeader
