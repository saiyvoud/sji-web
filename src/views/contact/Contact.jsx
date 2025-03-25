import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../../components/Navbar";

import bgOverlay from "../../assets/images/bg.png";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <Navbar>
      <div className="h-full w-full">
        <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#003049] sm:before:h-screen md:h-[400px] md:before:h-[400px] xl:before:h-full xl:before:bg-[#002133]">
          <img
            alt=""
            src={bgOverlay}
            className="absolute hidden w-full object-cover sm:block sm:h-screen md:h-[400px]"
          />
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="container relative z-50 mx-auto flex h-full max-w-[340px] items-center justify-center pt-[70px] text-white sm:max-w-[620px] sm:pt-[80px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl"
          >
            <h1 className="mt-5 py-3 text-[34px] font-bold sm:mt-0 sm:pb-0 sm:pt-0 md:text-[70px]">
              ຕິດຕໍ່ເຮົາ
            </h1>
          </div>
        </div>

        <div className="container mx-auto mb-32 mt-10 h-full max-w-[340px] bg-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="relative flex">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="hidden md:block md:w-[240px] xl:w-full"
            >
              <h1 className="text-[32px] font-bold text-orange-500 md:text-[24px] lg:text-[32px]">
                ຂັ້ນຕອນຕໍ່ໄປຈະເປັນ <br className="xl:hidden" />
                ແນວໃດ?
              </h1>
              <p className="text-[14px] font-medium text-[#8D8D8D]">
                ທ່ານເປັນບາດກ້າວຫນຶ່ງທີ່ໃກ້ຊິດເພື່ອສ້າງ <br />
                ຜະລິດຕະພັນທີ່ສົມບູນແບບຂອງທ່ານ
              </p>
              <ul className="relative mt-10 flex flex-col gap-y-20 after:absolute after:left-[6px] after:top-7 after:h-[85%] after:w-[3px] after:bg-orange-500">
                <li className="flex items-center">
                  <div className="mr-3 h-[14px] w-[14px] rounded-full bg-orange-500" />
                  <p className="w-[300px] border-b-2 border-orange-500 py-3 text-[18px] font-semibold">
                    1.ກະກຽມຂໍ້ສະເໜີທີ່ດີ
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-[14px] w-[14px] rounded-full bg-orange-500" />
                  <p className="w-[300px] border-b-2 border-orange-500 py-3 text-[18px] font-semibold">
                    2.ພວກເຮົາສົນທະນາຮ່ວມກັນ
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-[14px] w-[14px] rounded-full bg-orange-500" />
                  <p className="w-[300px] border-b-2 border-orange-500 py-3 text-[18px] font-semibold">
                    3.ເລີ່ມຕົ້ນສ້າງກັນເລີຍ
                  </p>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="h-fit w-full rounded-lg border-2 border-[#B3B3B3] bg-white sm:w-[600px] md:absolute md:-top-24 md:right-0 md:w-[450px] lg:w-[550px] xl:top-[-100px] xl:h-[600px] xl:w-[600px]"
            >
              <form className="flex flex-col items-center px-8 py-5 sm:gap-y-4 sm:px-4 sm:py-10 md:gap-y-[30px] md:px-4 md:py-14 lg:py-16 xl:gap-y-[70px] xl:pt-14">
                <h1 className="py-4 text-center text-[24px] font-semibold md:hidden md:py-7">
                  ປ້ອນຂໍ້ມູນຂອງທ່ານ
                </h1>
                <div className="gap-x-10 sm:grid sm:grid-cols-2 xl:w-full xl:gap-y-5 xl:px-5">
                  <div className="mt-3">
                    <label htmlFor="" className="mb-1 block">
                      ຊື່
                    </label>
                    <input
                      type="text"
                      className="w-[290px] rounded border border-[#B3B3B3] bg-gray-100 px-2 py-1 outline-none sm:w-[240px] md:w-[180px] lg:w-[220px] xl:w-full"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="" className="mb-1 block">
                      ນາມສະກຸນ
                    </label>
                    <input
                      type="text"
                      className="w-[290px] rounded border border-[#B3B3B3] bg-gray-100 px-2 py-1 outline-none sm:w-[240px] md:w-[180px] lg:w-[220px] xl:w-full"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="" className="mb-1 block">
                      ອີເມວ
                    </label>
                    <input
                      type="email"
                      className="w-[290px] rounded border border-[#B3B3B3] bg-gray-100 px-2 py-1 outline-none placeholder:text-[12px] sm:w-[240px] md:w-[180px] lg:w-[220px] xl:w-full"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="" className="mb-1 block">
                      ເບີໂທ
                    </label>
                    <input
                      type="text"
                      className="w-[290px] rounded border border-[#B3B3B3] bg-gray-100 px-2 py-1 outline-none placeholder:text-[12px] sm:w-[240px] md:w-[180px] lg:w-[220px] xl:w-full"
                      placeholder="+856 20 9900xxxx"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full sm:mt-0 sm:w-[520px] md:w-full md:px-4">
                  <label htmlFor="" className="block">
                    Message
                  </label>
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <textarea
                    rows="5"
                    className="w-full resize-none rounded border border-[#B3B3B3] bg-gray-100"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-10 w-full rounded bg-[#003049] py-2 text-center text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
