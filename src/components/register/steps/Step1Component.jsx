'use client';

import React from 'react';
import RegisterCardWrapper from '@/components/register/RegisterCardWrapper';
import PackageCardWrapper from '@/components/register/PackageCardWrapper';
import { faFish, faShip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '@/components/ui/Checkbox';

const Step1Component = ({ features, fleetTypes, packages }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        
        <div className="flex-1">
          <div className="flex justify-end items-center gap-3 mb-6">
            <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">الاحتياجات الرئيسية</h2>
            <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
              <FontAwesomeIcon icon={faFish} />
            </div>
          </div>

          {/* Features Box Container */}
          <div className="border border-[#7A9097]/30 rounded-2xl p-4 ">
            <div className="text-right mb-4">
              <p className="font-tajawal text-sm font-bold text-[black]">:اختر الميزات التي تحتاجها في نظامك المحاسبي</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {features.map((feature) => (
                <div key={feature.id} className="flex justify-end items-start gap-2 ">
                  <span className="font-tajawal text-[#032735]">{feature.label}</span>
                  <Checkbox checked={feature.id === 'management' || feature.id === 'staff'} />
                </div>
              ))}
            </div>
          </div>
        </div>
           
        <div className="flex-1">
          <div className="flex justify-end items-center gap-3 mb-6">
            <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">نوع النشاط البحري</h2>
            <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
              <FontAwesomeIcon icon={faShip} />
            </div>
          </div>
          
          <RegisterCardWrapper fleetTypes={fleetTypes} />
        </div>
      </div>

      {/* Cloud Packages - Step 1 */}
      <div>
        <div className="flex justify-end items-center gap-3 mb-6">
          <h2 className="font-tajawal font-bold text-xl text-[#032735]">خيارات التخزين السحابي</h2>
          <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
            <FontAwesomeIcon icon={faShip} />
          </div>
        </div>

        <PackageCardWrapper packages={packages} />
      </div>
    </div>
  );
};

export default Step1Component;
