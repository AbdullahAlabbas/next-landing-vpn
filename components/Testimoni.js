import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "رؤية 2030",
      testimoni:
        "تعزيز الابتكار، خلق فرص عمل، زيادة الصادرات، تحقيق الاكتفاء الذاتي، وتقوية الاقتصاد السعودي بما يتماشى مع رؤية 2030. دعم الحلول المستدامة التي تساهم في تحقيق هذه الأهداف على المدى الطويل",
    },
    {
      name: "الصناعة والسلامة",
      testimoni:
        "تعزيز معايير السلامة في القطاع الصناعي، دعم الابتكار في مجالات السلامة والصحة المهنية، وتطوير بيئة صناعية آمنة ومستدامة",
    },
    {
      name: "السعودية الخضراء",
      testimoni:
        "تعزيز الوعي البيئي، دعم الابتكار في الحلول المستدامة، وتحقيق تنمية خضراء مستدامة تساهم في الحفاظ على البيئة وتقليل البصمة الكربونية",
    },
    {
      name: "مجالات المستقبل",
      testimoni:
        "يتجه الابتكار نحو عدة مجالات منها التقاط الكربون، حيث يتم توظيف تقنيات الذكاء الاصطناعي لتحسين الكفاءة وتعزيز الاستدامة، مما يسهم في تطوير البيئة الصناعية والحد من التأثيرات البيئية",
    },
    {
      name: "اللغة العربية",
      testimoni:
        "تعزيز استخدام اللغة العربية في المجالات التقنية والابتكارية، ودعم الهوية الثقافية العربية من خلال حلول تقنية تعتمد على اللغة",
    },
    {
      name: "روح الفريق",
      testimoni:
        "تعزيز روح الفريق من خلال التعاون وتبادل الأفكار، وتحقيق الأهداف المشتركة، وتنمية مهارات العمل الجماعي لتحقيق الابتكار والإبداع",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a>
          <span className="mx-2 rounded-full h-4 w-4 block cursor-pointer transition-all"></span>
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

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div
              dir="rtl"
              className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col w-full md:max-w-[350px] md:h-[250px]"
            >
              <div className="flex flex-col w-full">
                <p className="text-[18px] text-black-600 text-right font-bold">
                  {item.name}
                </p>
              </div>
              <p className="mt-5 text-right text-[16px] text-white-500">
                {item.testimoni}.
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom arrows */}
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

export default Testimoni;
