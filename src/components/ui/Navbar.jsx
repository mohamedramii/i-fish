"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';


const Navbar = ({
  menuItems = [
    { name: 'اتصل بنا', href: '/contact' },
    { name: 'المميزات', href: '/features' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'سير العمل', href: '/workflow' },
    { name: 'الرئيسية', href: '/' },
  ],
  showAuth = true,
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`
        mt-4 flex flex-row justify-between items-center
        px-4 py-0 gap-[10px]
        w-full max-w-[1300px] h-[80px]
        bg-[rgba(34,119,181,0.18)] rounded-[15px]
        relative
        ${className}
      `}
    >
     {/* Desktop Auth Buttons */}
     {showAuth && (
        <div className="hidden md:flex flex-row items-center gap-[17px] flex-shrink-0">
          <Button
            text="انضم الان"
            variant="primary"
            className="w-[84px] h-[39px] bg-gradient-to-l from-[#07B3D5] to-[#2564EA]"
          />
          <span className="text-[16px] text-white font-[400] font-tajawal whitespace-nowrap cursor-pointer hover:text-gray-200 transition-colors">
            تسجيل الدخول
          </span>
        </div>
      )}

      {/* Desktop Menu Items */}
      <div className="hidden lg:flex flex-row items-start gap-[34px]">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-[16px] text-[#F5F9FD] font-[400] font-tajawal whitespace-nowrap hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

     

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(34,119,181,0.95)] rounded-[15px] backdrop-blur-sm z-50">
          <div className="flex flex-col items-center py-6 gap-6">
            {/* Mobile Menu Items */}
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[16px] text-[#F5F9FD] font-[400] font-tajawal hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            {showAuth && (
              <div className="flex flex-col items-center gap-4 mt-4 border-t border-white/20 pt-6">
                <Button
                  text="انضم الان"
                  variant="primary"
                  className="w-[84px] h-[39px] bg-gradient-to-l from-[#07B3D5] to-[#2564EA]"
                />
                <span 
                  className="text-[16px] text-white font-[400] font-tajawal cursor-pointer hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  تسجيل الدخول
                </span>
              </div>
            )}
          </div>
        </div>
      )}
        {/* Logo */}
        <div className="w-[187px] h-[40px] flex-shrink-0">
        <Image
          src="/logo/logo-navbar.svg"
          alt="Logo"
          width={187}
          height={40}
          priority
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;