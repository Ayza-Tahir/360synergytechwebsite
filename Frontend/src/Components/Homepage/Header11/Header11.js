import "./Header11.css";

import React from 'react'
import header011 from "./../../../Assets/header11.png";
import header012 from "./../../../Assets/header12.png";

function Header11() {
  return (
    <div className="hd-layout1">
      <img src={header011} alt="Background" className="hd-layout2" />
      <div className="hd-layout3">
        <div className="hd-layout4">
          <div className="hd-layout8"></div>
          <div className="hd-layout9">
            <p class="hd-content1">Solutions for your businesses</p>
          </div>
        </div>
        <div className="hd-layout5">
          <div className="hd-layout10"></div>
          <div className="hd-layout11">
            <p class="hd-content3">
              <span>IT Solutions </span>
              <span>
                <span className="hd-content4">&</span> Technology
              </span>
            </p>
          </div>
        </div>
        <div className="hd-layout6">
          <p class="hd-content2">
            There are many of passages of lorem Ipsum, but the majori have
            suffered alteration in some form.
          </p>
        </div>
        <div className="hd-layout7">
          <div className="hd-layout12">
            <button type="button" className="Estimate">
              Estimate your Project
            </button>
          </div>
          <div className="hd-layout13">
            <img src={header012} alt="Background" className="hd-layout14" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header11
