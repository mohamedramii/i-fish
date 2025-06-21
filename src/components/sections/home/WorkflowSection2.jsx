import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faRocket, faCog, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "تسجيل عمليات الصيد",
      iconTitle: "تسجيل الصيد",
      description: "يبدأ النظام بتسجيل عمليات الصيد اليومية لكل قارب, مع تحديد أنواع وكميات الأسماك المصطادة وتاريخ ووقت العملية.",
      note: " يتم تحديث المخزون تلقائياً",
      icon: faRocket
    },
    {
      number: 2,
      title: "التصميم إنشاء أوراق التوصيل",
      iconTitle: "أوراق التوصيل",
      description: "بعد تسجيل عمليات الصيد, يتم إنشاء أوراق التوصيل للعملاء بناءً على الطلبات وتوفر المخزون, مع تحديد أنواع وكميات الأسماك المطلوبة.",
      note: " يمكن طباعة أو مشاركة ورقة التوصيل",
      icon: faCog
    },
    {
      number: 3,
      title: "تأكيد استلام العميل",
      iconTitle: "تأكيد الاستلام",
      description: "بعد توصيل الأسماك للعميل, يتم تأكيد الكميات المستلمة فعلياً. يمكن للعميل قبول الكميات كاملة أو تعديلها حسب الاستلام الفعلي.",
      note: " يتم تحديث حالة ورقة التوصيل",
      icon: faCheckCircle
    },
    {
      number: 4,
      title: "إصدار الفاتورة",
      iconTitle: "الفاتورة النهائية",
      description: "بعد تأكيد الكميات المستلمة, يتم إنشاء فاتورة  بناءً على أوراق التوصيل المؤكدة. يتم احتساب المبالغ تلقائياً وفقاً  للأسعار المتفق عليها.",
      note: " يمكن تضمين أكثر من ورقة توصيل",
      icon: faShip
    }
  ];

  return (
    <div className="relative w-full min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>
      
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Tajawal']">
            خطوات العمل معنا
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-['Tajawal']">
            نتبع منهجية محددة وواضحة لضمان تحقيق أفضل النتائج
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile Layout - Vertical Timeline on Right */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Mobile Vertical Line on Right - positioned exactly on step numbers */}
              <div className="absolute right-2.5 top-3 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"></div>
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Step Number on Line */}
                    <div className="absolute right-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <span className="text-white font-bold text-xs">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon next to line */}
                    <div className="absolute right-8 top-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <FontAwesomeIcon 
                          icon={step.icon} 
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="mr-24 bg-indigo-500/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg">
                      <div className="space-y-3 text-right">
                        <h3 className="text-lg font-bold text-white font-['Tajawal']">
                          {step.title}
                        </h3>
                        <p className="text-blue-100 text-sm leading-relaxed font-['Tajawal']">
                          {step.description}
                        </p>
                        <div className="flex items-center justify-end gap-2 text-blue-200 text-xs">
                          <span className="font-['Tajawal']">{step.note}</span>
                          <FontAwesomeIcon icon={faInfoCircle} className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Horizontal Timeline */}
          <div className="hidden md:block">
            {/* Central Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 opacity-60 z-0"></div>
            
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <StepItem 
                  key={step.number}
                  step={step}
                  isReversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ step, isReversed }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className={`flex items-center ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex items-center gap-6 md:gap-8 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
          
          {/* Step Details Card */}
          <div className="relative max-w-lg">
            <div className="relative bg-indigo-500/20 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-lg shadow-blue-500/20 overflow-hidden">
              {/* Background Glow Effect */}
              <div className={`absolute ${isReversed ? '-right-8' : '-left-8'} -top-8 w-72 h-72 bg-green-400/30 rounded-full blur-3xl opacity-80 -z-10`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-right font-['Tajawal']">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 text-right leading-relaxed font-['Tajawal']">
                    {step.description}
                  </p>
                </div>
                
                {/* Note with Info Icon */}
                <div className="flex items-center justify-end gap-2 text-blue-200 text-sm">
                  <span className="text-right font-['Tajawal']">{step.note}</span>
                  <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Step Number Badge */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/40">
              <span className="text-white font-bold text-4xl">
                {step.number}
              </span>
            </div>
          </div>

          {/* Icon Card */}
          <div className="flex-shrink-0">
            <div className="bg-indigo-500/20 backdrop-blur-sm border border-white/30 rounded-2xl p-5 w-48 h-48 flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FontAwesomeIcon 
                  icon={step.icon} 
                  className="w-12 h-12 text-white"
                />
              </div>
              <h4 className="text-lg font-bold text-white text-center font-['Tajawal']">
                {step.iconTitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;