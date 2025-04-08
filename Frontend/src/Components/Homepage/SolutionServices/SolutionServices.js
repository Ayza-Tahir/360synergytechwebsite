import "./SolutionServices.css";

import React from 'react'
import solS1 from "./../../../Assets/solS1.png";
import solS2 from "./../../../Assets/solS2.png";
import solS3 from "./../../../Assets/solS3.png";
import solS4 from "./../../../Assets/solS4.png";
import solS5 from "./../../../Assets/solS5.png";
import solS6 from "./../../../Assets/solS6.png";

function SolutionServices() {
  return (
    <div className="solS-layout1">
      <div className="solS-layout2">
        <div className="solS-layout3">
          <p className="solS-content1">Services</p>
        </div>
        <div className="solS-layout4">
          <p className="solS-content2">
            We Are Offering All Kinds of IT Solutions Services
          </p>
        </div>
        <div className="solS-blue"></div>

        <div className="solS-layout5">
          <div className="whiteS-layout1">
            <img src={solS1} alt="Service" className="solS-figure" />
            <p className="solS-content3">Software Development</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio data center for managing database.
            </p>
          </div>

          <div className="whiteS-layout1">
            <img src={solS2} alt="Service" className="solS-figure" />
            <p className="solS-content3">Web Development</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio datacenter for managing database.
            </p>
          </div>
          <div className="whiteS-layout1">
            <img src={solS3} alt="Service" className="solS-figure" />
            <p className="solS-content3">Analytic Solutions</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio datacenter for managing database.
            </p>
          </div>

          <div className="whiteS-layout1">
            <img src={solS4} alt="Service" className="solS-figure" />
            <p className="solS-content3">Cloud & DevOps</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio data center for managing database.
            </p>
          </div>
          <div className="whiteS-layout1">
            <img src={solS5} alt="Service" className="solS-figure" />
            <p className="solS-content3">Product & Design</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio data center for managing database.
            </p>
          </div>
          <div className="whiteS-layout1">
            <img src={solS6} alt="Service" className="solS-figure" />
            <p className="solS-content3">Data Center</p>
            <p className="solS-content4">
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto odio data center for managing database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionServices
