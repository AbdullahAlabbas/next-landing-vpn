import React, { useState } from 'react';

// Individual agenda item component
const AgendaItem = ({ time }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 mb-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">{time.range}</span>
        </div>
        <div className={time.selected ? "text-green-500" : "text-red-500"}>
          {time.selected ? 'Confirmed' : 'Pending'}
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
  const [times, setTimes] = useState([
    { range: '5:00 - 9:00 AM', selected: true },
    { range: '9:00 - 1:00 PM', selected: false },
    { range: '1:00 - 5:00 PM', selected: true }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-gray-100 hover:bg-orange-100 rounded-md py-2 px-4 flex justify-between items-center"
      >
        Day 1
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
          <Agenda times={times} />
        </div>
      )}
    </div>
  );
};

export default AgendaComponent;
