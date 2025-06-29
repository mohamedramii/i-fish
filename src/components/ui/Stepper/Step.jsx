import React from 'react';

const Step = ({
  title,
  description,
  number,
  active = false,
  completed = false,
  isLast = false,
  showDate = false,
  dateInfo = '',
  onClick,
  customStyle = {},
  children
}) => {
  const getStepStyle = () => {
    if (active) {
      return {
        background: "#F3F8F8",
        border: "1px solid #0BAAE2",
        color: "#0EA5E9"
      };
    } else if (completed) {
      return {
        background: "#0EA5E9",
        border: "1px solid #0EA5E9",
        color: "#F3F8F8"
      };
    } else {
      return {
        background: "#7A9097",
        border: "none",
        color: "#032735"
      };
    }
  };

  const getDescriptionColor = () => {
    if (active) {
      return "#F3F8F8";
    } else {
      return "#F3F8F8";
    }
  };

  const stepStyle = getStepStyle();

  return (
    <div
      className="relative flex flex-row justify-end items-center w-full max-w-[254px] mb-[16px] rtl px-2 sm:px-0"
      onClick={onClick}
      style={customStyle}
    >
      {/* Date and Time (optional) */}
      {showDate && (
        <div className="flex flex-row items-start px-[12px] pt-[8px] w-full max-w-[161px] h-[27px]">
          <span className="font-tajawal font-normal text-[12px] sm:text-[14px] text-[#93C5FD]">
            {dateInfo}
          </span>
        </div>
      )}
     
      {/* Step Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center  lg:items-start gap-[12px] sm:gap-[16px] w-full max-w-[254px]">
        {/* Step Info */}
        <div className="flex flex-col items-end justify-center flex-1 max-w-[190px] gap-[2px] z-10">
          {/* Step Title */}
          <div className="flex flex-row justify-end items-center w-full h-[19px]">
            <h4 className="font-tajawal font-bold text-[14px] sm:text-[16px] leading-[19px] text-right text-[#93C5FD] truncate">
              {title}
            </h4>
          </div>
         
          {/* Step Description */}
          <div className="flex flex-row items-start w-full">
            <p
              className="font-tajawal text-[#F3F8F8] font-normal text-[12px] sm:text-[16px] leading-[16px] sm:leading-[19px] text-right w-full"
              style={{ color: getDescriptionColor() }}
            >
              {description}
            </p>
          </div>
        </div>
       
        {/* Step Number Container */}
        <div className="relative flex items-center justify-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] z-10 flex-shrink-0">
          {/* Circle with Number */}
          <div
            className="flex justify-center items-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[90px] box-border"
            style={{
              background: stepStyle.background,
              border: stepStyle.border,
            }}
          >
            <span
              className="font-tajawal font-normal text-[14px] sm:text-[16px] leading-[19px] text-center"
              style={{ color: stepStyle.color }}
            >
              {number}
            </span>
          </div>
        </div>
      </div>
     
      {/* Connector Line - Now positioned absolutely */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-[40px] sm:top-[48px] right-[20px] sm:right-[24px] w-[2px] h-[calc(100%+16px)]"
          style={{
            backgroundColor: active || completed ? "#738DED" : "#D4D4D4",
            zIndex: 1
          }}
        />
      )}
     
      {children}
    </div>
  );
};

export default Step;