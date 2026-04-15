// src/components/ui/TabPanel.jsx
import React from 'react';
import Button from '../../components/ui/Button';

const TabPanel = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 animate-fadeIn">
      <div className="flex-1 w-full">
        <img 
          src={feature.img} 
          alt={feature.tab} 
          className="mx-auto" 
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-medium text-brand-dark mb-6">
          {feature.title}
        </h3>
        <p className="text-brand-gray mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
          {feature.desc}
        </p>
        <Button variant="primary" className="px-8" children="More Info" />
      </div>
    </div>
  );
};

export default TabPanel;