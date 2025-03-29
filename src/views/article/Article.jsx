import { useState } from "react";
import { Navbar } from "../../components/Navbar";

import bgOverlay from "../../assets/images/bg.png";
import bgOverlay2 from "../../assets/images/bg3.png"
import { Link } from "react-router-dom/dist";
import { useGetArticle } from "../../hooks/News.hook";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import Empty from "../../components/Empty";
import Skeleton from "../../components/Skeleton";
import { useTranslation } from "react-i18next";
import { convertIsoToNormal } from "../../helper/dateTime";
import { Helmet } from "react-helmet-async";
export const Article = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 12;

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
        <meta name="keywords" content="Article, ການບໍລິການ, SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:title" content="Article- SJI Investment" />
        <meta property="og:description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
        <meta property="og:image" content="https://sji.homefind.la/assets/sji-logo-white-9gw7qHl4.png" />
        {/* <meta property="og:url" content="https://sji.homefind.la" /> */}
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
                  data?.data?.data.map((item, index) => (
                    <Link
                      to={`${item.id}`}
                      key={index}
                      className="group w-full relative p-4 bg-white rounded-lg shadow-sm hover:shadow-lg "
                    >
                      <div className="w-full overflow-hidden">
                        <img alt="" src={item?.cover} loading="lazy" className=" object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                      </div>
                      <p className=" text-sm lg:text-lg font-medium mt-2 h-[100px] lg:[75px]">{item.title}</p>
                      <p className=" text-sm italic text-gray-500 text-right">{item?.type}{","}{convertIsoToNormal(item.updatedAt)}</p>
                      <span className="z-50 absolute left-1/2 -translate-x-1/2 bottom-0 bg-orange-500 text-white px-3 rounded-lg text-lg hidden group-hover:bottom-[40%] group-hover:inline-block">ອ່ານຕໍ່</span>
                      <div className="w-full absolute transition-all duration-300 ease-in-out left-0 bottom-0 h-[0%] group-hover:h-[50%] bg-orange-500 opacity-20 rounded-t-full">
                      </div>
                    </Link>
                  ))
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          </div>

          {/* <div className="container mx-auto h-full max-w-[340px] pb-5 sm:max-w-[620px] sm:pb-20 md:max-w-[700px] md:pb-10 lg:max-w-[900px] xl:max-w-6xl">

              {data?.data?.data?.length > initialDisplayCount && (
                <div className="mt-14 flex justify-center">
                  <button
                    onClick={handleLearnMore}
                    className="w-[170px] rounded-lg bg-[#FB923C] py-2 text-[20px] font-semibold text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[200px]"
                  >
                    {showAll ? "ປິດອ່ານເພີ່ມເຕີມ" : "ອ່ານເພີ່ມເຕີມ"}
                  </button>
                </div>
              )}
            </div>
          </div> */}
        </>
      )}
    </Navbar>
  );
};
