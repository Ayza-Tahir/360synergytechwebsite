import "./Customers.css";

import Customer1 from "./../../../Assets/c1.png";
import Customer2 from "./../../../Assets/c2.png";
import Customer3 from "./../../../Assets/c3.png";
import CustomerP from "./../../../Assets/customerP.png";
import React from 'react'

function Customers() {
  return (
    <div className="cs-layout1">
      <div className="cs-layout2">
        <div className="cs-layout3">
          <p className="cs-content1">TESTIMONIAL</p>
        </div>
        <div className="cs-layout4">
          <p className="cs-content2">What Saying Our Customers</p>
        </div>
        <div className="cs-layout5"></div>

        <div className="cs-layout6">
          <div className="cs-layout7">
            <div className="cs-layout8">
              <img src={CustomerP} alt="background" className="customerP" />
              <div className="cs-layout9">
                <p className="cs-content3">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway.
                </p>
              </div>
            </div>
            <div className="cs-layout10">
              <img src={Customer3} alt="background" className="customerP1" />
              <div className="cs-layout11">
                <p className="cs-content4">Mariya Khan</p>
              </div>
              <div className="cs-layout12">
                <p className="cs-content5">CEO, Brick Consulting</p>
              </div>
            </div>
          </div>
          <div className="cs-layout7">
            <div className="cs-layout8">
              <img src={CustomerP} alt="background" className="customerP" />
              <div className="cs-layout9">
                <p className="cs-content3">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway.
                </p>
              </div>
            </div>
            <div className="cs-layout10">
              <img src={Customer2} alt="background" className="customerP1" />
              <div className="cs-layout11">
                <p className="cs-content4">Sonia Akhter</p>
              </div>
              <div className="cs-layout12">
                <p className="cs-content5">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="cs-layout7">
            <div className="cs-layout8">
              <img src={CustomerP} alt="background" className="customerP" />
              <div className="cs-layout9">
                <p className="cs-content3">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway.
                </p>
              </div>
            </div>
            <div className="cs-layout10">
              <img src={Customer1} alt="background" className="customerP1" />
              <div className="cs-layout11">
                <p className="cs-content4">Deluar Hossen</p>
              </div>
              <div className="cs-layout12">
                <p className="cs-content5">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="cs-layout13">
            <div className="cs-layout61"></div>
            <div className="cs-layout62"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers
