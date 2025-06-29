'use client';

import React, { useState } from 'react';
import { faCog, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step4Component = () => {
  const [companyLogo, setCompanyLogo] = useState('yes');

  return (
    <div className='flex flex-col gap-5'>
      {/* إعدادات النظام */}
      <div>
        <div className="flex justify-end items-center gap-3 mb-4">
          <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">إعدادات النظام</h2>
          <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
        
        <div className="rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rtl">
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="defaultCurrency">
                العملة الافتراضية
              </label>
              <div className="relative">
                <select 
                  id="defaultCurrency"
                  className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right appearance-none outline-none focus:border-[#0baae2]"
                >
                  <option>ريال سعودي</option>
                  <option>دولار أمريكي</option>
                  <option>يورو</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#7A9097]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="dateFormat">
                تنسيق التاريخ
              </label>
              <div className="relative">
                <select 
                  id="dateFormat"
                  className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right appearance-none outline-none focus:border-[#0baae2]"
                >
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY/MM/DD</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#7A9097]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="timezone">
                المنطقة الزمنية
              </label>
              <div className="relative">
                <select 
                  id="timezone"
                  className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right appearance-none outline-none focus:border-[#0baae2]"
                >
                  <option>GMT+3</option>
                  <option>GMT+2</option>
                  <option>GMT+4</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#7A9097]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="language">
                اللغة الافتراضية
              </label>
              <div className="relative">
                <select 
                  id="language"
                  className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right appearance-none outline-none focus:border-[#0baae2]"
                >
                  <option>العربية</option>
                  <option>الإنجليزية</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#7A9097]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* إعدادات الوثائق والفواتير */}
      <div>
        <div className="flex justify-end items-center gap-3 mb-4">
          <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">إعدادات الوثائق والفواتير</h2>
          <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </div>
        </div>
        
        <div className="rounded-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rtl">
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="invoicePrefix">
                بادئة الفاتورة
              </label>
              <input 
                type="text" 
                id="invoicePrefix"
                placeholder="INV-"
                defaultValue="INV-"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-left outline-none focus:border-[#0baae2]"
                dir="ltr"
              />
            </div>
            
            <div className="mb-4">
              <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="deliveryNotePrefix">
                بادئة سند التسليم
              </label>
              <input 
                type="text" 
                id="deliveryNotePrefix"
                placeholder="DN-"
                defaultValue="DN-"
                className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-left outline-none focus:border-[#0baae2]"
                dir="ltr"
              />
            </div>
          </div>
          <div className="mb-4 w-full md:w-1/2 rtl">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right">
              شعار الشركة في الوثائق
            </label>
            <div className="flex flex-row justify-end gap-4">
              <div 
                className={`flex items-center justify-center px-6 py-2 rounded-lg border cursor-pointer ${companyLogo === 'no' ? 'border-[#0BAAE2] bg-[#0BAAE2]/5' : 'border-[#7A9097]/30'}`}
                onClick={() => setCompanyLogo('no')}
              >
                <span className="font-tajawal font-medium">لا</span>
              </div>
              <div 
                className={`flex items-center justify-center px-6 py-2 rounded-lg border cursor-pointer ${companyLogo === 'yes' ? 'border-[#0BAAE2] bg-[#0BAAE2]/5' : 'border-[#7A9097]/30'}`}
                onClick={() => setCompanyLogo('yes')}
              >
                <span className="font-tajawal font-medium">نعم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Component;