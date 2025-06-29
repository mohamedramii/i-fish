"use client"
import React, { useState, useEffect, useRef } from 'react';
import Step from './Step';


const VerticalStepper = ({ 
  steps = [], 
  activeStep = 0, 
  onChange = () => {}, 
  allowNavigation = true,
  showDates = false,
  orientation = "vertical",
  customStyle = {},
  onStepComplete = null,
  renderStepContent = null,
  children 
}) => {
  // If activeStep is controlled externally, use that, otherwise maintain internal state
  const [currentStep, setCurrentStep] = useState(activeStep);
  const prevActiveStepRef = useRef(activeStep);
  
  // Use external activeStep if provided, otherwise use internal state
  const currentActiveStep = activeStep !== undefined ? activeStep : currentStep;

  // Track when steps complete (when active step changes)
  useEffect(() => {
    const prevActiveStep = prevActiveStepRef.current;
    // If step changed and callback exists
    if (prevActiveStep !== activeStep && onStepComplete && prevActiveStep < activeStep) {
      onStepComplete(prevActiveStep, steps[prevActiveStep]);
    }
    prevActiveStepRef.current = activeStep;
  }, [activeStep, steps, onStepComplete]);

  // Handle step click if navigation is allowed
  const handleStepClick = (index) => {
    if (!allowNavigation) return;
    
    if (onChange) {
      onChange(index);
    } else {
      setCurrentStep(index);
    }
  };

  // Base container styles - default to vertical
  const containerClasses = orientation === "horizontal" 
    ? "flex flex-row justify-start items-center p-0 w-full relative" 
    : "flex flex-col justify-center items-end p-0 w-[254px] relative";

  return (
    <div className={containerClasses} style={customStyle}>
      {steps.map((step, index) => {
        // Support for custom data in each step
        const stepProps = {
          title: step.title || `Step ${index + 1}`,
          description: step.description || "Step Description",
          number: index + 1,
          active: currentActiveStep === index,
          completed: index < currentActiveStep,
          isLast: index === steps.length - 1,
          showDate: showDates && !!step.dateInfo,
          dateInfo: step.dateInfo || ""
        };
          
        return (
          <div 
            key={index} 
            className={`${allowNavigation ? "cursor-pointer" : ""} ${index === currentActiveStep ? "active-step" : ""}`}
          >
            <Step
              {...stepProps}
              onClick={() => handleStepClick(index)}
              customStyle={step.customStyle}
            />
            
            {/* Render custom step content if provided */}
            {renderStepContent && currentActiveStep === index && renderStepContent(step, index)}
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default VerticalStepper;
