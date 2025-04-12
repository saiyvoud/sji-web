import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Navbar } from "../../components/Navbar";
import Miditech_logo from "../../assets/images/midi-logo.jpg"
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
export const Contact = () => {
  return (
    <Navbar>
      <Helmet>
        <title>Advertising - SJI Investment</title>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="MiDi Technology, ບໍລິສັດ ມີດີ ເທັກໂນໂລຊີ ຈຳກັດ" />
        <meta name="keywords" content={`ການບໍລິການ, SJI,Investment,ສອນເຈົ້າລົງທຶນ, ລົງທຶນ,สอนลงทุน, การลงทุน`} />
        <meta name="description" content="ບໍລິສັດ ມິດິ ເທັກໂນໂລຊີ ຈຳກັດ
MiDi Technology Company Limited Specializing in applications, software, website development and IT training in Laos
✅ ພັດທະນາໂປຣແກຣມ
✅ ພັດທະນາເວັບໄຊ
✅ ພັດທະນາແອັບພິເຄຊັນ
ບ້ານ ທົ່ງສ້າງນາງ ເມືອງ ຈັນທະບູລີ ນະຄອນຫຼວງວຽງຈັນ
a.manyloud@gmail.com
" />
        <meta property="og:title" content="Advertising - SJI Investment" />
      </Helmet>
      <div className="w-full bg-[#002133] pt-24 pb-8">
        <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
          <div className=" flex justify-around items-center">
            <div className="" data-aos="fade-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#F97316]">ຕິດຕໍ່ລົງໂຄສະນາ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-5 md:py-10 lg:py-20">
        <div className=" container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className=" w-full">
              <img src={Miditech_logo} loading="lazy"/>
            </div>
            <div className="lg:mt-20 md:mt-20 w-full">
              <p className=" text-lg md:text-2xl lg:text-2xl font-bold">ບໍລິສັດ ມິດິ ເທັກໂນໂລຊີ ຈຳກັດ</p>
              <p className=" text-lg md:text-2xl lg:text-2xl">MiDi Technology Company Limited
                Specializing in applications, software, website development and IT training in Laos</p>

              <ul className=" mt-3 text-lg">
                <li>✅ ພັດທະນາໂປຣແກຣມ</li>
                <li> ✅ ພັດທະນາເວັບໄຊ</li>
                <li>✅ ພັດທະນາແອັບພິເຄຊັນ</li>
              </ul>
              <div className=" mt-3 text-lg md:text-xl lg:text-xl ">
                <span className=" flex justify-start items-center gap-2"><FaLocationDot />ບ້ານ ທົ່ງສ້າງນາງ ເມືອງ ຈັນທະບູລີ ນະຄອນຫຼວງວຽງຈັນ</span>
                <span className=" flex justify-start items-center gap-2"><MdEmail />a.manyloud@gmail.com</span>
                <span className=" flex justify-start items-center gap-2"><FaPhone />+856 20 96 794 376</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </Navbar>
  );
};
