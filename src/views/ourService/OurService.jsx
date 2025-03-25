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
          {/* <Services /> */}
          <Services />
          <hr className="mb-5 mt-10 border sm:mb-10 md:mb-20" />
          <ExampleService />
        </div>
      </div>
    </Navbar>
  );
};
