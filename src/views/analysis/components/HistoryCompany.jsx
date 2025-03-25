import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const HistoryCompany = ({ company }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:mb-10 sm:mt-0 sm:p-3">
      <div className="">
        {/* <div className="mb-3 sm:mb-0 sm:hidden">
          <img src={company?.image} alt="" className="rounded-lg" />
          <h4 className="mt-2 text-center text-[14px] font-semibold text-[#1F2937] sm:mb-3 sm:text-[18px]">
            {i18n.language == "la" && t("analysis.picture")} {company?.name}{" "}
            {i18n.language == "en" && t("analysis.picture")}
          </h4>
        </div> */}
        <div className="mb-3 justify-between sm:flex sm:gap-x-2 md:mb-0">
          <div className="w-full">
            <img
              src={company?.image}
              alt=""
              className="rounded-lg sm:h-[230px] xl:w-full"
            />
            <h4 className="mt-2 text-center text-sm font-semibold text-[#1F2937]">
              {i18n.language == "la" && t("analysis.picture")} {company?.name}{" "}
              {i18n.language == "en" && t("analysis.picture")}
            </h4>
          </div>
          <div className="lg:p-4 w-full text-[18px] sm:text-[15px]">
            <p className=" text-center font-bold text-[#1F2937]">{company?.name}</p>
            <p className=" text-[#1F2937] text-justify">
              {company?.about}
            </p>
            <p className=" text-[#1F2937] italic">
              {company?.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HistoryCompany.propTypes = {
  company: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};
