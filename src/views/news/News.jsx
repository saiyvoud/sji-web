import React from "react";
import { Navbar } from "../../components/Navbar";
import bgOverlay from "../../assets/images/bg.png";
import SliderNews from "./components/SliderNews";

import newsImg1 from "../../assets/images/news/gold.jpg";
import newsImg2 from "../../assets/images/news/rate.jpg";
import newsImg3 from "../../assets/images/news/calendar.jpg";
import newsImg4 from "../../assets/images/news/analysis.jpg";
import newsImg5 from "../../assets/images/news/money.jpg";
import newsImg6 from "../../assets/images/news/yuan.jpg";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useGetArticle } from "../../hooks/News.hook";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import Empty from "../../components/Empty";
import Skeleton from "../../components/Skeleton";

export const News = () => {
  const { t } = useTranslation();
  const [textSearch, setTextSearch] = useState("");
  let finBy = "";
  finBy += "page=1";
  finBy += "&limit=10";
  finBy += "&type=news";
  if (textSearch) {
    finBy += "&search=news";
  }
  const { data, error, isLoading } = useGetArticle(finBy);

  if (error) {
    Swal.fire({
      title: "ເກີດຂໍ້ຜິດພາດ",
      text: "ເກີດເປັນຫາໃນການດຶງຂໍ້ມູນ",
      time: 2000,
      showConfirmButton: false,
    });
  }

  return (
    <Navbar>
      {isLoading ? (
        // <Loading fullScreen={true} size={50} />
        <Skeleton type="card" count={6} />
      ) : (
        <div>
          <div className="relative z-0 h-full w-full bg-[#002133] before:absolute before:-z-[1] before:w-full sm:h-[650px] sm:before:h-[650px] sm:before:bg-[#003049] xl:h-screen xl:before:h-screen">
            <img
              src={bgOverlay}
              className="absolute hidden h-screen w-full object-cover sm:block sm:h-[650px] xl:h-screen"
            />
            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
              <h1 className="top-14 mt-10 flex items-start text-[30px] font-bold text-[#F97316] sm:relative sm:mt-0 sm:text-[35px] md:text-[40px]">
                {t("news.title")}
              </h1>
              <div className="relative flex items-center">
                <SliderNews />
              </div>
            </div>
          </div>
          <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <h1 className="mb-3 mt-10 flex items-start text-[28px] font-bold text-[#1F2937] sm:mb-7 sm:text-[30px] lg:text-[35px]">
              Lastest News
            </h1>

            <div className="mb-10 grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 sm:place-items-center sm:gap-y-5 md:grid-cols-3 md:gap-y-4 xl:grid-cols-4">
              {data?.data?.data?.length > 0 ? (
                data?.data?.data?.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/gold/${item.id}`}
                    className="w-[320px] cursor-pointer rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[400px] sm:w-[290px] md:h-[360px] md:w-[220px] lg:h-[420px] lg:w-[280px] xl:h-[330px] xl:w-[270px] xl:p-3"
                  >
                    <img
                      src={item.cover}
                      alt=""
                      className="h-[150px] w-[420px]"
                    />
                    <h4 className="my-2 line-clamp-2 text-ellipsis text-[20px] font-semibold leading-[1.1] md:text-[20px] lg:text-[20px]">
                      {item.title}
                    </h4>
                    <p className="line-clamp-2 text-ellipsis text-[14px]">
                      {item.content}
                    </p>
                  </Link>
                ))
              ) : (
                <Empty />
              )}
            </div>
            <div className="mb-10 mt-16 flex w-full justify-center">
              <button className="rounded-md bg-orange-400 px-6 py-2 text-[18px] font-semibold text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:px-10 sm:py-[10px] sm:text-[20px]">
                {t("news.learnMore")}
              </button>
            </div>
          </div>
        </div>
      )}
      {Outlet}
    </Navbar>
  );
};
