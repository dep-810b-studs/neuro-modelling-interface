import React from "react";
import './Home.css';
import MemristorParams from "../Components/MemristorParams";
import NetworkParams from "../Components/NetworkParams";
import Patterns from "../Components/Patterns";
import RunTaskMenu from "../Components/RunTaskMenu";

function Home() {
  return (
      <div className='home-page-wrapper'>
          <div className='params-section'>
              <MemristorParams/>
              <NetworkParams/>
              <Patterns/>
          </div>
          <RunTaskMenu/>
      </div>
  );
}

export default Home;