import Appointment from "../Appointment/Appointment";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import Banner1 from "./../Banner1/Banner1";
import CopyrightsAll from "../CopyrightsAll/CopyrightsAll";
import Customers from  "../Customers/Customers"
import EstimateProject from "../EstimateProject/EstimateProject";
import FooterAll from './../FooterAll/FooterAll';
import Header11 from "../Header11/Header11"
import ProjectCounts from "../ProjectCounts/ProjectCounts";
import React from 'react'
import ServicesPartner from "../ServicesPartner/ServicesPartner";
import SolutionServices from "../SolutionServices/SolutionServices";
import Tips from "../Tips/Tips";

// import Navbar2 from '../Navbar2/Navbar2'
// import NavbarHomepage from '../Navbar/NavbarHomepage'



function HomepageMerge() {
  return (
    <div>
      {/* <NavbarHomepage /> */}
      {/* <Navbar2 /> */}
      <Header11 />
      <Banner1 />
      <SolutionServices />
      <ServicesPartner />
      <ProjectCounts />
      <Tips />
      <EstimateProject />
      <Customers />
      <AskedQuestions />
      <Appointment />
      <FooterAll />
      <CopyrightsAll/>
 
 
    </div>
  );
}

export default HomepageMerge
