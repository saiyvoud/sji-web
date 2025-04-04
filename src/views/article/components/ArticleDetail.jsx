import React from "react";
import { Navbar } from "../../../components/Navbar";

import bgOverlay2 from "../../../assets/images/bg3.png";
import { useNavigate } from "react-router-dom/dist";
import { ImArrowLeft } from "react-icons/im";
import { useGetOneArticle } from "../../../hooks/News.hook";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Skeleton from "../../../components/Skeleton";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FacebookShareButton, WhatsappShareButton } from "react-share";


export const ArticleDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetOneArticle(id);
  const { t } = useTranslation();
  if (error) {
    Swal.fire({
      title: "ເກີດຂໍ້ຜິດພາດ",
      text: error,
      timer: 2000,
      showConfirmButton: false,
    });
  }
  console.log(data?.data?.cover)
  const navigate = useNavigate();
  const shortDescription = data?.data?.content?.substring(0, 100) + "..."; // ตัด 200 ตัวอักษรแรก
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {`${data?.data?.title} - SJI Investment`}</title>
        <link rel="canonical" href={"https://www.sjiinvestment.la/article/" + id} />
        <meta property="og:title" content={`${data?.data?.title} - SJI Investment`} />
        <meta property="og:description" content={`${data?.data?.title} - https://www.sjiinvestment.la/article/${id}`} />
        <meta property="og:image" content={data?.data?.cover} />
        <meta property="og:url" content={"https://www.sjiinvestment.la/article/" + id} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SJI Investment" />
      </Helmet>
      <Navbar>
        {isLoading ? (
          // <Loading fullScreen={true} size={50} />
          <Skeleton type="card" count={6} />
        ) : (
          <>
            <div className=" bg-[#002133] text-white pt-20 pb-5 lg:pt-24 px-2 lg:px-10 ">
              <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto ">
                <h1 className=" flex justify-start items-center gap-2 ">
                  <FaLongArrowAltRight />
                  <span className=" cursor-pointer underline text-sm" onClick={() => navigate(-1)}>{t("navbar.article")}</span>
                  <FaLongArrowAltRight />
                  <span className=" italic text-sm">{data?.data?.title}</span>
                </h1>
              </div>
            </div>

            {/* content */}
            <div className=" mb-20 bg-white">
              <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto ">
                <h1 className=" py-10 text-center font-bold text-2xl lg:text-4xl"> {data?.data?.title}</h1>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                  <div className="">
                    <img
                      loading="lazy"
                      src={data?.data?.cover}
                      alt=""
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className=" md:col-span-2 lg:col-span-2">
                    <div className=' mt-2' dangerouslySetInnerHTML={{ __html: data?.data?.content }} />
                    <FacebookShareButton url={`https://www.youtube.com/watch?v=LTWpY46ft3I`} title={"jhjhjkhjhkjk"} description={shortDescription} >ssss</FacebookShareButton>
                  </div>
                </div>
              </div>
              <div>
                <FacebookShareButton url={`https://www.sjiinvestment.la`} quote={"dfdsfdf"} size={32} round={true} >fghgfdhgh</FacebookShareButton>
              </div>
            </div>
          </>
        )}
      </Navbar>
    </>
  );
};
