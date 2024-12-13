import React, { useState, useEffect } from 'react';

const events = [
  { id: 1, date: '2024-09-29', title: 'بدء التسجيل' },
  { id: 2, date: '2024-10-29', title: 'آخر فرصة للتسجيل' },
  { id: 3, date: '2024-11-03', title: 'إعلان المرشحين' },
  { id: 4, date: '2024-11-18', title: 'يوم الهاكاثون (حضوري)' },
  { id: 5, date: '2024-11-21', title: 'الحفل الختامي وإعلان الفائزين' }
];

const Timeline = () => {
  const [windowWidth, setWindowWidth] = useState(null);  // Initial state is null to handle SSR

  useEffect(() => {
    // Update the width only after the component mounts
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768; // Mobile view for widths less than 768px

  // For desktop: horizontal line
  const lineStyle = {
    position: 'absolute',
    top: '50%',
    left: '0',
    height: '2px',
    width: '100%',
    backgroundColor: '#F53855',
    zIndex: 1
  };

  // Ensure that nothing is rendered until we know the client width to prevent SSR issues
  if (windowWidth === null) return null;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'center',
        margin: '16px 0',
        minHeight: isMobile ? 'auto' : '150px'
      }}
    >
      {/* Show the line only in desktop view */}
      {!isMobile && <div style={lineStyle} />}

      {events.map((event, index) => {
        // Styles for each event wrapper
        const eventWrapperStyle = isMobile
          ? {
              position: 'relative',
              marginBottom: '16px',
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }
          : {
              position: 'absolute',
              top: '50%',
              left: `calc(${100 - (index / (events.length - 1)) * 100}% - ${index === 0 ? '50px' : '0px'})`,
              transform: 'translate(-50%, -50%)',
              zIndex: 2
            };

        return (
          <div key={event.id} style={eventWrapperStyle}>
            <div
              style={{
                backgroundColor: '#E6E6F0',
                color: '#232f60',
                borderRadius: '8px',
                boxShadow: '0 1px 5px rgba(0,0,0,0.2)',
                padding: '10px',
                minWidth: event.id === 5 ? '230px' : '180px',
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
        );
      })}
    </div>
  );
};

export default Timeline;
