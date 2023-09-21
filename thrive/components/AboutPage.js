// src/components/About.js

import React from 'react';
import TabbedComponent from './Tabs';
import HeroImage from './AnimHero';

function About() {
  return (
    <div className="h-3/4 bg-hero-gradient-end flex items-center flex-col">
        <div className="flex items-center justify-center w-3/4 my-40">
            <h1 className='w-full text-7xl font-semibold text-right pr-20'>Thrive's Story</h1>
            <img src="../images/harnack_profile.png" alt="Logo" className="flex w-full h-[500px] object-cover" />
        </div>
    </div>
  );
}

export default About;
