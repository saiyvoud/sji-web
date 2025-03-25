import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import newsImg from "../../../assets/images/trade.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function SliderNews() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid w-full grid-cols-1 place-items-center justify-between sm:grid-cols-12">
            <div className="p-2 sm:col-span-6">
              <p className="mb-5 md:text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam iure, doloribus asperiores vero perspiciatis optio!
              </p>
              <img
                src={newsImg}
                alt=""
                className="w-[320px] rounded object-cover sm:h-[450px] sm:w-[700px] sm:rounded-xl"
              />
            </div>
            <div className="ml-10 sm:col-span-6">
              <h2 className="mb-5 text-[20px] font-extrabold leading-tight tracking-widest sm:text-[22px] md:text-start md:text-[30px]">
                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
              </h2>
              <p className="sm:text-[15px] md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt ut labore et <br /> dolore
                magna aliqua.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid w-full grid-cols-1 place-items-center justify-between sm:grid-cols-12">
            <div className="p-2 sm:col-span-6">
              <p className="mb-5 md:text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam iure, doloribus asperiores vero perspiciatis optio!
              </p>
              <img
                src={newsImg}
                alt=""
                className="w-[320px] rounded object-cover sm:h-[450px] sm:w-[700px] sm:rounded-xl"
              />
            </div>
            <div className="ml-10 sm:col-span-6">
              <h2 className="mb-5 text-[20px] font-extrabold leading-tight tracking-widest sm:text-[22px] md:text-start md:text-[30px]">
                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
              </h2>
              <p className="sm:text-[15px] md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt ut labore et <br /> dolore
                magna aliqua.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid w-full grid-cols-1 place-items-center justify-between sm:grid-cols-12">
            <div className="p-2 sm:col-span-6">
              <p className="mb-5 md:text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam iure, doloribus asperiores vero perspiciatis optio!
              </p>
              <img
                src={newsImg}
                alt=""
                className="w-[320px] rounded object-cover sm:h-[450px] sm:w-[700px] sm:rounded-xl"
              />
            </div>
            <div className="ml-10 sm:col-span-6">
              <h2 className="mb-5 text-[20px] font-extrabold leading-tight tracking-widest sm:text-[22px] md:text-start md:text-[30px]">
                TIPS CHOICE BEST <br /> AGENCY For House <br /> Decoration
              </h2>
              <p className="sm:text-[15px] md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt ut labore et <br /> dolore
                magna aliqua.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
