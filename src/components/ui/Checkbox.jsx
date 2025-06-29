import React from 'react';

function CheckboxUI({ checked, className = '', label }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        className={`relative ${checked 
          ? 'flex justify-center items-center w-5 h-5 bg-[#0BAAE2] rounded-[4px]' 
          : 'flex p-[3px] w-5 h-5 border-2 border-[#7A9097] rounded-[4px]'
        }`}
      >
        {checked && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5.7L4.35714 8.5L10.5 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        )}
      </div>
      {label && (
        <span className="text-[#032735]">{label}</span>
      )}
    </div>
  );
}

function CheckboxInteractive({ checked = false, onChange, label, className = '' }) {
  'use client';
  
  const handleClick = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <CheckboxUI checked={checked} className={className} label={label} />
    </div>
  );
}

export default function Checkbox(props) {
  if (props.onChange) {
    return <CheckboxInteractive {...props} />;
  }
  
  return <CheckboxUI {...props} />;
}
