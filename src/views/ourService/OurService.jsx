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
export const OurService = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Navbar>
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
              <h1 data-aos="fade-up" className=" text-center font-black pb-5 pt-5 text-4xl md:text-6xl text-white lg:text-6xl">{t("OurService.title.title")}</h1>
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
      {/* <div>
        <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#002133] md:h-[400px] md:before:h-[400px] md:before:bg-[#002133] xl:h-full xl:before:h-full">
          <img
            src={bgOverlay}
            className="absolute hidden h-screen w-full xl:block xl:h-full xl:object-cover"
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div className="mt-5 grid h-full place-items-center pb-10 sm:grid-cols-2 md:py-0 md:pb-10 xl:grid-cols-12 xl:items-center xl:gap-x-[120px] xl:py-5">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="xl:col-span-8"
              >
                <h1 className="mb-3 text-[34px] font-bold text-[#F97316] md:mt-10 lg:text-[50px]">
                  {t("OurService.title.title")}
                </h1>
                <p className="text-[15px]">{t("OurService.title.desc")}</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="mt-5 hidden h-[300px] w-[300px] items-center gap-y-5 rounded-full border-4 border-white sm:mt-5 sm:block sm:h-[250px] sm:w-[250px] md:h-[250px] md:w-[250px] xl:grid-cols-5"
              >
                <img
                  src={serviceImg}
                  alt=""
                  className="h-full w-full rounded-full object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mb-5 flex flex-col items-center sm:mb-10 md:mb-20"
          >
            <h1 className="border-b-[4px] border-orange-400 px-2 text-[24px] font-extrabold sm:text-[34px] md:text-[50px]">
              {t("OurService.title.title")}
            </h1>
          </div>
          <Services />
          <hr className="mb-5 mt-10 border sm:mb-10 md:mb-20" />
          <ExampleService />
        </div>
      </div> */}
    </Navbar >
  );
};
