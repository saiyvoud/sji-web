import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import stockImg from "../assets/images/stock.jpg";
import trade2 from "../assets/images/trade2.jpg";
import trade3 from "../assets/images/trade3.jpg";
import trade4 from "../assets/images/trade4.jpg";

import "./styles.css";

// import required modules
import {
  Mousewheel,
  Pagination,
  Autoplay,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";

export default function MosueWheelSlider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        effect={"coverflow"}
        // grabCursor={true}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Autoplay, FreeMode, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={stockImg}
            alt=""
            className="h-[180px] w-[300px] rounded-md object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={trade2}
            alt=""
            className="h-[180px] w-[300px] rounded-md object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={trade3}
            alt=""
            className="h-[180px] w-[300px] rounded-md object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={stockImg}
            alt=""
            className="h-[180px] w-[300px] rounded-md object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={trade4}
            alt=""
            className="h-[180px] w-[300px] rounded-md object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
