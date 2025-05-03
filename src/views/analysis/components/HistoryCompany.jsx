import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const HistoryCompany = ({ company }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:mb-10 sm:mt-0 sm:p-3">
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <div className="w-full">
            <img
              src={company?.image}
              alt=""
              loading="lazy"
              className="w-full rounded-lg "
            />
            <h4 className="mt-2 text-center text-sm font-semibold text-[#1F2937]">
              {t("analysis.picture")} {company?.name}
            </h4>
          </div>
          <div className="w-full col-span-2">
            <p className=" text-center font-bold text-[#1F2937]">{company?.name}</p>
            <div className=' mt-2 text-black text-justify' dangerouslySetInnerHTML={{ __html: company?.about }} />
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
