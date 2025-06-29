"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const PackageCard = ({
  title,
  description,
  note,
  iconName,
  selected = false,
  onClick
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-[16px_18px] gap-3 relative w-[285.33px] h-[157px] rounded-2xl cursor-pointer ${
        selected 
          ? 'bg-[#F0F9FF] border border-[#3FBFF8]' 
          : 'border border-[rgba(122,144,151,0.3)]'
      }`}
      onClick={onClick}
    >
      {/* Check Icon (only visible when selected) */}
      {selected && (
        <div className="absolute top-4 left-4 text-[#0BAAE2] z-10">
          <FontAwesomeIcon 
            icon={faCheckCircle} 
            size="xl" 
          />
        </div>
      )}

      {/* Icon Container */}
      <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-12 h-12 bg-[#F0F9FF] rounded-lg">
        <FontAwesomeIcon 
          icon={iconName} 
          className="text-[#0BAAE2] w-[25px] h-[25px]" 
        />
      </div>
      
      {/* Information */}
      <div className="flex flex-col items-center p-0 gap-[6px] w-[220px]">
        {/* Title */}
        <h3 className="w-full text-center font-tajawal font-bold text-[16px] leading-[19px] text-[#032735]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="w-full text-center font-tajawal font-normal text-[14px] leading-[17px] text-[#7A9097]">
          {description}
        </p>
        
        {/* Note */}
        <p className="w-full text-center font-tajawal font-bold text-[14px] leading-[17px] text-[#0369A1]">
          {note}
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
