
import React from 'react';
import Button from '../../components/ui/Button';

const DownloadCard = ({ browser, version, img, className = "" }) => {
  return (
    <div className={`flex flex-col items-center p-6 pt-12 pb-6 bg-white rounded-xl shadow-lg h-fit ${className}`}>
      <img src={img} alt={browser} className="mb-8" />
      <h3 className="text-xl font-medium text-brand-dark mb-2">Add to {browser}</h3>
      <p className="text-brand-gray text-sm mb-8">Minimum version {version}</p>
      
      {/* Decorative Dots */}
      <img src="/images/bg-dots.svg" alt="" className="w-full mb-6" />
      
      <Button variant="primary" className="w-full" children="Add & Install Extension" />
        
    </div>
  );
};

export default DownloadCard;