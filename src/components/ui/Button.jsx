import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
  text,
  icon,
  variant = 'primary',
  size = 'default',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...rest
}) => {
  // Determine button base style based on variant
  const getBaseStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[#07B3D5] to-[#2564EA] text-[#F5F9FD]';
      case 'secondary':
        return 'border border-[#07B3D5] bg-transparent text-[#F5F9FD]';
      case 'outlined':
        return 'border border-[#F5F9FD] bg-transparent text-[#F5F9FD]';
      default:
        return 'bg-gradient-to-r from-[#07B3D5] to-[#2564EA] text-[#F5F9FD]';
    }
  };

  // Determine button size style
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return 'h-8 px-4 text-sm';
      case 'large':
        return 'h-12 px-8 text-lg';
      default:
        return 'h-[39px] px-[10px] text-base';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-row items-center justify-center
        gap-[10px] rounded-[10px] 
        font-tajawal font-bold text-[16px] leading-[19px]
        ${getBaseStyle()}
        ${getSizeStyle()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...rest}
    >
      {text && <span className="flex-none order-0 flex-grow-0">{text}</span>}
      {icon && (
        <span className="flex-none order-1 flex-grow-0 w-[18px] h-[18px]">
          {icon}
        </span>
      )}
    </button>
  );
};

// PropTypes for documentation and type checking
Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
