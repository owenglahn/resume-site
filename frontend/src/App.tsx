import "./style/App.css";
import React from "react";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";


const App = () => {
  return (
    <>
      <Landing/>
      <Resume />
      <Portfolio/>
    </>
  );
};
export default App;
