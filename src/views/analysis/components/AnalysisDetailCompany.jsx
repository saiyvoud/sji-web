import React, { useState } from "react";

// data countires
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";


import { AnalysisFinancial } from "./AnalysisFinancial";
import { HistoryCompany } from "./HistoryCompany";
import { useTranslation } from "react-i18next";
import GraphChart from "./GraphChart";
import { useGetOneCompany } from "../../../hooks/Company.hook";
import { Error } from "../../../helper/sweetAlert";
import Skeleton from "../../../components/Skeleton";
import SerachCompany from "./SerachCompany";
import { Helmet } from "react-helmet-async";
import ShowAnalysis2 from "./ShowAnalysis2";
export const AnalysisDetailCompany = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showAnalysis, setShowAnalysis] = useState(1);
  const { company } = useParams();

  const { data, error, isLoading } = useGetOneCompany(company);


  // const cid = localStorage.getItem('cid')

  if (error) {
    Error({
      title: "ເກີດຂໍ້ຜິດພາດ",
      text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
    });
  }

  const handleBackPage = () => {
    navigate(-1);
  };
  console.log(data?.data);
  return (
    <>
      <Helmet>
        <title> {`${data?.data?.company?.name} - SJI Investment`}</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
        <meta name="keywords" content={`Analysis, SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน`} />
        <meta property="og:title" content={`${data?.data?.company?.name} - SJI Investment`} />
        <meta property="og:description" content={data?.data?.company?.name} />
        <meta property="og:image" content={data?.data?.company?.image} />
        <meta property="og:url" content={"https://www.sjiinvestment.la/analysis/country/" + company} />
      </Helmet>
      <Navbar>
        {isLoading ? (
          <Skeleton type="card" />
        ) : (
          <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049] sm:before:h-[300px] md:before:h-[320px]">
            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
              <div className="flex h-full flex-col items-center justify-center pt-0 sm:relative sm:h-[250px] md:mt-0 md:h-[280px] md:justify-center">
                <div className="mb-5 mt-3 flex w-full items-center justify-center gap-4 font-bold text-[#F97316] sm:absolute sm:left-[50%] sm:top-5 sm:mt-5 sm:-translate-x-1/2 sm:flex-row sm:justify-normal sm:text-[50px] md:top-14 md:mb-5 md:mt-0 lg:top-10">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white">
                    <img
                      loading="lazy"
                      src={data?.data?.company?.image}
                      alt=""
                      className="h-[50px] w-[50px] rounded-full object-cover"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold text-[#fff] sm:text-[24px] md:text-[28px]">
                    {i18n.language === "la" && t("analysis.companyName")}{" "}
                    {data?.data?.company?.name}
                  </h1>
                </div>
                <div className="mb-5 flex flex-col items-center gap-x-3 sm:mt-20 sm:w-full md:mb-0 md:flex-col lg:mb-5 xl:mb-0 xl:flex-col xl:justify-end">
                  <SerachCompany />
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:w-full sm:items-center sm:justify-between md:mt-0 xl:flex xl:gap-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAnalysis(1)}
                      className={`lg:w-[180px] lg:py-2 xl:w-full ${i18n.language === "en" ? "sm:px-4.5 sm:text-[14px] md:h-[40px] md:px-3.5 md:py-[2px] md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === 1 ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                    >
                      {t("analysis.companyHistory")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAnalysis(2)}
                      className={`lg:w-[200px] lg:py-2 xl:w-full ${i18n.language === "en" ? "sm:px-4.5 sm:text-[14px] md:h-[40px] md:px-3.5 md:py-[2px] md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === 2 ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                    >
                      {t("analysis.financialStatements")}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setShowAnalysis(3)
                      }
                      className={`lg:w-[280px] lg:py-2 xl:w-full ${i18n.language === "en" ? "sm:px-4.5 sm:text-[14px] md:h-[40px] md:px-3.5 md:py-[2px] md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-2 py-2 text-[16px] font-normal md:py-0 md:text-[16px] lg:col-span-1 ${showAnalysis === 3 ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                    >
                      {t("analysis.financialRatiosAndDividends")}
                    </button>
                    <button
                      type="button"
                      disabled
                      onClick={() => setShowAnalysis(4)}
                      className={`lg:w-[200px] lg:py-2 xl:w-full ${i18n.language === "en" ? "sm:px-4.5 sm:text-[14px] md:h-[40px] md:px-3.5 md:py-[2px] md:text-[12px] md:font-normal md:leading-[1.2] lg:py-2" : ""} rounded-md px-5 py-2 text-[16px] font-normal md:py-0 md:text-[16px] ${showAnalysis === 4 ? "bg-[#f97316]" : "bg-white text-[#F97316]"}`}
                    >
                      {t("analysis.viewGraph")}
                    </button>
                  </div>
                </div>
              </div>
              {showAnalysis === 1 && (
                <div className="my-10 sm:my-0">
                  <HistoryCompany company={data?.data?.company} />
                </div>
              )}

              {showAnalysis === 2 && (

                <ShowAnalysis2 data={data?.data?.financialFieldValue}/>
              )}
              {showAnalysis === 3 && (
                <div className="mb-20 h-full w-full bg-white">
                  <div className="mt-10 sm:mt-16 sm:px-5 md:mt-10 md:px-2">
                    <AnalysisFinancial data={data?.data?.financialRatios} />
                  </div>
                </div>
              )}

              {/* candlestick */}
              {showAnalysis === 4 && (
                <div className="my-10 sm:my-0">
                  <GraphChart />
                </div>
              )}
            </div>
            <div className="my-10 flex items-center justify-center">
              <button
                type="button"
                onClick={handleBackPage}
                className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px]"
              >
                ກັບຄືນໜ້າບໍລິສັດ
              </button>
            </div>
          </div>
        )}
      </Navbar>
    </>
  );
};
