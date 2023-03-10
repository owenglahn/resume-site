import "./style/App.css";
import React from "react";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Travel from "./pages/Travel";


const App = () => {
  return (
    <>
      <Landing/>
      <Resume />
      <Portfolio/>
      <AboutMe /> 
      <Travel />
    </>
  );
};
export default App;
