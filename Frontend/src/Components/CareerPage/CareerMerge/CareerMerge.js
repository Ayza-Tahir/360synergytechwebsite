import Banner1 from '../../Homepage/Banner1/Banner1';
import CareerHeader from '../CareerHeader/CareerHeader';
import CopyrightsAll from '../../Homepage/CopyrightsAll/CopyrightsAll';
import Customers from '../../Homepage/Customers/Customers';
import Event011 from '../../Homepage/Event011/Event011';
import Explore from '../Explore/Explore';
import FooterAll from '../../Homepage/FooterAll/FooterAll';
import React from 'react'
import SolutionServices from '../../Homepage/SolutionServices/SolutionServices';

function CareerMerge() {
  return (
    <div>
        <CareerHeader/>
        <Explore/>
      <Banner1 />
      <SolutionServices />
      <Event011 />
      <Customers />
      <FooterAll />
      <CopyrightsAll />
    </div>
  );
}

export default CareerMerge
