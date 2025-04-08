import "./MeetTeam.css";

import React from 'react'
import team1 from "./../../../Assets/team1.png";
import team2 from "./../../../Assets/team2.png";
import team3 from "./../../../Assets/team3.png";
import team4 from "./../../../Assets/team4.png";
import team5 from "./../../../Assets/team5.png";
import team6 from "./../../../Assets/team6.png";

function MeetTeam() {
  return (
    <div className="team-layout1">
      <div className="team-layout2">
        <p className="team-content1">OUR TEAM</p>
      </div>
      <div className="team-layout3">
        <p className="team-content2">Meet the Team</p>
      </div>
      <div className="team-layout4"></div>
      <div className="team-layout5">
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team1} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Alica Bendor</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team3} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Robert Brown</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team5} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Monika Tylor</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team2} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Alica Bendor</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team4} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Robert Brown</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
        <div className="team-layout6">
          <div className="team-layout7">
            <img src={team6} className="team-layout9" alt="Background" />
          </div>
          <div className="team-layout8">
            <div className="team-layout10">
              <p className="team-content3">Monika Tylor</p>
            </div>
            <div className="team-layout11">
              <p className="team-content4">Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTeam
