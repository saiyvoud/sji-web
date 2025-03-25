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
        <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] md:before:h-[350px]">
          <img
            src={bgOverlay2}
            className="absolute hidden h-[350px] w-full bg-cover bg-bottom md:block"
            alt=""
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div className="relative flex h-[150px] w-full items-center sm:justify-start md:h-[300px] md:items-end">
              <div className="left-2 top-8 mb-3 flex w-full items-center justify-center gap-x-4 font-bold text-[#F97316] sm:absolute sm:bottom-4 sm:text-[50px] md:justify-start xl:bottom-10 xl:items-end">
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
            <div className="mb-10 h-full w-full bg-white sm:mb-20 md:mb-14">
              <h1 className="pb-4 text-center text-[35px] font-extrabold text-black sm:pb-10 sm:pt-7">
                {t("analysis.selectCompany")}
              </h1>
              <div className="grid grid-cols-2 place-items-center gap-y-3 sm:grid-cols-3 sm:gap-y-5 md:grid-cols-4 md:gap-y-5 lg:gap-y-10 xl:gap-y-7">
                {CompanyData?.data?.data?.map((item, index) => {
                  if (item.countryId === id) {
                    return (
                      <Link
                        to={`${item.id}`}
                        key={index}
                        className="flex w-[150px] h-[320px] flex-col items-center gap-y-[2px] rounded-lg p-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[180px] sm:px-5 sm:py-3 md:w-[160px] md:px-3 lg:w-[210px] lg:px-5 xl:w-[250px]"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className="h-[200px] w-[200px] object-cover sm:h-[100px] sm:w-[100px] md:h-[70px] md:w-[60px] lg:h-[100px] lg:w-[100px]"
                          />
                          <h2 className="mt-2 text-center text-[17px] font-semibold text-[#F97316] md:text-[16px] lg:text-[20px]">
                            {item.name}
                          </h2>
                        </div>
                        <p className="mt-2 line-clamp-2 text-[14px] font-normal text-black sm:text-[14px]">
                          {item.about}
                        </p>
                      </Link>
                    )
                  }
                })
                }
              </div>
            </div>
          </div>
          <div className="mb-5 flex items-center justify-center sm:mb-20 sm:mt-10 md:mt-3 lg:mt-10">
            <button
              type="button"
              onClick={handleBackPage}
              className="rounded-md bg-deep-orange-500 px-14 py-1.5 text-[18px] text-white"
            >
              {t("analysis.backToCompanies")}
            </button>
          </div>
        </div>
      )}
    </Navbar>
  );
};
