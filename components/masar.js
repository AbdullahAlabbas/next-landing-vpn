import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const masar = ({
  listmasar = [
    {
      name: "علم البيانات",
      image: "/assets/icon-1.png",
      masar:
        "تحليل البيانات الصناعية استخدام تقنيات علم البيانات لتحليل البيانات الضخمة من العمليات الصناعية بهدف تحسين الكفاءة وتوقع الأعطال",
    },
    {
      name: "الروبوتات",
      image: "/assets/icon-2.png",
      masar:
        " تطوير واستخدام الروبوتات التي تعتمد على تقنيات متقدمة لتنفيذ المهام الصناعية، مما يساهم في تحسين كفاءة الإنتاج, تقليل التكاليف وزيادة الأمان في بيئات العمل",
    },
    {
      name: "سلاسل الإمداد",
      image: "/assets/icon-3.png",
      masar:
        " سلاسل الإمداد الصناعية تشمل توريد المواد الخام، التصنيع، التخزين، والتوزيع، بهدف تحسين الكفاءة, تقليل التكاليف, تحسين التنبؤات وتبسيط العمليات اللوجستية ",
    },
    {
      name: "الذكاء الاصطناعي",
      image: "/assets/icon-4.png",
      masar:
        "تحسين العمليات الصناعية وتطوير تطبيقات تعتمد على تقنيات الذكاء الاصطناعي لزيادة كفاءة العمليات الصناعية الصناعية وتحسين الإنتاجية",
    },
    {
      name: "الأمن السيبراني",
      image: "/assets/icon-5.png",
      masar:
        "حماية البيانات والشبكات الصناعية تطوير حلول وبرامج تضمن أمان المعلومات والشبكات المستخدمة في العمليات الصناعية",
    },
  ],

}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a>
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listmasar.map((listmasars, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col w-full items-center">
                <Image
                  src={listmasars.image}
                  height={55}
                  width={55}
                  alt="Icon"
                  className="mb-3"
                />
                <div className="text-center">
                  <p className="text-lg text-black-600 capitalize">{listmasars.name}</p>
                </div>
              </div>
              <p className="mt-5 text-left">“{listmasars.masar}”</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6" />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default masar;
