import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../../components/Navbar";

// image
import bgOverlay from "../../assets/images/bg.png";
import serviceImg from "../../assets/images/trade3.jpg";
import { Services } from "./components/Services";
import { ExampleService } from "./components/ExampleService";
import { useTranslation } from "react-i18next";
import bg_header from "../../assets/backgound/bg1.svg"
import bg_header_mobile from "../../assets/backgound/bg1-smartphone.svg"
import icon1 from "../../assets/icons/service_icon1.svg"
import icon2 from "../../assets/icons/service_icon2.svg"
import icon3 from "../../assets/icons/service_icon3.svg"
import bg_2 from "../../assets/backgound/fore-ground1.svg"
import icon_ui from "../../assets/icons/ui-tablet.svg"
import SJI_logo from "../../assets/logo/sji-white.svg"
import contact_card from "../../assets/backgound/contact_card.svg"
import { Helmet } from "react-helmet-async";
export const OurService = () => {
  const { t } = useTranslation();


  return (
    <>
      <Navbar>
        <Helmet>
          <title>Service -SJI Investment</title>
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
          <meta name="keywords" content="service, ການບໍລິການ, SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
          <meta property="og:title" content="SJI Investment - ສອນເຈົ້າລົງທຶນ" />
          <meta property="og:description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
          <meta property="og:image" content="https://sji.homefind.la/assets/sji-logo-white-9gw7qHl4.png" />
          <meta property="og:url" content="https://sji.homefind.la" />
        </Helmet>
        <div>
          <div className="w-full bg-[#003049]">
            <div className="w-full relative">
              <img alt="" src={bg_header} className=" w-full hidden lg:block" />
              <img alt="" src={bg_header_mobile} className=" w-full block lg:hidden" />
              <div className="w-full absolute top-20 lg:top-28 left-1/2 -translate-x-1/2">
                <div className=" flex justify-center">
                  <img alt="" src={SJI_logo} data-aos="fade-up" className=" w-[100px] md:w-[200px] lg:w-[200px]" />
                </div>
                <h1 data-aos="fade-up" className=" w-full mt-5 md:mt-10 lg:mt-10 text-white text-2xl md:text-4xl lg:text-6xl text-center">The Big Data For You Win</h1>
              </div>
            </div>
            <div>
              <div className="container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
                <h1 data-aos="fade-up" className=" text-center font-black pb-5 pt-5 text-2xl md:text-4xl text-white lg:text-4xl">{t("OurService.title.title")}</h1>
                <div data-aos="fade-up" className=" mt-5 grid grid-cols-3 gap-3">
                  <div className=" bg-white rounded-lg px-1 py-2">
                    <div className=" mb-3 flex items-center justify-center">
                      <img alt="" src={icon1} className="w-10 lg:w-20"></img>
                    </div>
                    <p className=" text-sm font-bold text-center lg:text-2xl  text-[#003049]">ໃຫ້ຂໍ້ມູນຂ່າວສານ <br /> ການລົງທຶນ</p>
                    <p className=" text-[10px] font-bold text-center lg:text-xl  text-[#003049]">Provider investment <br />news information</p>
                  </div>
                  <div className=" bg-white rounded-lg px-1 py-2">
                    <div className=" mb-3 flex items-center justify-center">
                      <img alt="" src={icon2} className="w-10 lg:w-20"></img>
                    </div>
                    <p className=" text-sm font-bold text-center lg:text-2xl  text-[#003049]">ໃຫ້ຂໍ້ມູນຂ່າວສານ <br /> ການລົງທຶນ</p>
                    <p className=" text-[10px] font-bold text-center lg:text-xl  text-[#003049]">Provider investment <br />news information</p>
                  </div>
                  <div className=" bg-white rounded-lg px-1 py-2">
                    <div className=" mb-3 flex items-center justify-center">
                      <img alt="" src={icon3} className="w-10 lg:w-20"></img>
                    </div>
                    <p className=" text-sm font-bold text-center lg:text-2xl  text-[#003049]">ໃຫ້ຂໍ້ມູນຂ່າວສານ <br /> ການລົງທຶນ</p>
                    <p className=" text-[10px] font-bold text-center lg:text-xl  text-[#003049]">Provider investment <br />news information</p>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <img alt="" src={bg_2} className="w-full object-cover"></img>
                <div className=" w-full absolute top-20 flex flex-col items-center justify-center">
                  <img alt="" data-aos="fade-up" src={icon_ui} className="w-full lg:w-[60%]"></img>
                  <img alt="" data-aos="fade-up" src={contact_card} className=" hidden lg:block mt-40 w-full lg:w-[60%]"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Navbar >
    </>
  );
};
