import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const CountdownTimer = ({ targetDate, scrollAnimation }) => {
  // Function to format numbers with leading zeros
  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  // Countdown logic
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation} className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-4" dir="rtl">
          بداية الهاكاثون
        </h2>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              {formatNumber(timeLeft.days)}
            </span>
            أيام
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              {formatNumber(timeLeft.hours)}
            </span>
            ساعات
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              {formatNumber(timeLeft.minutes)}
            </span>
            دقائق
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              {formatNumber(timeLeft.seconds)}
            </span>
            ثواني
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default CountdownTimer;
