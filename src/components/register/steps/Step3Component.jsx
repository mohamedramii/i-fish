'use client';

import React from 'react';
import { faBuilding, faFish, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '@/components/ui/Checkbox';

const Step3Component = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        {/* معلومات الشركة */}
        <div className="flex justify-end items-center gap-3 mb-4">
          <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">معلومات الشركة</h2>
          <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
        
        <div className="rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rtl">
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="companyName">
                اسم الشركة / المؤسسة *
              </label>
              <input 
                type="text" 
                id="companyName"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
                placeholder="محمد رامي"
              />
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="commercialRegister">
                رقم السجل التجاري / الضريبي
              </label>
              <input 
                type="text" 
                id="commercialRegister"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
                placeholder="example@gmail.com"
              />
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="foundingYear">
                سنة التأسيس
              </label>
              <select 
                id="foundingYear"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
              >
                <option>اختر السنة</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="employeesCount">
                عدد الموظفين
              </label>
              <select 
                id="employeesCount"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
              >
                <option>عدد الموظفين</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* معلومات النشاط البحري */}
        <div className="flex justify-end items-center gap-3 mb-4">
          <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">معلومات النشاط البحري</h2>
          <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
            <FontAwesomeIcon icon={faFish} />
          </div>
        </div>
        
        <div className="rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir='rtl'>
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="fishingType">
                نوع الصيد الرئيسي *
              </label>
              <select 
                id="fishingType"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
              >
                <option>اختر السنة</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="boatsCount">
                عدد القوارب / السفن *
              </label>
              <select 
                id="boatsCount"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
              >
                <option>عدد الموظفين</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="passwordConfirm">
                تأكيد كلمة المرور *
              </label>
              <input 
                type="password" 
                id="passwordConfirm"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none focus:border-[#0baae2]"
                placeholder="محمد رامي"
              />
            </div>
          </div>
        </div>
      </div>

      {/* الأنواع الرئيسية للأسماك المصطادة */}
      <div className="border border-[#7A9097]/30 rounded-2xl p-6 mt-4">
        <div className="text-right mb-5">
          <p className="font-tajawal text-lg font-bold text-[black]">الأنواع الرئيسية للأسماك المصطادة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">تونة / سمك الباغة</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">سردين</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">سبيرم / شعومي</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">ماكريل / خنفور</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">هامور</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">حبار / كاليماري</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">أنواع أخرى</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">روبيان / جمبري</span>
            <Checkbox checked={false} />
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-tajawal text-[#032735]">سرطان / كابوريا</span>
            <Checkbox checked={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Component;
