//import logo from '../images/thrive_logo.jpg';

import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import "@/styles/styles.css"
import "@/styles/global.css"
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Home = () => {
  const columns = [
    {
      icon: '../images/small_thrive_logo.webp',
      title: 'The Course',
      text: 'The Course is the first of the three parts that make up Thrive. It’s a collection of videos that cover the different areas and aspects of life. From the essentials of life to the life areas to our mindset, this part provides a crucial understanding of what a healthy, thriving life looks like.'
    },
    {
      icon: '../images/building_blocks.webp',
      title: 'The Setup',
      text: 'The Setup is where we begin applying what we learned in The Course. It focuses on the essentials of life: order, planning, sleep, nutrition, and exercise. This part helps you build the right habits that will enable you to thrive and build the life you want for yourself.'
    },
    {
      icon: '../images/running_man.webp',
      title: 'The Way',
      text: 'The Way is the final part of Thrive. Once you’ve learned about the different aspects and areas of life and reached a solid baseline, you can begin building the life you want. This part focuses on fine-tuning the areas of your life, helping you recognize where your focus should be.'
    },
  ];

  return (
    <div>
      <div className="h-screen bg-custom-gradient">
        <Navbar />
        <HeroImage />
      </div>
      <InfoSection
        subject="What is Thrive?"
        info="Thrive is a three-in-one training system focused on helping you live a happier, more fulfilling life. In order to change our lives into what we want them to be, we need to change how we’re living. Change is really just a two-part process. First is knowledge, followed by application. We need to know and understand what makes a good life and what our goals for our life should be. After that, we need to apply that knowledge in our lives."
      />
      <InfoSection
        subject="The Thrive Way"
        info="Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content."
        columns={columns}
        includeGradient={true}
      />
      <InfoSection
        subject="Why Join?"
        info="Life is not something we should take for granted. We all want to make the most of the time we have here on earth, but it's easy for us to get distracted. Thrive was created to help people live their best lives."
        buttonText="Join Now"
        buttonLink="/"
      />
      <Footer />
    </div>
  );
};

export default Home;