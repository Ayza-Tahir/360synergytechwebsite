import "./OurTeamHeader.css";

import React from 'react'
import team111 from "./../../../Assets/teamH2.png";
import team222 from "./../../../Assets/teamH.png";

function OurTeamHeader() {
  return (
    <div className="teamH12-layout1">
      <img src={team222} alt="icon" className="teamH23-layout1" />
      <div className="teamH12-layout2">
        <div className="teamH12-layout3">
          <p className="teamH12-content1">OUR TEAM</p>
        </div>
        <div className="teamH12-layout4">
          <div className="teamH12-layout5">
            <a href=" " class="teamH12-content2">
              Home
            </a>
          </div>
          <div className="teamH12-layout6">
            <a href=" " class="teamH12-content3">
              <img src={team111} alt="icon" className="teamH23-layout8" />
              Team
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default OurTeamHeader
