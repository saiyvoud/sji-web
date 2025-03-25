import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// image
import callImg from "../../../assets/icons/call.png";
import coinImg from "../../../assets/icons/coin.png";
import likeImg from "../../../assets/icons/like.png";
import likeCoinImg from "../../../assets/icons/like-coin.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetServices } from "../../../hooks/Service.hook";
import { FaCircleNotch } from "react-icons/fa";

export const Services = () => {
  const { data, error, isLoading } = useGetServices();
  const { t } = useTranslation();
  console.log(data)
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mx-auto mb-20 h-full max-w-[360px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl"
    >
      <div>
        <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3 md:gap-x-5 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {data?.data?.data?.map((item, index) => {
            return (
              <div key={index} className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0">
                {item.icon ? <img src={item.icon} alt="" className="w-16" /> : <FaCircleNotch size={50} className="w-16" />}
                <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
                  {item?.title}
                </h2>
                <p className="md:text-[12px] lg:text-[14px]">
                  {item?.description}
                </p>
                {/* <p className="md:text-[12px] lg:text-[14px]">
                  {t("OurService.description2")}
                </p> */}
              </div>)
          })}
          {/* <div className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0">
            <img src={callImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle1")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </div>
          <div className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0">
            <img src={coinImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle2")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </div>
          <div className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0">
            <img src={coinImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle3")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </div>
          <Link
            to={"/ourService/course"}
            className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0"
          >
            <img src={likeImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle4")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </Link>
          <div className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 sm:w-[300px] md:w-[220px] lg:w-[300px] xl:h-[270px] xl:w-[350px] xl:py-0">
            <img src={likeCoinImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle5")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </div> */}
        </div>
        <div className="mt-20 hidden grid-cols-2 place-items-center px-20 md:mt-10">
          <Link
            to={"/ourService/course"}
            className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 md:w-[300px]"
          >
            <img src={likeImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle4")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </Link>
          <Link
            to={"/ourService/course"}
            className="flex w-[320px] cursor-pointer flex-col items-center justify-center rounded-lg border p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 md:w-[300px]"
          >
            <img src={likeCoinImg} alt="" className="w-16" />
            <h2 className="my-2 text-center text-[24px] font-semibold text-orange-400 md:text-[20px] lg:text-[24px]">
              {t("OurService.serviceTitle5")}
            </h2>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description1")}
            </p>
            <p className="md:text-[12px] lg:text-[14px]">
              {t("OurService.description2")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
