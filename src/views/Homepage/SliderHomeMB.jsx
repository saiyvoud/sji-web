import React, { useRef, useState } from "react";
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
import { useTranslation } from "react-i18next";

export default function SliderHomeMB() {
  const { t } = useTranslation();
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mt-5 h-full w-[360px] cursor-pointer shadow-md sm:h-[440px] sm:w-[450px]">
            <div className=" h-[390px] flex items-center justify-center w-full flex-col rounded-lg bg-[#003049] px-7 sm:h-full">
              <h3 className="mb-5 mt-0 text-[24px] font-semibold text-white sm:mt-0 sm:text-[28px]">
                {t("sliderHome.laoStockRecommendations")}
              </h3>
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-6 sm:h-28 sm:w-28">
                <img src={img1} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <p className="text-start text-[15px] text-white sm:text-[18px]">
                {t("sliderHome.freeRegistration")}
              </p>
              <hr className="mt-5 w-full border border-white sm:mt-10" />
              <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[18px] text-white hover:text-orange-400 sm:text-[20px]">
                <p>{t("sliderHome.readMore")}</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-5 h-full w-[360px] cursor-pointer shadow-md sm:h-[420px] sm:w-[450px]">
            <div className=" h-[390px] flex justify-center w-full flex-col items-center rounded-lg bg-[#003049] px-7 sm:h-full">
              <h3 className="mb-5 mt-0 text-[24px] font-semibold text-white sm:text-[28px]">
                ຄຳແນະນຳຮຸ້ນລາວ
              </h3>
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-6 sm:h-28 sm:w-28">
                <img src={img1} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <p className="text-start text-[15px] text-white sm:text-[18px]">
                ການສະໝັກສະມາຊິກແມ່ນຟຣີບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆ
                ສາມາດເບິ່ງການວິເຄາະຂ່າວການເງິນແລະບິ່ງການ
                ວິເຄາະຂ່າວການເງິນແລະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະ
              </p>
              <hr className="mt-5 w-full border border-white sm:mt-10" />
              <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[18px] text-white hover:text-orange-400 sm:text-[20px]">
                <p>ອ່ານຕໍ່</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-5 h-full w-[360px] cursor-pointer shadow-md sm:h-[420px] sm:w-[450px]">
            <div className=" h-[390px] flex items-center justify-center w-full flex-col rounded-lg bg-[#003049] px-7 sm:h-full">
              <h3 className="mb-5 mt-0 text-[24px] font-semibold text-white sm:text-[28px]">
                ຄຳແນະນຳຮຸ້ນລາວ
              </h3>
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-6 sm:h-28 sm:w-28">
                <img src={img1} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <p className="text-start text-[15px] text-white sm:text-[18px]">
                ການສະໝັກສະມາຊິກແມ່ນຟຣີບໍ່ມີຄ່າໃຊ້ຈ່າຍໃດໆ
                ສາມາດເບິ່ງການວິເຄາະຂ່າວການເງິນແລະບິ່ງການ
                ວິເຄາະຂ່າວການເງິນແລະຂ່າວການເງິນແລະບິ່ງການ ວິເຄາະຂ່າວການເງິນແລະ
              </p>
              <hr className="mt-5 w-full border border-white sm:mt-10" />
              <div className="mt-6 flex cursor-pointer items-center gap-x-2 text-[18px] text-white hover:text-orange-400 sm:text-[20px]">
                <p>ອ່ານຕໍ່</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
