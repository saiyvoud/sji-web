import { useState } from "react";
import { Navbar } from "../../components/Navbar";

import { Link } from "react-router-dom/dist";
import { useGetArticle } from "../../hooks/News.hook";

import Swal from "sweetalert2";
import Empty from "../../components/Empty";
import Skeleton from "../../components/Skeleton";
import { useTranslation } from "react-i18next";
import { convertIsoToNormal } from "../../helper/dateTime";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { useAuthStore } from "../../store/authStore";
import { jwtDecode } from "jwt-decode";

export const Article = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 12;
  const { AuthDetail } = useAuthStore();
  const [textSearch, setTextSearch] = useState("");
  let finBy = "";
  finBy += "page=1";
  finBy += "&limit=10";
  finBy += "&type=article";
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

  const handleLearnMore = () => {
    setShowAll(!showAll);
  };
  // console.log(data);
  return (
    <Navbar>
      <Helmet>
        <title>Article -SJI Investment</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
        <meta name="keywords" content="Article SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:title" content="Article- SJI Investment" />
        <meta property="og:description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:url" content="https://www.sjiinvestment.la/article" />
      </Helmet>
      {isLoading ? (
        // <Loading fullScreen={true} size={50} />
        <Skeleton type="card" count={6} />
      ) : (
        <>
          {/* Header */}
          <div className="w-full bg-[#002133] pt-24 pb-8">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <div className=" flex justify-around items-center">
                <div className="" data-aos="fade-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-[#F97316]">{t("navbar.article")}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className=" w-full bg-gray-100 py-5">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <div className=" grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-5">
                {data?.data?.data?.length > 0 ? (
                  data?.data?.data.map((item, index) => {

                    // const obj = { displayName: AuthDetail?.data?.displayName, firstname: AuthDetail?.data?.firstName, type: "article", id: item.id };
                    // Convert to JSON string
                    // const jsonString = JSON.stringify(obj);
                    // Encode to Base64
                    // const base64String = btoa(jsonString);
                    // Encode to URL safe
                    // const urlSafeString = encodeURIComponent(base64String);
                    // console.log(obj);
                    // console.log(urlSafeString)
                    return (
                      <Link
                        to={`https://blog.sjiinvestment.la/article/${item.id}`}
                        // to={`http://localhost:3000/seo/${urlSafeString}`}
                        key={index}
                        className="group w-full relative p-4 bg-white rounded-lg shadow-sm hover:shadow-lg "
                      >
                        <div className="w-full overflow-hidden">
                          <img alt="" src={item?.cover} loading="lazy" className=" object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <p className=" text-sm lg:text-lg font-medium mt-2 h-[100px] lg:[75px]">{item.title}</p>
                        <div className=" flex justify-between items-center text-gray-500">
                          <p className=" flex justify-start items-center gap-1"><FaEye /> {" " + item?.views}</p>
                          <p className=" text-sm italic ">{item?.type}{","}{convertIsoToNormal(item.updatedAt)}</p>
                        </div>
                        <span className="z-50 absolute left-1/2 -translate-x-1/2 bottom-0 bg-orange-500 text-white px-3 rounded-lg text-lg hidden group-hover:bottom-[40%] group-hover:inline-block">ອ່ານຕໍ່</span>
                        <div className="w-full absolute transition-all duration-300 ease-in-out left-0 bottom-0 h-[0%] group-hover:h-[50%] bg-orange-500 opacity-20 rounded-t-full">
                        </div>
                      </Link>
                    )
                  })
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Navbar>
  );
};
