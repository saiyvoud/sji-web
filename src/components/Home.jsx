import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

import bgOverlay from "../assets/images/bg.png";
import SJI_logo from "../assets/logo/sji-white.svg"
import SJI_log_black from "../assets/logo/sji-bg-blue.svg"
import SJI_log_white from "../assets/logo/sji-logo-white.png"
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
import { Helmet } from "react-helmet-async";

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

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log(data)
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Helmet>
        <title>SJI Investment - ສອນເຈົ້າລົງທຶນ</title>
        {/* <meta name="robots" content="index, follow" />
        <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
        <meta name="keywords" content="SJI Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:title" content="SJI Investment - ສອນເຈົ້າລົງທຶນ" />
        <meta property="og:description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:url" content="http://sjiinvestment.la" /> */}
      </Helmet>
      <Navbar>
        <div className="bg-[#002133] text-black pt-20 pb-5 lg:pt-20 ">
          <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
            <div className=" flex justify-around items-center">
              <div className=" w-full flex flex-col justify-center items-center">
                <img
                  loading="lazy"
                  alt=""
                  src={SJI_log_white}
                  className="w-[50%] lg:w-[200px] object-cover"
                />
                <h1 className="mb-1 mt-5 text-[40px] font-bold text-[#F97316]">
                  SJI Invsetment
                </h1>
                <p className="text-[10px] lg:text-lg md:text-lg text-center text-white">
                  The Big Data for Your Win, and Smart Insights for Your Success<br />
                  ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ <br />
                </p>
                {!AuthDetail?.data && (
                  <button
                    onClick={() => handleScroll("package")}
                    type="button"
                    className="mt-5 rounded bg-[#FB923C] px-5 py-2 font-semibold">
                    {t("home.tryNow")}
                  </button>
                )}
              </div>
              <div className=" w-[50%] hidden lg:block">
                <MosueWheelSlider />
              </div>
            </div>
          </div>

        </div>

        <div className="w-full bg-white pb-10">
          <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1400"
              className="flex justify-center"
            >
              <h2 className="pb-5 mt-10 text-[24px] font-extrabold text-[#1F2937] sm:pb-2 sm:text-[34px]">
                {t("home.briefInfo")}
              </h2>
            </div>

            <div className=" grid grid-cols-1 place-items-center sm:grid-cols-2">
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1400"
                className="flex justify-center lg:w-full"
              >
                <div className="flex h-[370px] w-[350px] cursor-pointer items-end justify-center rounded-xl bg-[#457B9D] hover:shadow-md sm:h-[340px] sm:w-[300px] lg:w-full">
                  <img
                  loading="lazy"
                    src={aiyA}
                    alt=""
                    className="h-[350px] w-[300px] rounded-xl object-cover sm:h-[320px] sm:w-[280px]"
                  />
                </div>
              </div>
              <div className="">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className="mb-0  flex flex-col items-center justify-center py-4 sm:mb-5 sm:mt-0"
                >
                  <h2 className="text-[24px] font-bold text-[#6B7280]">
                    {t("home.ourExperience")}
                  </h2>
                  <hr className="w-[150px] border-b-2 border-b-[#FF6500]" />
                </div>
                <div className="flex justify-between gap-x-6">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    className="flex flex-col items-center gap-y-4"
                  >
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        8Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.investmentExperience")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        5Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.teachingExperience")}
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    className="flex flex-col items-center gap-y-4"
                  >
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        8Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.investmentExperience")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-[28px] font-bold text-orange-600 sm:text-[28px] md:text-[30px]">
                        5Y
                      </h1>
                      <p className="text-center text-[16px] font-bold sm:text-[18px]">
                        {t("home.teachingExperience")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="package">
              {/* show package */}
              {
                !data?.data?.package && <Package />
              }
            </div>
            <div className="mt-10 text-center">
              <h5 className="text-[16px] sm:text-[18px]">
                {t("home.note")} <br className="sm:hidden" />
                <span className="text-orange-400 sm:ml-2">
                  {t("home.consultationNote")}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};
