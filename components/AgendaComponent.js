import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

// Individual agenda item component
const AgendaItem = ({ time }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 mb-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-lg" style={{ fontWeight: 'bold', fontSize: '20px' }}>{time.range}</span>
        </div>
        <div className="text-black font-semibold">
          {time.status}
        </div>
      </div>
    </div>
  );
};

// Main agenda component
const Agenda = ({ times }) => {
  return (
    <div className="flex flex-col">
      {times.map((time, index) => (
        <AgendaItem key={index} time={time} />
      ))}
    </div>
  );
};

// Wrapper component with dropdown functionality and styled button
const AgendaComponent = () => {
  const [isOpen, setIsOpen] = useState([]);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const toggleDropdown = (index) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  const days = [
    {
      title: 'اليوم الأول',
      times: [
        { range: '١٠:٠٠ ص - ١١:٠٠ ص', status: 'تسجيل المشاركين' },
        { range: '١١:٠٠ ص - ١٢:٠٠ م', status: 'الندوة التعريفية' },
        { range: '١٢:٠٠ م - ٦:٠٠ م', status: 'بدء العمل على المشاريع' }
      ]
    },
    {
      title: 'اليوم الثاني',
      times: [
        { range: '٩:٠٠ ص - ٥:٠٠ م', status: 'العمل على المشاريع وتسليمها' },
        { range: '٣:٠٠ م - ٦:٠٠ م', status: 'تحكيم المشاريع' }
      ]
    },
    {
      title: 'اليوم الثالث',
      times: [
        { range: '٧:٠٠ ص', status: 'بدء معرض أعمال المشاركين (Expo)' },
        { range: '٨:٠٠ ص', status: 'البدء في استقبال الزوار' },
        { range: '١٠:٠٠ ص - ١٢:٠٠ م', status: 'الحفل الختامي' },
        { range: '١٢:٣٠ م', status: 'استئناف معرض المشاريع' }
      ]
    }
  ];

  return (
    <div className="p-4">
      {days.map((day, index) => (
        <ScrollAnimationWrapper key={index}>
          <motion.div variants={scrollAnimation}>
            <div className="mb-4">  {/* Padding added here */}
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left bg-gray-100 hover:bg-orange-100 rounded-md py-2 px-4 flex justify-between items-center"
              >
                <span className={`transform transition-transform ${isOpen[index] ? 'rotate-180' : 'rotate-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{day.title}</span>
              </button>
              {isOpen[index] && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <Agenda times={day.times} />
                </div>
              )}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
};

export default AgendaComponent;
