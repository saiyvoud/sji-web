import React from "react";
import { Navbar } from "../../../components/Navbar";

// image
import bgOverlay2 from "../../../assets/images/bg3.png";
import goldImg from "../../../assets/images/news/gold.jpg";

// icons
import { ImArrowLeft } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetOneArticle } from "../../../hooks/News.hook";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import Skeleton from "../../../components/Skeleton";

export const NewsGold = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetOneArticle(id);

  if (error) {
    Swal.fire({
      title: "ເກີດຂໍ້ຜິດພາດ",
      text: error,
      timer: 2000,
      showConfirmButton: false,
    });
  }

  const { t } = useTranslation();
  return (
    <Navbar>
      {isLoading ? (
        // <Loading fullScreen={true} size={50} />
        <Skeleton type="card" />
      ) : (
        <div>
          <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#002133] sm:before:h-[350px]">
            <img
              src={bgOverlay2}
              className="absolute hidden h-[350px] w-full bg-cover bg-bottom sm:block"
            />
            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
              <div className="relative h-[100px] sm:h-[280px]">
                <div className="absolute top-[50%] flex w-full -translate-y-1/2 items-center justify-center font-semibold sm:hidden">
                  <h1 className="cursor-pointer items-center text-[40px] text-[#F97316]">
                    News Gold
                  </h1>
                </div>
                <Link
                  to={"/news"}
                  className="absolute bottom-4 left-2 hidden cursor-pointer items-center hover:text-[#F97316] sm:flex md:left-4"
                >
                  <ImArrowLeft className="mr-5 text-[30px]" />
                  <h1 className="text-[40px] font-bold sm:text-[50px]">
                    {t("news.back")}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-20 mt-5 h-full w-full max-w-[340px] bg-white p-2 sm:mt-0 sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <h1 className="pb-2 pt-5 text-[20px] font-black text-black sm:pb-10 sm:pt-7 sm:text-[30px] md:pb-4 lg:text-[35px]">
              {data?.data?.title} <br /> House Decoration
            </h1>
            <div className="grid-cols-1 place-items-center gap-6 sm:grid md:grid-cols-2">
              <div className="mb-10 rounded-xl shadow-[6px_6px_13px_4px_#00000024] md:h-[230px] md:w-[330px] lg:h-[220px] lg:w-[350px]">
                <img
                  src={data?.data?.cover}
                  alt=""
                  className="h-[200px] w-full rounded-xl object-cover md:h-[230px] lg:h-[220px]"
                />
              </div>
              <div>
                <p className="mb-5">{data?.data?.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};
