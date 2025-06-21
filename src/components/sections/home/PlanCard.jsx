import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCrown } from '@fortawesome/free-solid-svg-icons';

const PlanCard = ({
  title,
  description,
  ellipseColor,
  price,
  currency,
  period,
  features,
  buttonText,
  buttonVariant = 'primary',
  popular = false,
}) => {
  return (
    <div className="relative w-full md:w-[301px] h-auto md:h-[409px] box-border flex flex-col justify-between items-center py-6 md:py-[22px] px-4 md:px-[18px] gap-4 md:gap-[18px] bg-transparent border border-[#0BAAE2] rounded-[16px] shadow-[0px_0px_101.7px_rgba(210,202,88,0.25)] overflow-hidden">
      
      {/* Popular Badge - Only show for popular plans */}
      {/* {popular && (
        <div className="absolute top-[-10px] right-[20px] z-[10] flex items-center justify-center bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1A1A1A] font-tajawal font-bold text-[12px] px-3 py-1 rounded-full shadow-lg">
          <FontAwesomeIcon icon={faCrown} className="w-3 h-3 mr-1" />
          الأكثر شعبية
        </div>
      )} */}
      
      {/* Ellipse Background */}
      <div
        className="absolute w-[233px] h-[233px] top-[-180px] left-[31px]"
        style={{
          background: `radial-gradient(205.15% 205.15% at 50% 50%, ${ellipseColor} 0%, ${adjustColor(ellipseColor, -50)} 100%)`,
          filter: 'blur(106.2px)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* Plan Info */}
      <div className="flex flex-col justify-center items-end w-full md:w-[265px] h-auto md:h-[112px] gap-[20px] z-[2]">
        {/* Plan Header */}
        <div className="flex flex-col items-center w-full md:w-[265px] h-auto md:h-[62px] gap-[8px] self-stretch">
          {/* Plan Title */}
          <h3 className="font-tajawal font-bold text-[20px] leading-[160%] text-[#F5F9FD] text-center w-auto md:w-[145px] h-auto md:h-[32px]">
            {title}
          </h3>
          {/* Plan Description */}
          <p className="font-tajawal font-normal text-[14px] leading-[160%] text-[#F5F9FD] text-center w-auto max-w-[219px] md:w-[219px] h-auto md:h-[22px]">
            {description}
          </p>
        </div>
        
        {/* Plan Price Container */}
        <div className="flex flex-row items-end gap-[8px] w-[145px] h-[30px]">
          {/* Currency and Period */}
          <span className="font-tajawal font-normal text-[12px] leading-[160%] text-[#F5F9FD] w-[65px] h-[19px] order-0">
            {currency} {period}
          </span>
          {/* Price */}
          <span 
            className="font-['Geist'] font-bold text-[36px] leading-[0%] flex items-center text-center w-[72px] h-[30px] order-1"
            style={{
              background: 'linear-gradient(120.41deg, #69F0FF 4.52%, #EDE38B 125.96%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {price}
          </span>
        </div>
      </div>
      
      {/* Features List */}
      <div className="flex flex-col justify-end items-end gap-[10px] w-full z-[3]">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-row justify-end items-center gap-[3px] ${getFeatureWidth(feature)}`}>
            {/* Feature Text */}
            <span className="font-tajawal font-normal text-[14px] leading-[0%] flex items-center text-center text-[#F5F9FD]">
              {feature}
            </span>
            {/* Check Icon */}
            <div className="w-[16px] h-[16px] relative">
              <FontAwesomeIcon 
                icon={faCheck} 
                className="absolute left-[12.5%] right-[9.37%] top-[25%] bottom-[18.75%] text-[#2FC558]" 
              />
            </div>
          </div>
        ))}
        </div>
        
      {/* Plan Action Button */}
      <Button
        text={buttonText}
        variant={buttonVariant}
        className="w-[165px] h-[45px] z-[4]"
      />
    </div>
  );
};

function adjustColor(color, amount) {
  return color;
}

function getFeatureWidth(feature) {
  const length = feature.length;
  if (length < 10) return 'w-[93px]';
  else if (length < 15) return 'w-[136px]';
  else if (length < 20) return 'w-[170px]';
  else if (length < 25) return 'w-[206px]';
  else return 'w-[265px]';
}

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,  
  ellipseColor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  period: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string,
  popular: PropTypes.bool
};

export default PlanCard;