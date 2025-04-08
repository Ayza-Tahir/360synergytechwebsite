import "./Header12.css";

import React from 'react'
import header122 from "./../../../Assets/header122.png";
import header23 from "./../../../Assets/header23.png";

function Header12() {
  return (
    <div className="header12-layout1">
      <img src={header23} alt="icon" className="header23-layout1" />
      <div className="header12-layout2">
        <div className="header12-layout3">
          <p className="header12-content1">ABOUT US</p>
        </div>
        <div className="header12-layout4">
          <div className="header12-layout5">
            <a href=" " class="header12-content2">
              Home
            </a>
          </div>
          <div className="header12-layout6">
            <a href=" " class="header12-content3">
              <img src={header122} alt="icon" className="header23-layout8" />
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header12
