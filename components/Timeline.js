import React from 'react';

const events = [
  { id: 1, date: '2024-09-29', title: 'بدء التسجيل' },
  { id: 2, date: '2024-10-29', title: 'آخر فرصة للتسجيل' },
  { id: 3, date: '2024-11-03', title: 'إعلان المرشحين' },
  { id: 4, date: '2024-11-18', title: 'يوم الهاكاثون (حضوري)' },
  { id: 5, date: '2024-11-21', title: 'الحفل الختامي وإعلان الفائزين' }
];

const Timeline = () => {
  const numEvents = events.length;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '150px', // Adjust as needed for spacing around the line
        display: 'flex',
        alignItems: 'center',
        margin: '16px 0'
      }}
    >
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#F53855', // Adjust the line color if needed
          zIndex: 1
        }}
      />

      {events.map((event, index) => (
        <div
          key={event.id}
          style={{
            position: 'absolute',
            top: '50%',
            left: `calc(${100 - (index / (numEvents - 1)) * 100}% - ${
              index === 0 ? '50px' : '0px'
            })`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}
        >
          <div
            style={{
              backgroundColor: '#E6E6F0',
              color: '#232f60',
              borderRadius: '8px',
              boxShadow: '0 1px 5px rgba(0,0,0,0.2)',
              padding: '10px',
              minWidth: event.id === 5 ? '230px' : '180px', // Larger width for the specified event
              textAlign: 'center'
            }}
          >
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem' }}>
              {event.title}
            </p>
            <p style={{ margin: '0', marginTop: '5px', fontSize: '0.9rem', color: '#AFB5C0' }}>
              {event.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
