import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/ui/Button';


const HeroSection = () => {
  // Stats data
  const stats = [
    { value: '+500', label: 'قارب صيد' },
    { value: '+1200', label: 'عميل نشط' },
    { value: '+5000', label: 'فاتورة شهريا' },
    { value: '%98', label: 'نسبة الرضا' },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/sections/home/bg-image.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-[-50%] w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1300px] mx-auto px-4 pt-32 pb-16 md:pb-0 md:py-8">
          
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Images Side - Fixed Width */}
            <div className="w-full lg:w-[45%] scale-75 md:scale-75 lg:scale-100 lg:max-w-[596px] order-1 lg:order-2">
              <div className="relative w-full">
                
                {/* Main Image Container */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/sections/home/Home 1.png"
                    alt="Dashboard"
                    fill
                    className="object-contain scale-135"
                  />
                </div>
                
                {/* Floating Images */}
                <div className="absolute w-16 h-14 lg:w-28 lg:h-24 right-[5%] top-[8%]">
                  <Image
                    src="/sections/home/smal-image04.png"
                    alt="Feature 4"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                
                <div className="absolute w-16 h-8 lg:w-26 lg:h-12 left-[30%] lg:left-[35%] top-[8%]">
                  <Image
                    src="/sections/home/smal-image01.png"
                    alt="Feature 1"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                
                <div className="absolute w-16 h-10 lg:w-30 lg:h-16 right-[-10px] lg:right-[-20px] top-[40%]">
                  <Image
                    src="/sections/home/smal-image02.png"
                    alt="Feature 2"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                
                <div className="absolute w-20 h-12 lg:w-32 lg:h-16 left-[10%] lg:left-[15%] bottom-[20%] lg:bottom-[28.5%]">
                  <Image
                    src="/sections/home/smal-image03.png"
                    alt="Feature 3"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Side - Flexible Width */}
            <div className="w-full md:max-w-[55%]  order-1 lg:order-2">
              <div className="flex flex-col items-end text-right gap-6">
                
                {/* Title */}
                <h1 className="font-tajawal font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#F5F9FD]">
                  نظام إدارة متكامل <span className='text-[#93C5FD]'>لقوارب الصيد</span> والمحاسبة البحرية
                </h1>
                
                {/* Subtitle */}
                <p className="max-w-lg font-tajawal font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#F5F9FD]">
                  ادر عمليات الصيد تتبع المخزون واصل للفواتير بكل سهولة من خلال نظام متكامل مصمم خصيصا لصناعة الأسماك
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button 
                    text="طلب عرض توضيحي" 
                    icon={<FontAwesomeIcon icon={faInfoCircle} />}
                    variant="secondary"
                    className="w-full sm:w-auto flex justify-center items-center px-6 py-3 gap-3 border border-[#F5F9FD] rounded-lg"
                  />
                  
                  <Button 
                    text="مشاهدة العرض" 
                    icon={<FontAwesomeIcon icon={faPlayCircle} />}
                    variant="primary"
                    className="w-full sm:w-auto flex justify-center items-center px-6 py-3 gap-3 bg-gradient-to-r from-[#07B3D5] to-[#2564EA] rounded-lg"
                  />
                </div>
                
                {/* Stats */}
                <div className="flex justify-end gap-4 mt-8 flex-wrap">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-4 gap-1 bg-[rgba(99,102,241,0.2)] border border-[#F5F9FD] backdrop-blur-sm rounded-lg min-h-[80px] w-full md:w-[151px]"
                    >
                      <h3 className="font-tajawal font-bold text-lg lg:text-xl text-center text-white">
                        {stat.value}
                      </h3>
                      <p className="font-tajawal font-normal text-sm lg:text-base text-center text-white">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;