import "./CareerHeader.css";

import React from 'react'
import career111 from "./../../../Assets/teamH2.png";
import career222 from "./../../../Assets/teamH.png";

function CareerHeader() {

  return (
    <div className="career12-layout1">
      <img src={career222} alt="icon" className="career23-layout1" />
      <div className="career12-layout2">
        <div className="career12-layout3">
          <p className="career12-content1">APPLY NOW</p>
        </div>
        <div className="career12-layout4">
          <div className="career12-layout5">
            <a href=" " class="career12-content2">
              Home
            </a>
          </div>
          <div className="career12-layout6">
            <a href=" " class="career12-content3">
              <img src={career111} alt="icon" className="career23-layout8" />
              Career
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CareerHeader
