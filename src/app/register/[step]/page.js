'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { faFish, faShip, faAnchor, faArrowRight, faUser, faCheck, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalStepper from '@/components/ui/Stepper/VerticalStepper';
import Step1Component from '@/components/register/steps/Step1Component';
import Step2Component from '@/components/register/steps/Step2Component';
import Step3Component from '@/components/register/steps/Step3Component';
import Step4Component from '@/components/register/steps/Step4Component';

// Data for fleet types
const fleetTypes = [
  { id: 'fishing', title: 'سفن صيد', iconName: faFish, description: 'مناسب للمبتدئين' ,    subtitle:"أسطول صغير (1-5 قوارب)"
  },
  { id: 'cargo', title: 'سفن شحن', iconName: faShip, description: ' الأكثر شيوعاً' ,  subtitle:"أسطول متوسط (6-20 قارب)"},
  { id: 'passenger', title: 'سفن ركاب', iconName: faAnchor, description: 'متقدم', subtitle:"أسطول كبير (أكثر من 20 قارب)"},
];

// Data for features
const features = [
  { id: 'inventory', label: 'إدارة المخزون والمعدات', },
  { id: 'bills', label: 'مبيعات وفواتير الصيد',  },
  { id: 'expenses', label: 'تتبع مصاريف التشغيل والصيانة',  },
  { id: 'reports', label: 'تقارير أداء وربحية متقدمة',  },
  { id: 'crew', label: 'إدارة طاقم العمل والرواتب',  },
  { id: 'support', label: 'دعم تعدد المستخدمين والفروع',  },
  { id: 'integration', label: 'تكامل مع أنظمة أخرى (API)',  },
];

// Data for packages
const packages = [
  { 
    id: 'basic', 
    title: 'الباقة الأساسية', 
    iconName: faShip, 
    description:"سحابي كامل + نسخ احتياطي مستمر",
    note:" مرونة قصوى"
  },
  { 
    id: 'pro', 
    title: 'الباقة المتقدمة', 
    iconName: faShip, 
    description:"سحابي كامل + نسخ احتياطي مستمر",
    note:"مجاناً للتجربة"
    },
  { 
    id: 'enterprise', 
    title: 'الباقة الاحترافية', 
    iconName: faShip, 
    description:"بيانات سحابية + نسخ احتياطي يومي",
    note:" الأكثر شيوعاً"
  },
];

// Data for registration steps
const registrationSteps = [
  {
    id: 1,
    title: "الخطوة 1",
    description: "اختيار نوعية الحساب وإدخال البيانات",
  },
  {
    id: 2,
    title: "الخطوة 2",
    description: "البيانات الشخصية"
  },
  {
    id: 3,
    title: "الخطوة 3",
    description: "بيانات الأسطول"
  },
  {
    id: 4,
    title: "الخطوة 4",
    description: "تأكيد المعلومات"
  }
];

export default function RegisterStepPage({ params }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeStep, setActiveStep] = useState(0);
  const [animationState, setAnimationState] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Parse current step from URL
  const currentStep = parseInt(pathname.split('/').pop()) || 1;

  // Smooth scroll to top function
  const smoothScrollToTop = () => {
    const scrollDuration = 800; 
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  // Alternative smooth scroll using requestAnimationFrame for better performance
  const smoothScrollToTopRAF = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = 800; 

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      const currentPosition = startPosition * (1 - easeProgress);
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    // Convert step param to number (0-indexed internally, 1-indexed in URL)
    const stepNumber = parseInt(params.step);
    
    // Validate step number
    if (isNaN(stepNumber) || stepNumber < 1 || stepNumber > registrationSteps.length) {
      // Redirect to step 1 for invalid steps
      router.replace('/register/1');
      return;
    }
    
    // Set active step (0-indexed)
    setActiveStep(stepNumber - 1);
  }, [params.step, router]);

  // Handle next step
  const handleNext = () => {
    if (currentStep < 4) {
      setIsTransitioning(true);
      setAnimationState('slide-to-stepper');
      
      smoothScrollToTopRAF();
      
      // Wait for exit animation to complete before navigation
      setTimeout(() => {
        router.push(`/register/${currentStep + 1}`);
        setAnimationState('slide-from-stepper');
        
        // Reset animation state after enter animation
        setTimeout(() => {
          setAnimationState('');
          setIsTransitioning(false);
        }, 400);
      }, 400);
    } else {
      // Handle form submission on last step
      console.log('Registration completed!');
      // TODO: Redirect to success page or process form
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      setAnimationState('slide-to-stepper-reverse');
      
      smoothScrollToTopRAF();
      
      // Wait for exit animation to complete before navigation
      setTimeout(() => {
        router.push(`/register/${currentStep - 1}`);
        setAnimationState('slide-from-stepper-reverse');
        
        // Reset animation state after enter animation
        setTimeout(() => {
          setAnimationState('');
          setIsTransitioning(false);
        }, 400);
      }, 400);
    }
  };
  
  // Reset animation when route changes (for direct navigation)
  useEffect(() => {
    if (!isTransitioning) {
      setAnimationState('slide-from-stepper');
      
      // Remove animation class after animation completes
      const timer = setTimeout(() => {
        setAnimationState('');
      }, 400);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, isTransitioning]);
  
  // Handle direct step navigation
  const handleStepClick = (step) => {
    const targetStep = step + 1; // +1 for URL (1-indexed)
    if (targetStep !== currentStep) {
      setIsTransitioning(true);
      setAnimationState('slide-to-stepper');
      
      smoothScrollToTopRAF();
      
      setTimeout(() => {
        router.push(`/register/${targetStep}`);
        setAnimationState('slide-from-stepper');
        
        setTimeout(() => {
          setAnimationState('');
          setIsTransitioning(false);
        }, 400);
      }, 400);
    }
  };
  
  // Function to render content based on active step
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1Component features={features} fleetTypes={fleetTypes} packages={packages} />;
      case 1:
        return <Step2Component />;
      case 2:
        return <Step3Component />;
      case 3:
        return <Step4Component />;
      default:
        return null;
    }
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        @keyframes slideToStepper {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(300px);
            opacity: 0;
          }
        }
        
        @keyframes slideFromStepper {
          0% {
            transform: translateX(300px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideToStepperReverse {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(300px);
            opacity: 0;
          }
        }
        
        @keyframes slideFromStepperReverse {
          0% {
            transform: translateX(300px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .slide-to-stepper {
          animation: slideToStepper 0.4s ease-in-out forwards;
        }
        
        .slide-from-stepper {
          animation: slideFromStepper 0.4s ease-in-out forwards;
        }
        
        .slide-to-stepper-reverse {
          animation: slideToStepperReverse 0.4s ease-in-out forwards;
        }
        
        .slide-from-stepper-reverse {
          animation: slideFromStepperReverse 0.4s ease-in-out forwards;
        }
        
        .register-container {
          position: relative;
          overflow: hidden;
        }
        
        .main-content-column {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .main-content-column * {
          scroll-margin-top: 20px;
        }
        
        .stepper-column {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-button {
          transition: all 0.2s ease;
          transform: translateY(0);
          position: relative;
          overflow: hidden;
        }
        
        .nav-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(11, 170, 226, 0.3);
        }
        
        .nav-button:active {
          transform: translateY(0);
        }
        
        .nav-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(11, 170, 226, 0.2);
        }
        
        .smooth-scroll-container {
          scroll-behavior: smooth;
          transition: scroll-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .content-fade-in {
          animation: contentFadeIn 0.6s ease-out;
        }
        
        @keyframes contentFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .slide-to-stepper,
          .slide-to-stepper-reverse {
            animation-duration: 0.3s;
          }
          
          .slide-from-stepper,
          .slide-from-stepper-reverse {
            animation-duration: 0.3s;
          }
        }
        
        .main-content-column {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        
        * {
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          html {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
      <div className="bg-[#F3F8F8] min-h-screen smooth-scroll-container">
      {/* Main Content Container */}
      <div className="register-container max-w-[1300px] mx-auto py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-tajawal font-bold text-center text-[#032735] mb-10">
          التسجيل في نظام i-Fish
        </h1>

        {/* Main Layout: Two Columns */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
          {/* Main Content Column (Left) */}
          <div className={`main-content-column flex-grow bg-white rounded-[18px] shadow-lg p-10 overflow-hidden relative ${animationState}`}>
            <div className="content-fade-in">
              {renderStepContent()}
            </div>
            
            {/* Navigation buttons */}
            <div className="mt-10 flex justify-between">
              <button 
                onClick={handleNext}
                disabled={isTransitioning}
                className="nav-button bg-[#0BAAE2] text-white font-bold py-2.5 px-2.5 w-[127px] h-[40px] rounded-xl flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {activeStep === registrationSteps.length - 1 ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>إنهاء</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faArrowRight} rotation={180} />
                    <span>التالي</span>
                  </>
                )}
              </button>
              {activeStep > 0 && (
                <button 
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className="nav-button border border-[#0BAAE2] text-[#0BAAE2] font-bold py-2.5 px-2.5 w-[127px] h-[40px] rounded-xl flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>السابق</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              )}
            </div>
          </div>
          
          {/* Vertical Stepper Column (Right) */}
          <div className="stepper-column lg:w-[290px] rounded-[18px] shadow-lg p-6 text-white" 
               style={{
                 background: 'linear-gradient(115.65deg, #1D1F70 -0.23%, #1A7BB6 101.17%)'
               }}>         
            <h2 className="font-tajawal font-bold text-xl text-right text-white mb-6">خطوات التسجيل</h2>
             
            <div className="">
              <VerticalStepper
                steps={registrationSteps}
                activeStep={activeStep}
                onStepClick={handleStepClick}
                showDates={false}
                customStyle={{
                  activeColor: '#0BAAE2',
                  completedColor: '#0BAAE2',
                  inactiveColor: '#7A9097',
                  lineColor: '#7A9097'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}