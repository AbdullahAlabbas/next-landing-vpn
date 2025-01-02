import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ButtonPrimary from '../components/misc/ButtonPrimary';  // Ensure the path is correct
import Header from "/Users/abdullah/Documents/GitHub/next-landing-vpn/components/Layout/Header";


const TypeformEmbed = () => {
  const [showButton, setShowButton] = useState(false);  // State to manage button visibility

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Setting the timer to show the button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);  // 5000 milliseconds equals 5 seconds

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);  // Clear the timer if the component unmounts
    };
  }, []);

  return (
    <div>
            <Header />
      <div data-tf-live="01JF0CSJ0SP46VSQ6WW19ZGEY7"></div>
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        {showButton && (
          <Link href="/" passHref>
            <a>
              <ButtonPrimary>Return to Main Page</ButtonPrimary>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TypeformEmbed;
