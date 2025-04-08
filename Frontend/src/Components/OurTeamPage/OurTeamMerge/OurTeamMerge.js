import Appointment from "../../Homepage/Appointment/Appointment";
import AskedQuestions from "../../Homepage/AskedQuestions/AskedQuestions";
import CopyrightsAll from "../../Homepage/CopyrightsAll/CopyrightsAll";
import FooterAll from "../../Homepage/FooterAll/FooterAll";
import OurTeamHeader from "../OurTeamHeader/OurTeamHeader";
import React from 'react'
import TeamMembers from "../TeamMembers/TeamMembers";

function OurTeamMerge() {
  return (
    <div>
      <OurTeamHeader />
      <TeamMembers />
      <AskedQuestions />
      <Appointment />
      <FooterAll />
      <CopyrightsAll />
    </div>
  );
}

export default OurTeamMerge
