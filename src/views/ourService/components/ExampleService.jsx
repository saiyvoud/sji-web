import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoMdArrowRoundForward } from "react-icons/io";

import screenImg from "../../../assets/images/screen.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ExampleService = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="container mx-auto mb-32 h-full w-full max-w-[340px] bg-white sm:mb-20 sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
      <div className="mb-5 flex items-center justify-between gap-x-5">
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-[20px] font-bold md:text-[28px] lg:text-[30px] lg:leading-[1.2]"
        >
          {t("OurService.example.title")}
        </h1>
        <button
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          type="button"
          className="flex w-[120px] items-center justify-center rounded bg-[#F97316] px-4 py-[6px] text-[20px] text-white"
        >
          {t("OurService.example.button")}
          <IoMdArrowRoundForward className="ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1400"
          className="flex w-[320px] cursor-pointer flex-col items-center rounded-md border-2 p-3 duration-300 ease-in-out hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[350px]"
        >
          <img
            src={screenImg}
            alt=""
            className="w-[320px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[340px]"
          />
          <h2 className="mb-2 mt-3 w-full text-center text-[20px] font-semibold leading-[1.2] sm:mb-4 sm:mt-2 sm:text-[28px] lg:text-[26px] xl:text-[28px]">
            {t("OurService.example.video_title")}{" "}
            <br className="hidden sm:block" />{" "}
            {t("OurService.example.video_title2")}
          </h2>
          {/*  */}
          <p className="text-[14px] text-orange-400 md:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex w-[320px] cursor-pointer flex-col items-center rounded-md border-2 p-3 duration-300 ease-in-out hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[350px]"
        >
          <img
            src={screenImg}
            alt=""
            className="w-[320px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[340px]"
          />
          <h2 className="mb-2 mt-3 w-full text-center text-[20px] font-semibold leading-[1.2] sm:mb-4 sm:mt-2 sm:text-[28px] lg:text-[26px] xl:text-[28px]">
            {t("OurService.example.video_title")}{" "}
            <br className="hidden sm:block" />{" "}
            {t("OurService.example.video_title2")}
          </h2>
          <p className="text-[14px] text-orange-400 md:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1600"
          className="flex w-[320px] cursor-pointer flex-col items-center rounded-md border-2 p-3 duration-300 ease-in-out hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[350px]"
        >
          <img
            src={screenImg}
            alt=""
            className="w-[320px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[340px]"
          />
          <h2 className="mb-2 mt-3 w-full text-center text-[20px] font-semibold leading-[1.2] sm:mb-4 sm:mt-2 sm:text-[28px] lg:text-[26px] xl:text-[28px]">
            {t("OurService.example.video_title")}{" "}
            <br className="hidden sm:block" />{" "}
            {t("OurService.example.video_title2")}
          </h2>
          <p className="text-[14px] text-orange-400 md:text-[12px] lg:text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};
