import React from "react";
import './Home.css';
import MemristorParams from "../Components/MemristorParams";
import NetworkParams from "../Components/NetworkParams";
import Patterns from "../Components/Patterns";

function Home() {
  return (
    <div className='home-page-wrapper'>
        <MemristorParams/>
        <NetworkParams/>
        <Patterns/>
    </div>
  );
}

export default Home;