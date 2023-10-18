// src/App.js
import HomeModule from "@/components/HomeModule";
import "@/styles/global.css"
import React from 'react';
import Navbar3 from '../components/Navbar3';

function App() {

  return (
    <div>
        <Navbar3 />
    <div className="bg-hero-gradient-end w-full h-screen flex items-center justify-center">
        <HomeModule
            number={1}
            heading={"Course"}
            description={"Learn how to thrive in life."}
            link={"/course"}
        />
        <HomeModule
            number={2}
            heading={"Setup"}
            description={"Get started with your journey."}
        />
        <HomeModule
            number={3}
            heading={"Routine"}
            description={"Keep track of your progress."}
        />
    </div>
    </div>
  );
}

export default App;
