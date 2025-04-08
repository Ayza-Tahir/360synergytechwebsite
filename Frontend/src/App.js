import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUsMerge from "./Components/AboutUsPage/AboutUsMerge/AboutUsMerge";
import CareerMerge from './Components/CareerPage/CareerMerge/CareerMerge';
import HomepageMerge from "./Components/Homepage/HomepageMerge/HomepageMerge";
import JobMerge from './Components/JobPage/JobMerge/JobMerge';
import OurTeamMerge from './Components/OurTeamPage/OurTeamMerge/OurTeamMerge';
import PortfolioMerge from './Components/PortfolioPage/PortfolioMerge/PortfolioMerge';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageMerge />} />
          <Route path="/about" element={<AboutUsMerge />} />
          <Route path="/team" element={<OurTeamMerge />} />
          <Route path="/career" element={<CareerMerge />} />
          <Route path="/job" element={<JobMerge />} />
          <Route path="/portfolio" element={<PortfolioMerge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

