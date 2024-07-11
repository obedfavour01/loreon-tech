"use client"
import { useState } from 'react';

const Tabs = ({onTabChange}:{onTabChange:(tab:string) => void}) => {
  const [activeTab, setActiveTab] = useState('all');


  const handleTabChange = (tab:string) => {
      setActiveTab(tab);
      onTabChange(tab)
  }
  return (
    <div>
      <div className="flex space-x-16 border-b-2 w-max mx-auto">
        <button
          className={`py-2 px-4 text-2xl font-cool 
            ${activeTab === 'all' ?
              'border-b-4 border-blue-500 text-blue-500' :
              'text-black'}`}
          onClick={() => handleTabChange('all')}
        >
          All
        </button>
        <button
          className={`py-2 px-4 text-2xl font-cool 
            ${activeTab === 'data' ? 
              'border-b-4 border-blue-500 text-blue-500' : 
              'text-black'}`}
          onClick={() => handleTabChange('data')}
        >
          Data
        </button>
        <button
          className={`py-2 px-4 text-2xl font-cool 
            ${activeTab === 'devops' ? 'border-b-4 border-blue-500 text-blue-500' : 'text-black'}`}
          onClick={() => handleTabChange('devops')}
        >
          Devops
        </button>
      </div>

      
    </div>
  );
};

export default Tabs;
