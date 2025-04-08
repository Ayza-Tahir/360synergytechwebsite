import "./Appointment.css";

import Appointment1 from "./../../../Assets/group.png";
import React from 'react'

function Appointment() {
  return (
    <div className="ap-layout1">
      <div className="ap-layout2">
        <img src={Appointment1} alt="Group" className="appointment1" />
      </div>
      <div className="ap-layout3">
        <div className="ap-layout4">
          <div className="ap-layout5">
            <p className="ap-content1">Schedule Your Appointment</p>
          </div>
          <div className="ap-layout6">
            <p className="ap-content2">We here to help you 24/7 with experts</p>
          </div>
          <div className="ap-layout7">
            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control95"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control95"
                  placeholder="E-mail"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control95"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control95"
                  placeholder="Your Website Link"
                />
              </div>
            </form>
          </div>
          <div className="ap-layout8">
            <button type="submit" className="submit-button22">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment
