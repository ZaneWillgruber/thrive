// TabbedComponent.js

import React, { useState } from 'react';

function TabbedComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } py-2 px-4 rounded-lg focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className={activeTab === 0 ? '' : 'hidden'}>
          {tabs[0].content}
        </div>
        <div className={activeTab === 1 ? '' : 'hidden'}>
          {tabs[1].content}
        </div>
        <div className={activeTab === 2 ? '' : 'hidden'}>
          {tabs[2].content}
        </div>
      </div>
    </div>
  );
}

export default TabbedComponent;
