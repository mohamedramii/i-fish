import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faFish, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: faShip,
      title: "إدارة أسطول قوارب الصيد",
      description: "تتبع أداء كل قارب والطاقم والمعدات وتكاليف التشغيل بشكل دقيق ومنظم",
      image: "/sections/home/Image Container03.png",
      imageAlt: "Dashboard Feature",
      glowColor: "bg-[#E2BE0B]",
      glowBlur: "blur-[200px]",
      glowPosition: "left-[-33px] top-[-30px]",
      checklist: [
        "متابعة صيانة القوارب",
        "جدولة طاقم العمل", 
        "تتبع مصاريف التشغيل"
      ],
      reverse: false
    },
    {
      id: 2,
      icon: faFish,
      title: "إدارة المخزون والصيد",
      description: "سجل وتتبع المخزون بدقة مع تفاصيل الأنواع والكميات والأسعار",
      image: "/sections/home/Image Container02.png",
      imageAlt: "Fishing Trip Feature",
      glowColor: "bg-[#DB0AD4]",
      glowBlur: "blur-[800px]",
      glowPosition: "right-[35px] top-[-30px]",
      checklist: [
        "تسجيل الصيد اليومي",
        "إدارة المخزون",
        "تتبع الصلاحية والجودة"
      ],
      reverse: true
    },
    {
      id: 3,
      icon: faShip,
      title: "إدارة الفواتير وأوراق التوصيل",
      description: "أنشئ فواتير وأوراق توصيل احترافية لعملائك مع تتبع المدفوعات",
      image: "/sections/home/Image Container01.png",
      imageAlt: "Dashboard Analytics",
      glowColor: "bg-[#0BE253]",
      glowBlur: "blur-[800px]",
      glowPosition: "left-[-33px] top-[-30px]",
      checklist: [
        "إنشاء أوراق توصيل",
        "توليد فواتير احترافية",
        "تتبع المدفوعات والتحصيل"
      ],
      reverse: false
    }
  ];

  const footerFeatures = [
    {
      title: "أمان البيانات",
      description: "تدير أسطول القوارب بكفاءة عالية مع متابعة دقيقة لكل قارب"
    },
    {
      title: "تطبيق جوال",
      description: "تسجيل وتتبع رحلات الصيد ومواقعها وكميات الصيد بكل دقة"
    },
    {
      title: "تقارير الأداء",
      description: "متابعة مالية دقيقة للإيرادات والمصاريف مع تقارير مفصلة"
    },
    {
      title: "إدارة العملاء",
      description: "تقارير إحصائية متنوعة تساعدك على اتخاذ قرارات أفضل"
    }
  ];

  const FeatureCard = ({ feature }) => (
    <div className="relative overflow-hidden rounded-2xl lg:rounded-[32px] bg-indigo-600/20 border border-white/30 backdrop-blur-sm p-6 lg:p-7">
      {/* Glow Effect */}
      <div className={`absolute w-72 h-72 ${feature.glowColor} ${feature.glowBlur} opacity-60 ${feature.glowPosition}`} />
      
      <div className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image */}
        <div className="relative z-10 w-full lg:w-1/2 max-w-md">
          <div className="rounded-2xl overflow-hidden">
            <Image 
              src={feature.image}
              alt={feature.imageAlt}
              width={500}
              height={314}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full lg:w-1/2 text-center lg:text-right">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-l from-cyan-500 to-blue-600 rounded-xl mb-4 lg:mb-6">
            <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 lg:w-8 lg:h-8 text-slate-50" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl lg:text-3xl font-bold text-slate-50 mb-3 lg:mb-4 font-tajawal">
            {feature.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm lg:text-base text-slate-50 mb-4 lg:mb-6 leading-relaxed font-tajawal">
            {feature.description}
          </p>
          
          {/* Checklist - Fixed Alignment */}
          <div className="inline-block text-right">
            <div className="space-y-2 lg:space-y-3">
              {feature.checklist.map((item, index) => (
                <div key={index} className="flex justify-end items-center gap-2">
                  <span className="text-xs lg:text-sm text-slate-50 font-tajawal">{item}</span>
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-500 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FooterCard = ({ feature }) => (
    <div className="bg-indigo-600/20 border border-white/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center lg:text-right">
      <div className="flex items-center justify-center lg:justify-end gap-3 lg:gap-4 mb-3 lg:mb-4">
        <h4 className="text-lg lg:text-2xl font-bold text-slate-50 font-tajawal">
          {feature.title}
        </h4>
        <div className="flex items-center justify-center w-8 h-8 lg:w-11 lg:h-11 bg-gradient-to-l from-cyan-500 to-blue-600 rounded-lg flex-shrink-0">
          <FontAwesomeIcon icon={faShip} className="w-4 h-4 lg:w-6 lg:h-6 text-slate-50" />
        </div>
      </div>
      <p className="text-xs lg:text-base text-slate-50 leading-relaxed font-tajawal">
        {feature.description}
      </p>
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-slate-50 mb-3 lg:mb-4 font-tajawal">
          مميزات فريدة لإدارة أعمال الصيد
        </h2>
        <p className="text-base lg:text-xl text-slate-50 max-w-3xl mx-auto font-tajawal">
          نظام متكامل يجمع بين إدارة العمليات والمخزون والمحاسبة لقوارب الصيد وتجارة الأسماك
        </p>
      </div>
      
      {/* Main Features */}
      <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        {footerFeatures.map((feature, index) => (
          <FooterCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;