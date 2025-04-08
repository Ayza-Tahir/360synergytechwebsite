import "./EstimateProject.css";

import EstimateBoy from "./../../../Assets/EstimateBoy.png";
import EstimateP from "./../../../Assets/EstimateP.png";
import React from 'react'
import estimatePhone from "./../../../Assets/estimatePhone.png";

function EstimateProject() {
  return (
    <div className="Es-layout1">
      <img src={EstimateP} alt="background" className="Es-layout" />
      <div className="Es-container">
        <img src={EstimateBoy} alt="background" className="Es-layout2" />
        <div className="Es-layout3">
          <img src={estimatePhone} alt="background" className="Es-layout4" />
          <p className="Es-content1">CALL US 24/7</p>
          <p className="Es-content2">(+123) 456-9989</p>
          <p className="Es-content3">
            Have any idea or project for in your mind call us or schedule a
            appointment. Our representative will reply you shortly.
          </p>
          <button className="Es-button">Estimate Your Project</button>
        </div>
      </div>
    </div>
  );
}

export default EstimateProject
