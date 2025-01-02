import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1
              className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal"
              dir="rtl"
            >
              <strong>صناعة ثون INDUSTRIALTHON</strong>
            </h1>
            <p className="text-white-500 mt-4 mb-6" dir="rtl">
              مسابقة تهدف إلى تعزيز التواصل بين المبدعين من جميع أنحاء
              المملكة وتطوير قدراتهم التقنية لتلبية احتياجات الصناعة برعاية
              فخرية من شركة أرامكو السعودية. تمثل "صناعة ثون" فرصة فريدة
              للمشاركين لتطوير مهاراتهم، تبادل الأفكار والمعرفة، وعرض مشاريعهم
              أمام خبراء الصناعة، حيث أن المشاريع الفائزة التي تُظهِر تأثيرًا
              إيجابيًا على عمليات أرامكو قد تحظى باهتمام شركة أرامكو السعودية
              لتبنيها، مما يوفر فرصة تطبيقها العملي في العالم الحقيقي. في
              "صناعة ثون" نهدف إلى بناء مجتمع متماسك من المبدعين السعوديين ودعم
              التكامل التقني بين المناطق، مما يسهم في رفع سقفِ معايير
              الابتكارات الوطنية في بيئة مشجعة.
            </p>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Logos Section */}
      <ScrollAnimationWrapper>
        <motion.div
          className="flex justify-end items-start mt-10 gap-10 md:gap-20"
          variants={scrollAnimation}
        >
          {/* Sponsor */}
          <div className="text-right">
            <div className="mb-4 relative inline-block">
              <h3 className="text-2xl font-bold relative z-10 text-black-600">
                الراعي الرسمي
              </h3>
              <div
                className="absolute w-full  z-0"
                style={{
                  height: "9px",
                  bottom: "0",
                  left: "0",
                }}
              ></div>
            </div>
            <motion.img
              src="/aramco.png"
              alt="Aramco Logo"
              className="mx-auto"
              style={{ width: "350px", height: "auto" }}
              variants={scrollAnimation}
            />
          </div>

          {/* Organizer */}
          <div className="text-right">
            <div className="mb-4 relative inline-block">
              <h3 className="text-2xl font-bold relative z-10 text-black-600">
                الجهة المنظمة
              </h3>
              <div
                className="absolute w-full  z-0"
                style={{
                  height: "9px",
                  bottom: "0",
                  left: "0",
                }}
              ></div>
            </div>
            <motion.img
              src="/juc.png"
              alt="الهيئة الملكية للجبيل وينبع"
              className="mx-auto"
              style={{ width: "350px", height: "auto" }}
              variants={scrollAnimation}
            />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Partners Section */}
      <ScrollAnimationWrapper>
        <motion.div className="flex flex-col w-full my-12" variants={scrollAnimation}>
          <div className="mb-4 relative inline-block text-right" dir="rtl">
            <h3 className="text-2xl font-bold relative z-10 inline-block text-black-600">
              شركـاء النجاح
            </h3>
            <div
              className="absolute w-36  z-0"
              style={{
                height: "9px",
                bottom: "0",
                right: "0",
              }}
            ></div>
          </div>

          <motion.div
            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
            variants={scrollAnimation}
          >
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt="Amazon Logo"
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt="Netflix Logo"
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt="Reddit Logo"
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt="Discord Logo"
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt="Spotify Logo"
            />
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
