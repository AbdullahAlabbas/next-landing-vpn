import React from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Prizes = ({ scrollAnimation }) => {
  const prizes = [
    { title: "الـمركـــــــز الأول", prize: "20,000 ريال" },
    { title: "الـمركـــــــز الثاني", prize: "15,000 ريال" },
    { title: "الـمركـــــــز الثالث", prize: "10,000 ريال" },
    { title: "الـمركـــــــز الرابع", prize: "6,000 ريال" },
    { title: "الـمركـــــــز الخامس", prize: "4,000 ريال" },
  ];

  return (
    <div className="flex flex-col w-full my-0 bg-white" id="prizes">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          style={{
            paddingTop: "20px",
            position: "relative",
            zIndex: 2,
          }}
          className="text-4xl font-bold text-black-600"
          dir="rtl"
        >
          الجوائز
        </motion.h3>
        <motion.div
          variants={scrollAnimation}
          className=""
          style={{
            height: "8px",
            width: "105px",
            margin: "auto",
            marginTop: "-10px",
          }}
        />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full flex flex-col py-12">
        <motion.div variants={scrollAnimation}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            dir="rtl" // Apply RTL direction to the grid
          >
            {prizes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 text-black rounded-lg p-4 shadow-lg text-center"
                dir="rtl" // Ensure text alignment respects RTL
              >
                <h4 className="text-3xl font-bold mb-2" dir="rtl">
                  {item.title}
                </h4>
                <p className="text-xl" dir="rtl">
                  {item.prize}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Prizes;
