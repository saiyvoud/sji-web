import { useState } from "react";
import "./analysiss.css"
import { Navbar } from "../../components/Navbar";

// data countires
import { dataCountries } from "./dataCountires";

import bgOverlay from "../../assets/images/bg.png";
import bgOverlay2 from "../../assets/images/bg3.png";

import usNewyork from "../../assets/images/countries/1_newyork.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetcountry } from "../../hooks/Country.hook";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import Empty from "../../components/Empty";
import Skeleton from "../../components/Skeleton";
export const Analysiss = () => {
  const { t } = useTranslation();
  const [textSearch, setTextSearch] = useState("");
  let finBy = "";
  finBy += "page=1";
  finBy += "&limit=100";
  if (textSearch) {
    finBy += "&search=news";
  }
  const { data, error, isLoading } = useGetcountry(finBy);

  console.log(data);

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
        <>
          <div className="w-full bg-[#002133] pt-24 pb-8">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <div className=" flex justify-around items-center">
                <div className="" data-aos="fade-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-[#F97316]">{t("analysis.title")}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white py-10">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.data?.data.map((item, index) => {
                  return (
                    <Link
                      to={`country/${item.id}`}
                      key={index}
                      className="w-full relative shadow-lg rounded-lg h-[200px] overflow-hidden hover:scale-105 ease-in-out duration-700"
                    >
                      <img
                        src={item.background}
                        alt=""
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center leading-loose">
                        <img
                          src={item.flag}
                          alt=""
                          className="h-[80px] w-[80px] rounded-full object-cover"
                        />
                        <h4 className="text-[15px] font-semibold sm:text-[20px] text-white">
                          {item.name}
                        </h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] sm:before:h-[350px]">
            <img
              src={bgOverlay2}
              className="absolute hidden h-[350px] w-full bg-cover bg-bottom sm:block"
            />
            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
              <div className="relative flex h-[150px] items-center justify-center sm:h-[280px]">
                <h1 className="bottom-4 left-2 mb-3 flex text-[40px] font-bold text-[#F97316] sm:absolute sm:text-[50px]">
                  {t("analysis.title")}
                </h1>
              </div>
              <div className="mb-10 h-full w-full bg-white">
                <h1 className="p-4 text-center text-[35px] font-extrabold text-black sm:pb-10 sm:pt-7">
                  {t("analysis.foreignAnalysis")}
                </h1>

              </div>
            </div>
          </div>
        </>

      )}
    </Navbar>
  );
};
