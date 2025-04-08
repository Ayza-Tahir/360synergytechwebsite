import Appointment from '../../Homepage/Appointment/Appointment';
import AskedQuestions from '../../Homepage/AskedQuestions/AskedQuestions';
import CopyrightsAll from '../../Homepage/CopyrightsAll/CopyrightsAll';
import Customers from '../../Homepage/Customers/Customers';
import EstimateProject from '../../Homepage/EstimateProject/EstimateProject';
import Event011 from '../../Homepage/Event011/Event011';
import FooterAll from '../../Homepage/FooterAll/FooterAll';
import Global from '../Global/Global';
import Header12 from '../Header12/Header12';
import MeetTeam from '../../Homepage/MeetTeam/MeetTeam';
import React from 'react'

function AboutUsMerge() {
  return (
    <div>
      <Header12 />
      <Global/>
      <MeetTeam />
      <EstimateProject />
      <Event011 />
      <Customers />
      <AskedQuestions />
      <Appointment />
      <FooterAll />
      <CopyrightsAll />
    </div>
  );
}

export default AboutUsMerge
