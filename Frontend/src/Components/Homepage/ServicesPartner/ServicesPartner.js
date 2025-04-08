import "./ServicesPartner.css";

import React from 'react'
import ServiceT from "./../../../Assets/ServicesPartner.png";
import YearE from "./../../../Assets/Year_Experience.png";

function ServicesPartner() {
  return (
    <div className="SR-layout1">
      <div className="SR-layout2">
        <div className="SR-layout3">
          <img src={YearE} alt="Year Experience" className="srY-layout"/>
        </div>
        <div className="SR-layout4">
          <div className="SR-layout41">
            <p className="sr-content1">:::GET TO KNOW US</p>
          </div>
          <div className="SR-layout42">
            <p class="sr-content2">
              <span>YOUR BEST DIGITAL SOLUTION </span>
              <span class="sr-content3">SERVICE </span>
              <span>PARTNER</span>
            </p>
          </div>
          <div className="SR-layout43">
            <p className="sr-content4">
              Web designing in a powerful way of just not an only professions,
              however, in a passion for our Company. We have to a tendency to
              believe the idea that smart looking of any website is the first
              impression on visitors.
            </p>
          </div>
          <div className="SR-layout44">
            <div class="sr-layout-row">
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW">The business applications</p>
              </div>
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW"> The business applications</p>
              </div>
            </div>

            <div class="sr-layout-row">
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW">Revolutionary catalysts chang</p>
              </div>
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW">Revolutionary catalysts chang</p>
              </div>
            </div>
            <div class="sr-layout-row">
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW"> Catalysts for chang seamlessly</p>
              </div>
              <div class="sr-layoutW">
                <img src={ServiceT} alt="tick" class="srt-content" />
                <p class="sr-contentW"> Catalysts for chang seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPartner
