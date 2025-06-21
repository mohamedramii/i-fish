import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Mock footer data for navigation links
  const footerGroups = [
    {
      label: 'السياسيات والشروط',
      links: [
        { text: 'سياسة الخصوصية', href: '#' },
        { text: 'الشروط والأحكام', href: '#' },
        { text: 'سياسة الاسترجاع', href: '#' },
        { text: 'الأسئلة الشائعة', href: '#' },
        { text: 'الدعم الفني', href: '#' },
      ]
    },
    {
      label: 'مصادر',
      links: [
        { text: 'الرئيسية', href: '#' },
        { text: 'مركز التحميل', href: '#' },
        { text: 'الخدمات', href: '#' },
        { text: 'الأسعار', href: '#' },
        { text: 'المدونة', href: '#' },
      ]
    },
    {
      label: 'روابط سريعة',
      links: [
        { text: 'حولنا', href: '#' },
        { text: 'المميزات', href: '#' },
        { text: 'الشركاء', href: '#' },
        { text: 'الدعم', href: '#' },
        { text: 'اتصل بنا', href: '#' },
      ]
    },
  ];

  return (
    <footer className="relative w-full min-h-[368px] bg-[#074D31]">
      {/* Background image and overlay */}
      <div className="absolute w-full h-full left-0 top-0 z-0">
        <div className="absolute w-full h-full left-0 top-0">
          <Image 
            src="/footer/Background image.png" 
            alt="Footer background" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(27,93,159,0.64)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-end mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-6 sm:py-8 lg:py-10 w-full max-w-[1280px]">
        
        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-end items-start gap-6 lg:gap-8 w-full mb-6 lg:mb-8">
          
          {/* Logo and Description - Mobile First */}
          <div className="flex flex-col items-center sm:items-end gap-4 w-full lg:w-[332px] order-first lg:order-last">
            <div className="w-[150px] sm:w-[187px] h-[32px] sm:h-[40px] relative">
              <Image 
                src="/footer/logo-footer.svg" 
                alt="ifish logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="font-tajawal font-normal text-sm sm:text-base leading-relaxed text-center sm:text-right text-[#F5F9FD] w-full max-w-[300px] sm:max-w-none">
              نظام أي.فيش متكامل للصيد والمأكولات البحرية مستدام
              صممنا لتلبية احتياجات مجتمع الصيد الساحلية
              بالمملكة
            </p>
          </div>

          {/* Footer Groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full lg:flex-1">
            {footerGroups.map((group, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center sm:items-end gap-3 w-full"
              >
                {/* Group Label */}
                <div className="box-border flex flex-col items-center sm:items-end w-full pb-2 border-b border-white/30">
                  <h3 className="font-tajawal font-medium text-base sm:text-lg text-center sm:text-right text-white">
                    {group.label}
                  </h3>
                </div>
                
                {/* Link Group */}
                <div className="flex flex-row justify-center sm:justify-end items-start w-full">
                  <ul className="flex flex-col items-center sm:items-end gap-2 w-full">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex flex-row justify-center sm:justify-end items-center">
                        <Link 
                          href={link.href} 
                          className="font-tajawal font-normal text-sm leading-relaxed text-center sm:text-right text-white hover:text-gray-200 transition-colors duration-200"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Legal Footer */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center w-full pt-6 lg:pt-8 border-t border-white/20 gap-4">
          <div className="flex flex-col items-center sm:items-end gap-4 w-full">
            {/* Legal info */}
            <div className="flex flex-col items-center sm:items-end gap-3 w-full">
              <div className="w-full flex justify-center sm:justify-end">
                <p className="font-tajawal font-normal text-sm leading-relaxed text-center sm:text-right text-white">
                  جميع الحقوق محفوظة لشركة أي.فيش © 2024
                </p>
              </div>
              
              {/* Extra links */}
              <div className="flex flex-row flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
                <Link 
                  href="#" 
                  className="font-tajawal font-normal text-sm leading-relaxed text-center sm:text-right text-white hover:text-gray-200 transition-colors duration-200"
                >
                  الشروط والأحكام
                </Link>
                <span className="text-white/50 hidden sm:inline">|</span>
                <Link 
                  href="#" 
                  className="font-tajawal font-normal text-sm leading-relaxed text-center sm:text-right text-white hover:text-gray-200 transition-colors duration-200"
                >
                  سياسة الخصوصية
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;