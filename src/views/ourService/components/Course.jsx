import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";

import bgOverlay from "../../../assets/images/bg.png";
import serviceImg from "../../../assets/images/bg-service.jpg";
import { dataCourse } from "./dataCourse";
import { data } from "autoprefixer";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { useTranslation } from "react-i18next";

export const Course = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const id = useParams();
  const itemPerpage = 6;
  const { t } = useTranslation();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemPerpage, dataCourse.length + itemPerpage),
    );
    console.log(currentIndex);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemPerpage, 0));
  };
  return (
    <Navbar>
      <div>
        <div className="relative z-0 h-[300px] w-full before:absolute before:-z-[1] before:h-[300px] before:w-full before:bg-[#002133] sm:h-[300px] sm:before:h-[300px] md:h-[400px] md:before:h-[400px] md:before:bg-[#003049] xl:h-[500px] xl:before:h-[500px]">
          <img
            src={bgOverlay}
            className="absolute hidden h-screen w-full md:block md:h-[400px] xl:h-[500px] xl:object-cover"
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
            <Link
              to={"/ourService"}
              className="absolute left-2 top-32 hidden cursor-pointer items-center hover:text-[#F97316] md:top-24 xl:flex"
            >
              <ImArrowLeft className="mr-5 text-[30px]" />
              <h1 className="text-[40px] font-bold sm:text-[50px] lg:text-[40px]">
                {t("news.back")}
              </h1>
            </Link>
            <div className="grid h-full place-items-center items-center pb-10 md:grid-cols-2 md:py-0 md:pb-10 lg:mt-8 xl:grid-cols-3 xl:py-5 2xl:grid-cols-3">
              <div className="xl:col-span-2">
                <h1 className="mb-0 mt-2 text-[28px] font-bold text-[#F97316] sm:mb-3 sm:mt-0 sm:text-[34px] md:mt-10 md:text-[34px]">
                  {t("OurService.title.title")}
                </h1>
                <p className="text-[14px] sm:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates culpa temporibus <br /> facere quam sequi <br />{" "}
                  adipisci voluptatum illo velit in quod nulla minus vitae, nam
                  rem ipsum eaque consequatur assumenda explicabo!
                </p>
              </div>
              <div className="mt-5 hidden h-[300px] w-[300px] items-center gap-y-5 rounded-full border-4 border-white sm:hidden md:block md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px]">
                <img
                  src={serviceImg}
                  alt=""
                  className="h-full w-full rounded-full object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto h-full max-w-[340px] bg-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="mt-10 rounded-lg p-4 md:border-2">
            <ul
              className={`grid h-fit grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-y-5 lg:gap-y-5 ${currentIndex < 6 || currentIndex < 10 ? "place-items-center" : ""}`}
            >
              {dataCourse
                .slice(currentIndex, currentIndex + itemPerpage)
                .map((item, index) => (
                  <li
                    key={index}
                    className="relative h-[420px] w-[320px] rounded-lg border-2 shadow-md sm:w-[290px] md:h-[330px] md:w-[220px] lg:h-[410px] lg:w-[280px] xl:w-[370px]"
                  >
                    <img
                      src={item.picture}
                      alt=""
                      className="h-[270px] w-full rounded-lg object-cover sm:h-[260px] md:h-[180px] lg:h-[250px]"
                    />
                    <div className="w-full p-3 leading-[1.6]">
                      <div className="flex justify-between">
                        <h4 className="text-[18px] font-semibold md:text-[16px] lg:text-[18px]">
                          {item.title}
                        </h4>
                        <p className="flex items-center gap-x-2">
                          4.5 <FaRegStar className="text-[#F97316]" />
                        </p>
                      </div>
                      <p className="mt-2 text-[12px] font-medium text-gray-400">
                        ຜູ້ຊົມ 21ຄົນ
                      </p>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <p className="text-[18px] font-medium text-[#F97316]">
                          {item.price} ₭
                        </p>
                        <button
                          onClick={() => navigate(`${item.id}`)}
                          className="w-[90px] rounded bg-[#F97316] py-1 text-white"
                        >
                          ສະໝັກ
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          {dataCourse.length > itemPerpage && (
            <div className="mb-20 mt-14 flex items-center justify-center gap-x-10 text-[40px]">
              <button
                onClick={handlePrev}
                disabled={currentIndex == 0}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-200"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex + itemPerpage >= dataCourse.length}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-200"
              >
                <IoIosArrowForward />
              </button>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};
