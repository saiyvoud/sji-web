import React from "react";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import image
import img1 from "../../assets/icons/1.png";
import img2 from "../../assets/icons/2.png";
import img3 from "../../assets/icons/3.png";

import { IoIosArrowForward } from "react-icons/io";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderHomeMD() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex h-[450px] w-[380px] flex-col items-center rounded-md bg-[#003049] px-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[470px] 2xl:w-[360px]">
            <h3 className="mb-10 mt-7 text-[24px] font-semibold text-white md:mt-5 lg:mb-5 lg:h-[70px]">
              {t("sliderHome.laoStockRecommendations")}
            </h3>
            <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white p-6">
              <img src={img1} alt="" className="h-10 w-10" />
            </div>
            <p className="text-start text-[15px] text-white">
              {t("sliderHome.freeRegistration")}
            </p>
            <hr className="mt-10 w-full border border-white lg:mt-5" />
            <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[20px] text-white hover:text-orange-400">
              <p>{t("sliderHome.readMore")}</p>
              <IoIosArrowForward />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[450px] w-[380px] flex-col items-center rounded-md bg-[#003049] px-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[470px] 2xl:w-[360px]">
            <h3 className="mb-10 mt-7 text-[24px] font-semibold text-white md:mt-5 lg:mb-5 lg:h-[70px]">
              {t("sliderHome.fundRecommendations")}
            </h3>
            <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white p-6">
              <img src={img3} alt="" className="h-10 w-10" />
            </div>
            <p className="text-start text-[15px] text-white">
              {t("sliderHome.freeRegistration")}
            </p>
            <hr className="mt-10 w-full border border-white lg:mt-5" />
            <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[20px] text-white hover:text-orange-400">
              <p>{t("sliderHome.readMore")}</p>
              <IoIosArrowForward />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[450px] w-[380px] flex-col items-center rounded-md bg-[#003049] px-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[470px] 2xl:w-[360px]">
            <h3 className="mb-10 mt-7 text-[24px] font-semibold text-white md:mt-5 lg:mb-5 lg:h-[70px]">
              {t("sliderHome.fundRecommendations")}
            </h3>
            <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white p-6">
              <img src={img2} alt="" className="h-10 w-10" />
            </div>
            <p className="text-start text-[15px] text-white">
              {t("sliderHome.freeRegistration")}
            </p>
            <hr className="mt-10 w-full border border-white lg:mt-5" />
            <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[20px] text-white hover:text-orange-400">
              <p>{t("sliderHome.readMore")}</p>
              <IoIosArrowForward />
            </div>
          </div>
        </SwiperSlide>
        {/* Repeat the same pattern for the remaining SwiperSlides */}
      </Swiper>
    </>
  );
}
