import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
// images
import bgOverlay from "../../assets/images/bg.png";
import personImg from "../../assets/images/emp.jpg";
import aiyA from "../../assets/images/aiyA_.jpg";
import aiyB from "../../assets/images/aiyB_.png";
import visionImg from "../../assets/images/vision.png";
import visionImg2 from "../../assets/images/m2.webp";
import visionImg3 from "../../assets/images/m1.webp";

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
export const AboutUs = () => {


  return (
    <Navbar>
      <>
        <Helmet>
          <title>About Us - SJI Investment</title>
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
          <meta name="keywords" content={`ການບໍລິການ, SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน`} />
          <meta name="description" content="The Big Data for Your Win, and Smart Insights for Your Success ການລົງທຶນທີ່ປະສົບຄວາມສຳເລັດຂອງທ່ານມາຈາກຂໍ້ມູນ ຂະໜາດໃຫຍ່ຂອງພວກເຮົາ" />
          <meta property="og:title" content="About Us - SJI Investment" />
        </Helmet>
        <div className="w-full bg-white pt-24 pb-8 mb-20">
          {/* header */}
          <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
            <div className=" flex justify-center items-center">
              <span
                data-aos="fade-up"
                className=" text-center px-4 border-b-4 border-orange-600 text-[40px] font-semibold text-[#374151]">
                ຜຸ້ຮ່ວມກໍ່ຕັ້ງ
              </span>
            </div>
          </div>

          {/* persion section */}
          <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
            <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div data-aos="fade-up" className="w-full bg-[#FB923C] p-1 flex justify-between rounded-lg gap-3">
                <div className="w-full bg-white rounded-lg overflow-hidden">
                  <img
                    loading="lazy"
                    src={aiyA}
                    alt=""
                    className="w-[500px]"
                  />
                </div>
                <div className=" w-full text-white flex justify-center items-center">
                  <div>
                    <p className=" text-sm font-bold text-center">Manyloud</p>
                    <p className=" text-sm font-bold text-center">SOMNANONG</p>
                    <Link
                      to="https://www.facebook.com/manyloud.somnanong"
                      className=" flex justify-center"
                    ><CiFacebook size={30} />
                    </Link>
                  </div>

                </div>
              </div>
              <div data-aos="fade-up" className="w-full bg-[#FB923C] p-1 flex justify-between rounded-lg gap-3">
                <div className="w-full bg-white rounded-lg overflow-hidden">
                  <img
                    loading="lazy"
                    src={aiyB}
                    alt=""
                    className="w-[1000px]"
                  />
                </div>
                <div className=" w-full text-white flex justify-center items-center">
                  <div>
                    <p className=" text-sm font-bold text-center">Saiyvoud</p>
                    <p className=" text-sm font-bold text-center">SOMNANONG</p>
                    <Link
                      to="http://facebook.com/sayvuad.somnanong"
                      className=" flex justify-center"
                    ><CiFacebook size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
            <div className=" mt-20">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div>
                  <h1
                    data-aos="fade-left"
                    className="mt-5 md:mt-10 lg:mt-10 text-3xl font-medium lg:text-4xl text-center text-[#F97316]">ຈຸດປະສົງຂອງພວກເຮົາ</h1>
                  <p
                    data-aos="fade-left"
                    className="mt-5 text-lg font-semibold text-[#374151] text-justify">
                    ພວກເຮົາສ້າງ SJI Investment ຂື້ນມາເພື່ອຈຸດປະສົງໃນການໃຫ້ຄົນລາວເຂົ້າເຖິງຂໍ້ມຸນທາງການເງິນທີ່ວວອງໄວ ແລະ ສະດວກ ເພາະພວກເຮົາເຂົ້າໃຈດີວ່າຂໍ້ມູນມີຄວາມສຳຄັນຫລາຍໃນການລງທຶນ.

                  </p>
                </div>
                <div>
                  <img
                  loading="lazy"
                    data-aos="fade-left"
                    src={visionImg}
                    className=" h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className=" hidden md:block lg:block">
                  <img
                  loading="lazy"
                    data-aos="fade-right"
                    src={visionImg2}
                    className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                    alt=""
                  />
                </div>
                <div>
                  <h1
                    data-aos="fade-right"
                    className="mt-5 md:mt-10 lg:mt-10 text-3xl font-medium lg:text-4xl text-center text-[#F97316]">ວິໃສທັດຂອງພວກເຮົາ</h1>
                  <p
                    data-aos="fade-right"
                    className="mt-5 text-lg font-semibold text-[#374151] text-justify">
                    ພວກເຮົາມີວິໄສທັດໃນການພັດທະນາລະບົບ Technology ທີ່ຕອບໂຈດໃນເລືອງການໃຫ້ຂໍ້ມູນທາງການເງິນ ແລະ ການລົງທຶນລວມໄປເຖິງການວາງແຜນການເງິນຂອງທ່າ ເພື່ອອານະຄົດທີ່ສົດໃສ

                  </p>
                </div>
                <div className=" block lg:hidden md:hidden">
                  <img
                  loading="lazy"
                    data-aos="fade-right"
                    src={visionImg2}
                    className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                    alt=""
                  />
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div>
                  <h1
                    data-aos="fade-left"
                    className="mt-5 md:mt-10 lg:mt-10 text-3xl font-medium lg:text-4xl text-center text-[#F97316]">ເປົ້າໝາຍຂອງພວກເຮົາ</h1>
                  <p
                    data-aos="fade-left"
                    className="mt-5 text-lg font-semibold text-[#374151] text-justify">
                    ນຳພາຄົນລາວໃຫ້ເຂົ້າໃຈໃນເລືອງການເງິນ ແລະ ທັນຂ່າວເສດຖະກິດເພື່ອໃຫ້ທຸກທ່ານສາມາດປັບຕົວເອງທັນທຸກເຫດການຈະເກີດຂື້ນໃນອານະຄົດ

                  </p>
                </div>
                <div>
                  <img
                  loading="lazy"
                    data-aos="fade-left"
                    src={visionImg3}
                    className=" h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    </Navbar>
  );
};
