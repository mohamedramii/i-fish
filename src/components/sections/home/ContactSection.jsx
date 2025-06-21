import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faClock, 
  faCaretDown,
  faPaperPlane,
  faSquare
} from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/ui/Button'; 

const ContactSection = () => {
  return (
    <section className="w-full pb-20 ">
      <div className="container mx-auto max-w-[1299px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10">
          <h2 className="font-tajawal font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight text-center text-[#F5F9FD] tracking-[-0.02em]">
            تواصل معنا
          </h2>
          <p className="font-tajawal font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed text-center text-[#F5F9FD] tracking-[-0.02em] max-w-[810px] px-4">
            هل لديك أي استفسارات أو ترغب في معرفة المزيد عن نظام دار الحوت؟ نحن هنا للإجابة على جميع أسئلتك
          </p>
        </div>
        
        {/* Contact Container - Two Columns */}
        <div className="flex flex-col xl:flex-row items-start justify-between gap-6 lg:gap-8 w-full">
          {/* Contact Info Card */}
          <div className="w-full xl:w-[640px] rounded-[16px] filter drop-shadow-[0_0_17.4px_#1D6DB6] p-4 sm:p-6 lg:p-6 border border-[#0BAAE2] bg-opacity-20 order-2 xl:order-1">
            <h3 className="font-tajawal font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-right text-[#F5F9FD] tracking-[-0.02em] w-full mb-6">
              معلومات التواصل
            </h3>
            
            {/* Contact Items Container */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex flex-row justify-end items-start gap-3 sm:gap-4 lg:gap-[15px] w-full">
                <div className="flex flex-col items-end gap-2 flex-1">
                  <h4 className="font-tajawal font-bold text-lg sm:text-xl lg:text-[20px] text-right text-[#F5F9FD] tracking-[-0.02em]">
                    العنوان
                  </h4>
                  <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] max-w-full sm:max-w-[345px]">
                    المملكة العربية السعودية المنطقة الشرقية - الدمام
                    <br />
                    طريق الملك فهد، حي الشاطئ
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[5px] flex items-center justify-center bg-gradient-to-r from-[#07B3D5] to-[#2564EA] flex-shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 sm:w-[20px] sm:h-[20px] text-[#F5F9FD]" />
                </div>
              </div>
              
              {/* Phone Number */}
              <div className="flex flex-row justify-end items-start gap-3 sm:gap-4 lg:gap-[15px] w-full">
                <div className="flex flex-col items-end justify-center gap-2 flex-1">
                  <h4 className="font-tajawal font-bold text-lg sm:text-xl lg:text-[20px] text-right text-[#F5F9FD] tracking-[-0.02em]">
                    رقم الهاتف
                  </h4>
                  <div className="flex flex-col items-end gap-2 w-full max-w-full sm:max-w-[345px]">
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full">
                      +966 13 XXX XXXX
                    </p>
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full">
                      +966 50 XXX XXXX
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[5px] flex items-center justify-center bg-gradient-to-r from-[#07B3D5] to-[#2564EA] flex-shrink-0">
                  <FontAwesomeIcon icon={faPhoneAlt} className="w-4 h-4 sm:w-[20px] sm:h-[20px] text-[#F5F9FD]" />
                </div>
              </div>
              
              {/* Email */}
              <div className="flex flex-row justify-end items-start gap-3 sm:gap-4 lg:gap-[15px] w-full">
                <div className="flex flex-col items-end justify-center gap-2 flex-1">
                  <h4 className="font-tajawal font-bold text-lg sm:text-xl lg:text-[20px] text-right text-[#F5F9FD] tracking-[-0.02em]">
                    البريد الإلكتروني
                  </h4>
                  <div className="flex flex-col items-end gap-2 w-full max-w-full sm:max-w-[345px]">
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full break-all">
                      info@darhout.com
                    </p>
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full break-all">
                      support@darhout.com
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[5px] flex items-center justify-center bg-gradient-to-r from-[#07B3D5] to-[#2564EA] flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 sm:w-[20px] sm:h-[20px] text-[#F5F9FD]" />
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="flex flex-row justify-end items-start gap-3 sm:gap-4 lg:gap-[15px] w-full">
                <div className="flex flex-col items-end justify-center gap-2 flex-1">
                  <h4 className="font-tajawal font-bold text-lg sm:text-xl lg:text-[20px] text-right text-[#F5F9FD] tracking-[-0.02em]">
                    ساعات العمل
                  </h4>
                  <div className="flex flex-col items-end gap-2 w-full max-w-full sm:max-w-[345px]">
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full">
                      الأحد - الخميس، 9.00 ص - 5.00 م
                    </p>
                    <p className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-right text-[#F5F9FD] tracking-[-0.02em] w-full">
                      الجمعة - السبت: مغلق
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[5px] flex items-center justify-center bg-gradient-to-r from-[#07B3D5] to-[#2564EA] flex-shrink-0">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 sm:w-[20px] sm:h-[20px] text-[#F5F9FD]" />
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex flex-row justify-end items-start gap-3 sm:gap-4 lg:gap-[15px] w-full">
                <div className="flex flex-col items-end justify-center gap-3 flex-1">
                  <h4 className="font-tajawal font-bold text-lg sm:text-xl lg:text-[20px] text-right text-[#F5F9FD] tracking-[-0.02em]">
                    تابعنا على منصات التواصل
                  </h4>
                  <div className="flex flex-row justify-end items-center gap-3 sm:gap-4 w-full">
                    <FontAwesomeIcon icon={faSquare} className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-[#F5F9FD] hover:text-[#07B3D5] transition-colors cursor-pointer" />
                    <FontAwesomeIcon icon={faSquare} className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-[#F5F9FD] hover:text-[#07B3D5] transition-colors cursor-pointer" />
                    <FontAwesomeIcon icon={faSquare} className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-[#F5F9FD] hover:text-[#07B3D5] transition-colors cursor-pointer" />
                    <FontAwesomeIcon icon={faSquare} className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-[#F5F9FD] hover:text-[#07B3D5] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="w-full xl:w-[640px] rounded-[16px] filter drop-shadow-[0_0_17.4px_#1D6DB6] p-4 sm:p-6 lg:p-6 border border-[#0BAAE2] bg-opacity-20 flex flex-col items-center justify-center order-1 xl:order-2">
            <h3 className="font-tajawal font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-right text-[#F5F9FD] tracking-[-0.02em] w-full mb-6">
              أرسل رسالة
            </h3>
            
            {/* Form Container */}
            <div className="w-full space-y-4 sm:space-y-4">
              {/* Name and Email Fields */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                {/* Email Field */}
                <div className="flex flex-col items-end gap-2 flex-1 w-full">
                  <label className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#F5F9FD] tracking-[-0.02em] w-full text-right">
                    البريد الإلكتروني
                  </label>
                  <div className="w-full h-[45px] sm:h-[50px] bg-[#CADFF3] border border-[#334A66] rounded-[8px] flex items-center px-3 justify-end">
                    <input 
                      type="email" 
                      placeholder="Example@gmail.com"
                      className="bg-transparent text-right w-full font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-black tracking-[-0.02em] outline-none placeholder:text-gray-500"
                    />
                  </div>
                </div>
                
                {/* Name Field */}
                <div className="flex flex-col items-end gap-2 flex-1 w-full">
                  <label className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#F5F9FD] tracking-[-0.02em] w-full text-right">
                    الاسم
                  </label>
                  <div className="w-full h-[45px] sm:h-[50px] bg-[#CADFF3] border border-[#334A66] rounded-[8px] flex items-center px-3 justify-end">
                    <input 
                      type="text" 
                      placeholder="أدخل اسمك"
                      className="bg-transparent text-right w-full font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-black tracking-[-0.02em] outline-none placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="flex flex-col items-end gap-2 w-full">
                <label className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#F5F9FD] tracking-[-0.02em] w-full text-right">
                  الموضوع
                </label>
                <div className="w-full h-[45px] sm:h-[50px] bg-[#CADFF3] border border-[#334A66] rounded-[8px] flex items-center px-3 justify-end">
                  <input 
                    type="text" 
                    placeholder="موضوع رسالتك"
                    className="bg-transparent text-right w-full font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-black tracking-[-0.02em] outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              {/* Request Type Dropdown */}
              <div className="flex flex-col items-end gap-2 w-full">
                <label className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#F5F9FD] tracking-[-0.02em] w-full text-right">
                  نوع الطلب
                </label>
                <div className="w-full h-[45px] sm:h-[50px] bg-[#CADFF3] border border-[#334A66] rounded-[8px] flex items-center px-3 justify-between relative">
                  <FontAwesomeIcon icon={faCaretDown} className="w-6 h-6 sm:w-[32px] sm:h-[32px] text-[#7A9097] pointer-events-none" />
                  <select 
                    className="bg-transparent text-right w-full font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-black tracking-[-0.02em] outline-none appearance-none absolute inset-0 px-3 cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>نوع رسالتك</option>
                    <option value="inquiry">استفسار</option>
                    <option value="support">طلب دعم</option>
                    <option value="sales">طلب تسعيرة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>
              
              {/* Message Field */}
              <div className="flex flex-col items-end gap-2 w-full">
                <label className="font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#F5F9FD] tracking-[-0.02em] w-full text-right">
                  الرسالة
                </label>
                <div className="w-full h-[100px] sm:h-[125px] bg-[#CADFF3] border border-[#334A66] rounded-[8px] flex items-start px-3 justify-end py-2">
                  <textarea 
                    placeholder="اكتب رسالتك هنا"
                    className="bg-transparent text-right w-full font-tajawal font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed text-black tracking-[-0.02em] outline-none resize-none h-full placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="w-full pt-2">
                <Button
                  text="أرسل الرسالة"
                  icon={<FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />}
                  variant="primary"
                  type="submit"
                  className="w-full h-[45px] sm:h-[50px] text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;