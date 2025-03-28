import bgOverlay2 from "../../../assets/images/bg3.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";
import { useTranslation } from "react-i18next";
import { useGetOnecountry } from "../../../hooks/Country.hook";
import { useGetCompany } from "../../../hooks/Company.hook";
import Loading from "../../../components/Loading";
import Empty from "../../../components/Empty";
import { Error } from "../../../helper/sweetAlert";
import Skeleton from "../../../components/Skeleton";
import { FaLongArrowAltRight } from "react-icons/fa";
export const AnalysisDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetOnecountry(id);

  let finBy = "";
  finBy += "page=1";
  finBy += "&limit=10";
  const {
    data: CompanyData,
    error: CompanyError,
    isLoading: CompanyLoading,
  } = useGetCompany(finBy);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  // localStorage.setItem("cid", cid.id);

  const handleBackPage = () => {
    navigate(-1);
  };

  if (error || CompanyError) {
    Error({
      title: "ເກີດຂໍ້ຜິດພາດ",
      text: "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້",
    });
  }
  // kdk
  return (
    <Navbar>
      {isLoading || CompanyLoading ? (
        // <Loading fullScreen={true} size={50} />
        <Skeleton type="card" />
      ) : (
        <>
          <div className="w-full bg-[#002133] pt-20 lg:pt-24 pb-8">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <h1 className=" flex justify-start items-center gap-2 text-white">
                <FaLongArrowAltRight />
                <span className=" cursor-pointer underline text-sm" onClick={() => navigate(-1)}>{t("navbar.analysis")}</span>
                <FaLongArrowAltRight />
                <span className=" italic text-sm">{data?.data?.name}</span>
              </h1>
              <div className="mt-5 flex justify-center items-center" data-aos="fade-left">
                <div className="h-[60px] w-[60px] rounded-full md:w-[70px]">
                  <img
                    src={data?.data?.flag}
                    alt=""
                    className="h-[60px] w-[60px] rounded-full border-2 object-cover"
                  />
                </div>
                <h1 className="text-[30px] font-bold text-[#F97316] sm:text-[34px] md:text-[50px]">
                  {data?.data?.name}
                </h1>
              </div>
            </div>
          </div>
          <div className=" mt-5 w-full bg-white">
            <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
              <h1 className="pb-4 text-center text-[35px] font-extrabold text-black sm:pb-10 sm:pt-7">
                {t("analysis.selectCompany")}
              </h1>
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                {CompanyData?.data?.data?.map((item, index) => {
                  if (item.countryId === id) {
                    return (
                      <Link
                        to={`${item.id}`}
                        key={index}
                        className=" w-full bg-white rounded-lg shadow-lg border-2 p-2"
                      >
                        <div className="">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full object-cover"
                          />
                          <h2 className="mt-2 text-center text-[17px] font-semibold text-[#F97316] md:text-[16px] lg:text-[20px]">
                            {item.name}
                          </h2>
                        </div>
                        {/* <p className="mt-2 line-clamp-2 text-[14px] font-normal text-black sm:text-[14px]">
                          {item.about}
                        </p> */}
                      </Link>
                    )
                  }
                })}
              </div>
              <div className="mt-10 *:mb-5 flex items-center justify-center md:mt-3 lg:mt-10">
                <button
                  type="button"
                  onClick={handleBackPage}
                  className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px] text-white"
                >
                  {t("analysis.backToCompanies")}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Navbar>
  );
};
