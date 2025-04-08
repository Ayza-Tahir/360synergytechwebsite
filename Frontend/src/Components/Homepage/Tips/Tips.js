import "./Tips.css";

import React from 'react'
import Tips1 from "./../../../Assets/Tips.png";
import Tips2 from "./../../../Assets/Tips1.png";
import Tips3 from "./../../../Assets/Tips3.png";
import Tips4 from "./../../../Assets/Tips4.png";
import Tips5 from "./../../../Assets/Tips5.png";
import Tips6 from "./../../../Assets/Tips6.png";

function Tips() {
  return (
    <div className="tips-layout1">
      <div className="tips-layout2">
        <div className="tips-layout3">
          <p class="tips-content1">BLOGS </p>
        </div>
        <div className="tips-layout4">
          <p class="tips-content2">Read Our Latest Tips & Tricks</p>
        </div>
        <div className="tips-layout5"></div>
        <div className="tips-layout6">
          <div className="tips-layout7">
            <div className="tips-layout8">
              <img src={Tips3} alt="background" className="tips3" />
              <div className="tips-layout14">
                <p class="tips-content3">Software Development</p>
              </div>
            </div>
            <div className="tips-layout9">
              <div className="tips-layout10">
                <div className="date-layout">
                  <img src={Tips4} alt="background" className="tips4" />
                  <p className="tips-content7"> 16 Nov 2020</p>
                </div>
                <div className="tips-layout17">
                  <img src={Tips5} alt="background" className="tips5" />
                  <p className="tips-content8"> admin</p>
                </div>
              </div>
              <div className="tips-layout11">
                <p class="tips-content4">
                  Necessity May Give Us Your Best Virtual Court System
                </p>
              </div>
              <div className="tips-layout12">
                <p class="tips-content5">
                  We denounce with righteous indige nation and dislike men who
                  are so beguiled...
                </p>
              </div>
              <div className="tips-layout13">
                <a href=" " class="tips-content6">
                  Learn More
                  <img src={Tips6} alt="background" className="tips6" />
                </a>
              </div>
            </div>
          </div>
          <div className="tips-layout7">
            <div className="tips-layout8">
              <img src={Tips2} alt="background" className="tips3" />
              <div className="tips-layout15">
                <p class="tips-content3">Web Development</p>
              </div>
            </div>
            <div className="tips-layout9">
              <div className="tips-layout101">
                <div className="date-layout">
                  <img src={Tips4} alt="background" className="tips4" />
                  <p className="tips-content7"> 20 December 2020</p>
                </div>
                <div className="tips-layout17">
                  <img src={Tips5} alt="background" className="tips5" />
                  <p className="tips-content8"> admin</p>
                </div>
              </div>
              <div className="tips-layout11">
                <p class="tips-content4">
                  Tech Products That Makes Its Easier to Stay at Home
                </p>
              </div>
              <div className="tips-layout12">
                <p class="tips-content5">
                  We denounce with righteous indige nation and dislike men who
                  are so beguiled...
                </p>
              </div>
              <div className="tips-layout13">
                <a href=" " class="tips-content6">
                  Learn More
                  <img src={Tips6} alt="background" className="tips6" />
                </a>
              </div>
            </div>
          </div>

          <div className="tips-layout7">
            <div className="tips-layout8">
              <img src={Tips1} alt="background" className="tips3" />
              <div className="tips-layout16">
                <p class="tips-content3">It Services</p>
              </div>
            </div>

            <div className="tips-layout9">
              <div className="tips-layout101">
                <div className="date-layout">
                  <img src={Tips4} alt="background" className="tips4" />
                  <p className="tips-content7"> 22 December 2020</p>
                </div>
                <div className="tips-layout17">
                  <img src={Tips5} alt="background" className="tips5" />
                  <p className="tips-content8"> admin</p>
                </div>
              </div>
              <div className="tips-layout11">
                <p class="tips-content4">
                  Open Source Job Report Show More Openings Fewer
                </p>
              </div>
              <div className="tips-layout12">
                <p class="tips-content5">
                  We denounce with righteous indige nation and dislike men who
                  are so beguiled...
                </p>
              </div>
              <div className="tips-layout13">
                <a href=" " class="tips-content6">
                  Learn More
                  <img src={Tips6} alt="background" className="tips6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips
