import React from "react";

const Footer = () => {
  return (
    <div className="pt-72 pb-4">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-2 sm:col-start-1 sm:col-end-3 flex flex-col">
          <p className="text-black-600 mb-0 font-medium text-lg" style={{ direction: 'rtl' }}>المنتج</p>
          <ul className="text-black-500" style={{ direction: 'rtl' }}>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">تحميل</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">التابع المدونة</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-3 sm:col-end-5 flex flex-col">
          <p className="text-black-600 mb-0 font-medium text-lg" style={{ direction: 'rtl' }}>التفاعل</p>
          <ul className="text-black-500" style={{ direction: 'rtl' }}>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">الأسئلة المتكررة</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">شروط الخدمة</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-5 sm:col-end-7 flex flex-col">
          <p className="text-black-600 mb-0 font-medium text-lg" style={{ direction: 'rtl' }}>كسب شبكة</p>
          <ul className="text-black-500" style={{ direction: 'rtl' }}>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">الشريك التابع</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">أصبح شريكاً</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-start-9 sm:col-end-13 flex flex-col items-end">
          <img src="/assets/Logo2.png" alt="Logo" className="h-11 w-auto mb-0" /> {/* Directly using <img> */}
          <p className="mb-0" style={{ direction: 'rtl' }}>
          مسابقة تهدف إلى تعزيز التواصل بين المبدعين من جميع أنحاء
              المملكة وتطوير قدراتهم التقنية
          </p>
          {/* <p  style={{ direction: 'rtl' }}>© جميع الحقوق محفوظة </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
