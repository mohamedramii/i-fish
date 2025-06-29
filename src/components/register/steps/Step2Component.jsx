'use client';

import React from 'react';
import { faUser, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step2Component = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>

      <div className="flex justify-end items-center gap-3 mb-4">
        <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">المعلومات الشخصية</h2>
        <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      
      <div className="rounded-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rtl">
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="fullName">
              الاسم الكامل
            </label>
            <input 
              type="text" 
              id="fullName"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل الاسم الكامل"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right " htmlFor="email">
              البريد الإلكتروني
            </label>
            <input 
              type="email" 
              id="email"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل البريد الإلكتروني"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="phone">
              رقم الهاتف
            </label>
            <input 
              type="tel" 
              id="phone"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل رقم الهاتف"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="company">
              اسم الشركة
            </label>
            <input 
              type="text" 
              id="company"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل اسم الشركة"
            />
          </div>
        </div>
      </div>

      
      </div>


      <div>

      <div className="flex justify-end items-center gap-3 mb-4">
        <h2 className="font-tajawal font-bold text-xl text-[#0BAAE2]">معلومات تسجيل الدخول</h2>
        <div className="text-[#0BAAE2] w-[25px] h-[25px] text-2xl">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      
      <div className="rounded-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " dir='rtl'>
       
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right" htmlFor="fullName">
            اسم المستخدم
            </label>
            <input 
              type="text" 
              id="fullName"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل الاسم الكامل"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right " htmlFor="email">
            كلمة المرور
            </label>
            <input 
              type="password" 
              id="email"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل كلمة المرور"
            />
          </div>
          

          <div className="mb-4">
            <label className="block font-tajawal font-bold text-sm mb-2 text-right " htmlFor="email">
              تأكيد كلمة المرور
            </label>
            <input 
              type="password" 
              id="email"
              className="w-full border border-[#7A9097]/30 rounded-lg p-2 text-right outline-none  focus:border-[#0baae2]"
              placeholder="أدخل تأكيد كلمة المرور"
            />
          </div>

        
        
        </div>
      </div>


      </div>
  {/* Info Container */}
<div className="flex flex-col justify-center items-end p-2.5 gap-2.5 w-full bg-blue-50 rounded-xl">
  {/* Info Content */}
  <div className="flex flex-row  gap-2 w-full ">
    {/* Info Text Container */}
    <div className="w-full flex flex-col items-end gap-3 flex-1">
      {/* Info Title with Icon - Same Line */}
      <div className="w-full flex flex-row items-center justify-end gap-2">
        <div className="font-tajawal text-lg text-right text-[#0BAAE2]">
        معلومة مهمة
        </div>
        <div className="w-4 h-4 text-[#0BAAE2] flex-shrink-0">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      </div>
      {/* Info Text */}
      <div className="font-tajawal text-base  text-[#0BAAE2] pr-6">
      سيتم إرسال رابط تفعيل إلى بريدك الإلكتروني للتحقق من حسابك. تأكد من تقديم بريد إلكتروني صحيح ومتاح.      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Step2Component;