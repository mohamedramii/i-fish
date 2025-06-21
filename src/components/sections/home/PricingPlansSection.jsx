import React from 'react';
import PlanCard from './PlanCard';

const PricingPlansSection = () => {
  // Sample plans data - this can be passed as props or fetched from API
  const plans = [
    {
      title: "الباقة الأساسية",
      description: "الباقة الأساسية",
      ellipseColor: "#07B3D5",
      price: "199",
      currency: "ر.س",
      period: "شهريا",
      features: [
        "إدارة المخزون بكفاءة",
        "إدارة الطلبات ومتابعتها",
        "تقارير مبسطة للمبيعات",
        "الدعم الفني الأساسي"
      ],
      buttonText: "اختر الباقة",
      buttonVariant: "secondary",
      popular: false,
      marginTop: "mt-16" 
    },
    {
      title: "الباقة الاحترافية",
      description: "الباقة الاحترافية",
      ellipseColor: "#D2C62B",
      price: "299",
      currency: "ر.س",
      period: "شهريا",
      features: [
        "جميع ميزات الباقة الأساسية",
        "تقارير متقدمة للمبيعات والمخزون",
        "إدارة متعددة للفروع",
        "دعم فني على مدار الساعة",
        "تكامل مع منصات التجارة الإلكترونية"
      ],
      buttonText: "اختر الباقة",
      buttonVariant: "primary",
      popular: true,
      marginTop: "mt-0" 
    },
    {
      title: "باقة الشركات",
      description: "باقة الشركات",
      ellipseColor: "#E96CF4",
      price: "499",
      currency: "ر.س",
      period: "شهريا",
      features: [
        "جميع ميزات الباقة الاحترافية",
        "حلول مخصصة حسب احتياجات الشركة",
        "تكامل مع أنظمة المحاسبة والإدارة",
        "استضافة خاصة وأمان متقدم",
        "مدير حساب مخصص",
        "تدريب شامل للموظفين"
      ],
      buttonText: "اختر الباقة",
      buttonVariant: "secondary",
      popular: false,
      marginTop: "mt-16" 
    }
  ];

  return (
    <section className="w-full flex justify-center bg-transparent py-10 md:py-16 lg:pb-20">
      <div className="w-full max-w-screen-xl flex flex-col items-center px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 px-4">
          <h2 className="font-tajawal font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            باقات الأسعار المرنة
          </h2>
          <p className="font-tajawal text-white text-sm md:text-base max-w-md md:max-w-2xl">
            اختر الباقة المناسبة لاحتياجات عملك من بين خياراتنا المتنوعة.
            جميع الباقات تشمل الميزات الأساسية لإدارة المخزون والمبيعات بكفاءة.
          </p>
        </div>
       
        {/* Plans Cards Grid */}
        <div className="hidden md:flex items-center justify-center gap-6 px-4 w-full">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.marginTop}`}>
              <PlanCard
                title={plan.title}
                description={plan.description}
                ellipseColor={plan.ellipseColor}
                price={plan.price}
                currency={plan.currency}
                period={plan.period}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile Plans Cards Stack */}
        <div className="flex flex-col md:hidden items-center justify-center gap-8 w-full">
          {/* Show popular plan first on mobile */}
          {plans
            .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
            .map((plan, index) => (
              <div key={index} className="w-full max-w-[300px]">
                <PlanCard
                  title={plan.title}
                  description={plan.description}
                  ellipseColor={plan.ellipseColor}
                  price={plan.price}
                  currency={plan.currency}
                  period={plan.period}
                  features={plan.features}
                  buttonText={plan.buttonText}
                  buttonVariant={plan.buttonVariant}
                  popular={plan.popular}
                />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;