"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const RegisterCard = ({
  title,
  subtitle,
  description,
  iconName,
  selected = false,
  onClick
}) => {
  return (
    <div
      className={`flex flex-row justify-end items-start p-[16px_18px] gap-3 relative w-[434px] h-[106px] rounded-2xl cursor-pointer ${
        selected 
          ? 'bg-[#F0F9FF] border border-[#3FBFF8]' 
          : 'border border-[rgba(122,144,151,0.3)]'
      }`}
      onClick={onClick}
    >
      {/* Check Icon (only visible when selected) */}
      {selected && (
        <div className="absolute top-4 left-4 text-[#0BAAE2]">
          <FontAwesomeIcon 
            icon={faCheckCircle} 
            size="xl" 
          />
        </div>
      )}

      {/* Information */}
      <div className="flex flex-col items-end p-0 gap-[6px] w-full">
        {/* Title */}
        <h3 className="w-full h-6 font-tajawal font-bold text-[20px] leading-6 text-right text-[#032735]">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="w-full h-[19px] font-tajawal font-normal text-[16px] leading-[19px] text-right text-[#7A9097]">
          {subtitle}
        </p>
        
        {/* Description */}
        <p className="w-full h-[19px] font-tajawal font-normal text-[16px] leading-[19px] text-right text-[#0369A1]">
          {description}
        </p>
      </div>
      
      {/* Icon Container */}
      <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-12 h-12 bg-[#F0F9FF] rounded-lg">
        <FontAwesomeIcon 
          icon={iconName} 
          className="text-[#0BAAE2] w-[25px] h-[25px]" 
        />
      </div>
    </div>
  );
};

export default RegisterCard;
