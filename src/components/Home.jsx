import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";

import bgOverlay from "../assets/images/bg.png";
import stockImg from "../assets/images/stock.jpg";
import MosueWheelSlider from "./MosueWheelSlider";
import SliderHome from "../views/Homepage/SliderHome";

// image
import graphImg from "../assets/images/graph.png";
import aiyA from "../assets/images/aiy-a.png";
import SliderHomeMB from "../views/Homepage/SliderHomeMB";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../store/languageStore";
import SliderHomeMD from "../views/Homepage/SliderHomeMD";
import { useAuthStore } from "../store/authStore";
import Package from "./Package";
import { useGetMe } from "../hooks/Auth.hook";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageStore();
  // package active
  const packageActiveStyle = "border border-orange-400 bg-[#FFEDD5]";
  const [packageActive, setPackageActive] = useState(false);
  const { AuthDetail } = useAuthStore();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data, error, isLoading } = useGetMe();

  useEffect(() => {
    AOS.init({
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animation
    });
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log(data)
  return (
    <Navbar>
      <div className="bg-[#002133] md:bg-[#003049]">
        <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-[300px] before:w-full before:bg-[#002133] sm:h-[700px] sm:before:h-[700px] sm:before:bg-[#002133] xl:h-screen xl:before:h-screen">
          <img
            alt=""
            src={bgOverlay}
            className="absolute hidden sm:block sm:h-full sm:w-full xl:h-screen"
          />
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="container relative z-50 mx-auto mb-5 h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:mb-0 lg:max-w-[900px] xl:max-w-6xl"
          >
            <div className="flex items-center justify-between md:mt-5">
              <div className="sm:flex sm:flex-[2] sm:flex-col sm:items-start sm:gap-y-4 md:w-full md:flex-[2] lg:w-full xl:flex-[3]">
                <h1 className="mb-1 mt-3 text-[40px] font-bold text-[#F97316]">
                  {t("home.title")}
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates culpa temporibus
                  <br /> facere quam sequi <br /> adipisci voluptatum illo velit
                  in quod nulla minus vitae, nam rem ipsum eaque consequatur
                  assumenda explicabo!
                </p>
                {!AuthDetail?.data && (
                  <button type="button" className="mt-5">
                    <Link
                      to={"/home/membership"}
                      className="rounded bg-[#FB923C] px-5 py-2 font-semibold"
                    >
                      {t("home.premium")}
                    </Link>
                  </button>
                )}
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1400"
                className="mt-5 flex flex-col items-center gap-y-5 sm:flex-[2] md:flex-[2]"
              >
                {windowWidth > 480 && <MosueWheelSlider />}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pb-10">
          <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex justify-center"
            >
              <h2 className="pb-0 pt-7 text-[28px] font-extrabold text-[#1F2937] sm:text-[34px]">
                {t("home.ourServices")}
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="relative block h-full w-full"
            >
              {windowWidth < 700 && <SliderHomeMB />}
              {windowWidth > 800 && <SliderHome />}
              {windowWidth < 800 && windowWidth > 700 && <SliderHomeMD />}
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex justify-center"
            >
              <h2 className="pb-5 pt-7 text-[24px] font-extrabold text-[#1F2937] sm:pb-2 sm:text-[34px]">
                {t("home.briefInfo")}
              </h2>
            </div>

            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex w-full justify-center sm:w-[300px] sm:rounded-lg lg:w-[380px]"
              >
                <img
                  src={graphImg}
                  alt=""
                  className="h-[400px] w-[500px] rounded-xl object-cover sm:w-[320px] lg:w-full"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex justify-between gap-x-6"
              >
                <div className="flex flex-col items-center gap-y-4">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                      6Y
                    </h1>
                    <p className="text-center text-[16px] font-bold sm:text-[18px]">
                      {t("home.investmentExperience")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                      4Y
                    </h1>
                    <p className="text-center text-[16px] font-bold sm:text-[18px]">
                      {t("home.teachingExperience")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                      6Y
                    </h1>
                    <p className="text-center text-[16px] font-bold sm:text-[18px]">
                      {t("home.investmentExperience")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                      4Y
                    </h1>
                    <p className="text-center text-[16px] font-bold sm:text-[18px]">
                      {t("home.teachingExperience")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 place-items-center sm:grid-cols-2">
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex justify-center sm:hidden lg:hidden lg:w-full"
              >
                <div className="flex h-[370px] w-[350px] cursor-pointer items-end justify-center rounded-xl bg-[#457B9D] hover:shadow-md sm:h-[340px] sm:w-[300px] lg:w-full">
                  <img
                    src={aiyA}
                    alt=""
                    className="h-[350px] w-[300px] rounded-xl object-cover sm:h-[320px] sm:w-[280px]"
                  />
                </div>
              </div>
              <div className="">
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="mb-0 mt-5 flex flex-col items-center justify-center py-4 sm:mb-5 sm:mt-0"
                >
                  <h2 className="text-[24px] font-bold text-[#6B7280]">
                    {t("home.ourExperience")}
                  </h2>
                  <hr className="w-[150px] border-b-2 border-b-[#FF6500]" />
                </div>
                <div className="flex justify-between gap-x-6">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1300"
                    className="flex flex-col items-center gap-y-4"
                  >
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        6Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.investmentExperience")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        4Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.teachingExperience")}
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1400"
                    className="flex flex-col items-center gap-y-4"
                  >
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        6Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.investmentExperience")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        4Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.teachingExperience")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="hidden justify-center sm:flex lg:flex xl:w-full"
              >
                <div className="flex h-[370px] w-[350px] cursor-pointer items-end justify-center rounded-xl bg-[#457B9D] hover:shadow-md sm:h-[340px] sm:w-[300px] lg:w-full">
                  <img
                    src={aiyA}
                    alt=""
                    className="h-[350px] w-[300px] rounded-xl object-cover sm:h-[320px] sm:w-[280px]"
                  />
                </div>
              </div>
            </div>

            {/* show package */}
            {
              data?.data?.package === null && <Package />
            }
            {
              !data && <Package />
            }
            <div className="mb-16 mt-14 text-center">
              <h5 className="text-[16px] sm:text-[18px]">
                {t("home.note")} <br className="sm:hidden" />
                <span className="text-orange-400 sm:ml-2">
                  {t("home.consultationNote")}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
