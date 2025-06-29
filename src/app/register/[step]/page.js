'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { faFish, faShip, faAnchor, faArrowRight, faUser, faCheck, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalStepper from '@/components/ui/Stepper/VerticalStepper';
import Step1Component from '@/components/register/steps/Step1Component';
import Step2Component from '@/components/register/steps/Step2Component';
import Step3Component from '@/components/register/steps/Step3Component';
import Step4Component from '@/components/register/steps/Step4Component';

// Constants
const MAX_STEPS = 4;
const ANIMATION_DURATION = 1.5; 

// Static data
const FLEET_TYPES = [
  { id: 'fishing', title: 'سفن صيد', iconName: faFish, description: 'مناسب للمبتدئين', subtitle: "أسطول صغير (1-5 قوارب)" },
  { id: 'cargo', title: 'سفن شحن', iconName: faShip, description: ' الأكثر شيوعاً', subtitle: "أسطول متوسط (6-20 قارب)" },
  { id: 'passenger', title: 'سفن ركاب', iconName: faAnchor, description: 'متقدم', subtitle: "أسطول كبير (أكثر من 20 قارب)" },
];

const FEATURES = [
  { id: 'inventory', label: 'إدارة المخزون والمعدات' },
  { id: 'bills', label: 'مبيعات وفواتير الصيد' },
  { id: 'expenses', label: 'تتبع مصاريف التشغيل والصيانة' },
  { id: 'reports', label: 'تقارير أداء وربحية متقدمة' },
  { id: 'crew', label: 'إدارة طاقم العمل والرواتب' },
  { id: 'support', label: 'دعم تعدد المستخدمين والفروع' },
  { id: 'integration', label: 'تكامل مع أنظمة أخرى (API)' },
];

const PACKAGES = [
  { 
    id: 'basic', 
    title: 'الباقة الأساسية', 
    iconName: faShip, 
    description: "سحابي كامل + نسخ احتياطي مستمر",
    note: " مرونة قصوى"
  },
  { 
    id: 'pro', 
    title: 'الباقة المتقدمة', 
    iconName: faShip, 
    description: "سحابي كامل + نسخ احتياطي مستمر",
    note: "مجاناً للتجربة"
  },
  { 
    id: 'enterprise', 
    title: 'الباقة الاحترافية', 
    iconName: faShip, 
    description: "بيانات سحابية + نسخ احتياطي يومي",
    note: " الأكثر شيوعاً"
  },
];

const REGISTRATION_STEPS = [
  { id: 1, title: "الخطوة 1", description: "اختيار نوعية الحساب وإدخال البيانات" },
  { id: 2, title: "الخطوة 2", description: "البيانات الشخصية" },
  { id: 3, title: "الخطوة 3", description: "بيانات الأسطول" },
  { id: 4, title: "الخطوة 4", description: "تأكيد المعلومات" }
];

const slideVariants = {
  initial: {
    x: 0,
    opacity: 1
  },
  slideOut: (direction) => ({
    x: direction > 0 ? '280px' : '-280px',
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: ANIMATION_DURATION / 2
    }
  }),
  slideIn: (direction) => ({
    x: direction > 0 ? '-280px' : '280px', 
    opacity: 0
  }),
  slideToPosition: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: ANIMATION_DURATION / 2
    }
  }
};

// Button hover animations
const buttonVariants = {
  hover: {
    y: -2,
    boxShadow: "0 4px 12px rgba(11, 170, 226, 0.3)",
    transition: { duration: 0.2 }
  },
  tap: {
    y: 0,
    transition: { duration: 0.1 }
  }
};

export default function RegisterStepPage({ params }) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Single source of truth for current step
  const currentStep = useMemo(() => {
    const stepFromUrl = parseInt(pathname.split('/').pop()) || 1;
    return Math.min(Math.max(stepFromUrl, 1), MAX_STEPS);
  }, [pathname]);

  // State management
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('initial');

  // Smooth scroll function
  const smoothScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Navigation handler
  const navigateToStep = useCallback((targetStep, navDirection = 1) => {
    if (isTransitioning || targetStep === currentStep) return;
    
    // Validate target step
    if (targetStep < 1 || targetStep > MAX_STEPS) return;

    setIsTransitioning(true);
    setDirection(navDirection);
    
    // Smooth scroll to top
    smoothScrollToTop();

    setAnimationPhase('slideOut');
    
    setTimeout(() => {
      router.push(`/register/${targetStep}`);
      setAnimationPhase('slideIn');
      setTimeout(() => {
        setAnimationPhase('slideToPosition');
      }, 10);
    }, (ANIMATION_DURATION / 2) * 1000);
    
    setTimeout(() => {
      setAnimationPhase('initial');
      setIsTransitioning(false);
    }, ANIMATION_DURATION * 1000);
    
  }, [currentStep, isTransitioning, router, smoothScrollToTop]);

  // Navigation functions
  const handleNext = useCallback(() => {
    if (currentStep < MAX_STEPS) {
      navigateToStep(currentStep + 1, 1);
    } else {
      // Handle form submission
      console.log('Registration completed!');
      // TODO: Process form and redirect to success page
    }
  }, [currentStep, navigateToStep]);

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      navigateToStep(currentStep - 1, -1);
    }
  }, [currentStep, navigateToStep]);

  const handleStepClick = useCallback((stepIndex) => {
    const targetStep = stepIndex + 1;
    const navDirection = targetStep > currentStep ? 1 : -1;
    navigateToStep(targetStep, navDirection);
  }, [currentStep, navigateToStep]);

  // Handle URL validation
  useEffect(() => {
    const stepFromParams = parseInt(params.step);
    if (isNaN(stepFromParams) || stepFromParams < 1 || stepFromParams > MAX_STEPS) {
      router.replace('/register/1');
      return;
    }
  }, [params.step, router]);

  // Step content renderer
  const renderStepContent = useCallback((step) => {
    switch (step) {
      case 1:
        return <Step1Component features={FEATURES} fleetTypes={FLEET_TYPES} packages={PACKAGES} />;
      case 2:
        return <Step2Component />;
      case 3:
        return <Step3Component />;
      case 4:
        return <Step4Component />;
      default:
        return null;
    }
  }, []);

  const getAnimationVariant = useCallback(() => {
    switch (animationPhase) {
      case 'slideOut':
        return slideVariants.slideOut(direction);
      case 'slideIn':
        return slideVariants.slideIn(direction);
      case 'slideToPosition':
        return slideVariants.slideToPosition;
      default:
        return slideVariants.initial;
    }
  }, [animationPhase, direction]);

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .main-content-column {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        
        .vertical-stepper-container {
          position: relative;
          z-index: 10;
        }
      `}</style>
      
      <div className="bg-[#F3F8F8] min-h-screen">
        <div className="max-w-[1300px] mx-auto py-8">
          {/* Page Title */}
          <motion.h1 
            className="text-4xl font-tajawal font-bold text-center text-[#032735] mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            التسجيل في نظام i-Fish
          </motion.h1>

          {/* Main Layout */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
            {/* Main Content Column */}
            <motion.div 
              className="main-content-column flex-grow bg-white rounded-[18px] shadow-lg p-10 relative overflow-hidden"
              animate={getAnimationVariant()}
            >
              <div className="min-h-[400px]">
                {renderStepContent(currentStep)}
              </div>
              
              {/* Navigation Buttons */}
              <motion.div 
                className="mt-10 flex justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTransitioning ? 0.5 : 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <motion.button 
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="bg-[#0BAAE2] text-white font-bold py-2.5 px-2.5 w-[127px] h-[40px] rounded-xl flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  variants={buttonVariants}
                  whileHover={!isTransitioning ? "hover" : {}}
                  whileTap={!isTransitioning ? "tap" : {}}
                >
                  {currentStep === MAX_STEPS ? (
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
                </motion.button>
                
                {currentStep > 1 && (
                  <motion.button 
                    onClick={handlePrev}
                    disabled={isTransitioning}
                    className="border border-[#0BAAE2] text-[#0BAAE2] font-bold py-2.5 px-2.5 w-[127px] h-[40px] rounded-xl flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    variants={buttonVariants}
                    whileHover={!isTransitioning ? "hover" : {}}
                    whileTap={!isTransitioning ? "tap" : {}}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <span>السابق</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
            
            {/* Vertical Stepper Column - FIXED */}
            <div 
              className="vertical-stepper-container lg:w-[290px] rounded-[18px] shadow-lg p-6 text-white" 
              style={{
                background: 'linear-gradient(115.65deg, #1D1F70 -0.23%, #1A7BB6 101.17%)'
              }}
            >         
              <h2 className="font-tajawal font-bold text-xl text-right text-white mb-6">
                خطوات التسجيل
              </h2>
               
              <VerticalStepper
                steps={REGISTRATION_STEPS}
                activeStep={currentStep - 1}
                onStepClick={handleStepClick}
                showDates={false}
                customStyle={{
                  activeColor: '#0BAAE2',
                  completedColor: '#0BAAE2',
                  inactiveColor: '#7A9097',
                  lineColor: '#7A9097'
                }}
                disabled={isTransitioning}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}