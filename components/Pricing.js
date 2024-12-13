import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import Masar from "./masar";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import AgendaComponent from './AgendaComponent';
import Timeline from './Timeline';  // Import the Timeline component

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-grey-100 w-full py-14" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              مسارات المسابقة
            </motion.h3>
            <div
              className="bg-orange-500"
              style={{
                height: "8px",
                width: "260px",
                margin: "auto",
                marginTop: "-10px"
              }}
            ></div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Masar />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              أهداف صناعة ثون
            </motion.h3>
            <div
              className="bg-orange-500"
              style={{
                height: "8px",
                width: "280px",
                margin: "auto",
                marginTop: "-10px"
              }}
            ></div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="relative inline-block mb-0 mt-6 text-center">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black-600 relative z-10">
                رحلة صناعة ثون
              </h4>
              <div
                className="absolute bg-orange-500 z-0"
                style={{
                  width: "190px",
                  height: "9px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <Timeline />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="relative inline-block mb-0 mt-2 text-center">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black-600 relative z-10">
                الأجندة
              </h4>
              <div
                className="absolute bg-orange-500 z-0"
                style={{
                  width: "90px",
                  height: "9px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <AgendaComponent />

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="relative inline-block mb-6 mt-6 text-center">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black-600 relative z-10">
                موقع الحفل
              </h4>
              <div
                className="absolute bg-orange-500 z-0"
                style={{
                  width: "150px",
                  height: "9px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="relative w-full mt-2">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row-reverse justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-right w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  مركز الأمير سعود بن عبد الله بن ثنيان آل سعود
                </h5>
                <p>كلية الجبيل الصناعية, مدينة الجبيل</p>
              </div>
              <ButtonPrimary>الذهاب إلى الموقع</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Pricing;
