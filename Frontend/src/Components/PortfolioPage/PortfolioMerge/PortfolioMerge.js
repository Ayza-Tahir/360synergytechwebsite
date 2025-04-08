import Appointment from '../../Homepage/Appointment/Appointment';
import Banner1 from '../../Homepage/Banner1/Banner1';
import CopyrightsAll from '../../Homepage/CopyrightsAll/CopyrightsAll';
import FooterAll from '../../Homepage/FooterAll/FooterAll';
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'
import PortfolioIdea from '../PortfolioIdea/PortfolioIdea'
import PortfolioWork from '../PortfolioWork/PortfolioWork'
import React from 'react'

function PortfolioMerge() {
  return (
    <div>
      <PortfolioHeader />
      <PortfolioIdea />
      <PortfolioWork />
      <Banner1 />
      <Appointment />
      <FooterAll />
      <CopyrightsAll />
    </div>
  );
}

export default PortfolioMerge
