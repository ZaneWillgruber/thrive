// src/App.js
import "@/styles/global.css"
import React from 'react';
import AboutPage from '@/components/AboutPage'
import Navbar3 from "@/components/Navbar3";
import WhyJoin from "@/components/WhyJoin";

function App() {
  const founderContent = ["Hello! My name is Alex. I created Thrive to help people improve their lives and themselves. I struggled with laziness and procrastination in the past, and I realized there are choices I could make that led to me being happier. Little by little I began to realize that the steps needed to live a happier and more fulfilling life could be grouped together and made into a sort of guide.",
    "I realized that I was happier when I got outside and moved around, when I spent time with a friend or two, when I made progress and accomplished tasks and goals. It was mostly things I already knew made me happy, but getting around to actually doing them was the challenge.",
    "This led me to begin working on Thrive. I wanted to create a program that helps people learn more about what makes us happy as humans and also helps them form the habits that produce that happiness.",
    "I'm just one random guy, but I have a passion for people and for life. I hope someday I can expand Thrive and bring in more people to help me make it as beneficial as possible for everyone. Long story short though, I feel that we can all work towards living happier, more fulfilling lives, and I want to help as many people as I can do that."
  ]

  return (
    <div>
      <Navbar3 />
      <AboutPage />
      <WhyJoin
        subject="Founder Story"
        info={founderContent}
      />
    </div>
  );
}

export default App;
