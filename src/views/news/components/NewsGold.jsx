import React from "react";
import { Navbar } from "../../../components/Navbar";


// icons
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetOneArticle } from "../../../hooks/News.hook";
import Swal from "sweetalert2";
import Skeleton from "../../../components/Skeleton";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
export const NewsGold = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          <Helmet>
            <title>{data?.data?.title} - SJI Investment</title>
            <meta name="robots" content="index, follow" />
            <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
            <meta name="keywords" content="sji news" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={data?.data?.content} />
            <meta property="og:description" content={data?.data?.content} />
            <meta property="og:image" content={data?.data?.cover} />
            <meta property="og:title" content={`${data?.data?.title} - SJI Investment`} />
            <meta property="og:url" content={"http://sjiinvestment.la/news/gold/" + id} />
          </Helmet>
          {/* header */}
          <div className=" pt-20 lg:pt-24 px-2 lg:px-10 ">
            <h1 className=" flex justify-start items-center gap-2 ">
              <FaLongArrowAltRight />
              <span className=" cursor-pointer underline text-sm" onClick={() => navigate(-1)}>{t("navbar.news")}</span>
              <FaLongArrowAltRight />
              <span className=" italic text-sm">{data?.data?.title}</span>
            </h1>
          </div>
          {/* content */}
          <div className="mt-5">
            <div className=" container px-2 lg:px-0 w-full lg:w-[980px] md:[900px] mx-auto">
              <h2 className=" mt-10 text-2xl font-bold text-start">{data?.data?.title}</h2>
              <div className=" mt-5">
                <img
                  loading="lazy"
                  src={data?.data?.cover}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
              <div className=" mt-5 mb-20">
                <p className=" text-center text-lg font-medium">{data?.data?.title}</p>
                <div className=' mt-2' dangerouslySetInnerHTML={{ __html: data?.data?.content }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};
