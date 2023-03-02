import "./style/App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about_me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};
export default App;
