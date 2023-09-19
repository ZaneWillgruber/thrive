import React from 'react';
import { FaBook, FaHammer, FaRunning } from 'react-icons/fa';


const Button = ({ icon, title, subtext }) => {
    let IconComponent;
  
    switch (icon) {
      case 'book':
        IconComponent = FaBook;
        break;
      case 'hammer':
        IconComponent = FaHammer;
        break;
      case 'running':
        IconComponent = FaRunning;
        break;
      default:
        IconComponent = null;
    }
  
    return (
      <div className="group relative flex flex-col items-center justify-center p-6 cursor-pointer transition-transform transform hover:scale-105 rounded-2xl border-4 border-black border-opacity-5">
        <div className="bg-gray-300 rounded-full p-4">
          {IconComponent && <IconComponent className="text-3xl text-gray-600" />}
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg text-gray-700">{subtext}</p>
        </div>
      </div>
    );
  };

const MyComponent = () => {
  return (
    <div className="mx-auto p-8 bg-white rounded-lg">
      <div className="text-center">
        <h2 className="text-7xl font-semibold">The Thrive Way</h2>
        <p className="text-gray-600 text-3xl">Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content.</p>
      </div>
      <div className="mt-6 flex justify-center space-x-6 mx-32">
        <Button
          icon="book"
          title="Course"
          subtext="The Course is the first of the three parts that make up Thrive. It’s a collection of videos that cover the different areas and aspects of life. From the essentials of life to the life areas to our mindset, this part provides a crucial understanding of what a healthy, thriving life looks like."
        />
        <Button
          icon="hammer"
          title="Setup"
          subtext="The Setup is where we begin applying what we learned in The Course. It focuses on the essentials of life: order, planning, sleep, nutrition, and exercise. This part helps you build the right habits that will enable you to thrive and build the life you want for yourself."
        />
        <Button
          icon="running"
          title="Routine"
          subtext="The Way is the final part of Thrive. Once you’ve learned about the different aspects and areas of life and reached a solid baseline, you can begin building the life you want. This part focuses on fine-tuning the areas of your life, helping you recognize where your focus should be."
        />
      </div>
    </div>
  );
};

export default MyComponent;
