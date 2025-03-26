import React from "react";
import { Navbar } from "./Navbar";

// icons
import {
  FaLinkedinIn,
  FaArrowLeft,
  FaArrowDown,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight, FaAngleDown, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SJI_logo from "../assets/logo/sji-bg-blue.svg";

// images
import midiLogo from "../assets/images/midi-logo.jpg";
import investingLogo from "../assets/images/investing-logo.jpg";

export default function Footer() {
  return (
    <>
      <footer className="relative z-[999] w-full bg-[#003049] py-5 lg:pt-5">
        <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="flex sm:items-center justify-around gap-x-4 px-2">
            <div className="flex flex-col items-center gap-x-4 sm:flex-row lg:mb-0">
              <img
                src={midiLogo}
                alt=""
                className="h-20 w-20 rounded-full object-cover lg:h-20 lg:w-20"
              />
              <h5 className="mt-2 lg:mt-0 text-[16px] font-semibold uppercase text-white lg:text-[20px]">
                Midi Technology
              </h5>
            </div>
            <div className="flex flex-col items-center gap-x-4 sm:flex-row">
              <img
                src={SJI_logo}
                alt=""
                className="h-20 w-20 rounded-full border-[2px] border-[#F97316] object-cover lg:h-20 lg:w-20"
              />
              <h5 className="mt-2 lg:mt-0 logoName text-[16px] font-semibold text-white lg:text-[20px]">
              SJI Investment
              </h5>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:group-last-of-type:">
            <div className=" ">
              <h2 className="mt-3 text-[20px] text-center font-extrabold uppercase tracking-[2px] text-white md:mb-1 lg:text-[24px]">
                INFORMATION
              </h2>
              <p className=" w-full text-center mb-4 text-[14px] text-white lg:mb-5 lg:text-[16px]">
                MiDi Technology Company Limited <br />
                Specializing in applications, software, website development and IT training in Laos
              </p>

            </div>
            <div className="w-full pb-5">
              <h2 className="text-center mb-1 mt-3 text-[20px] font-extrabold uppercase tracking-[2px] text-white lg:text-[24px]">
                CONTACT US
              </h2>
              <ul className="flex flex-col gap-y-2 items-center">
                <li className="flex items-center gap-x-2">
                  <FaLocationDot className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white lg:text-[16px]">
                    ບ້ານ ທົ່ງສ້າງນາງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ
                  </p>
                </li>
                <li className="flex items-center gap-x-2">
                  <IoMdMail className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px] lg:text-[16px]">
                    a.manyloud@gmail.com
                  </p>
                </li>
                <li className="flex items-center gap-x-2">
                  <FaPhoneAlt className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px] lg:text-[16px]">
                    020 96 794 376
                  </p>
                </li>
                {/* <li className="flex items-center gap-x-2">
                  <FaPhoneAlt className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px]">
                    +856 20 99281020
                  </p>
                </li> */}
              </ul>
            </div>

          </div>
        </div>
      </footer>
      <p className=" bg-blue-gray-900 text-white text-center py-5 md:py-4 lg:py-4"> @copyright, MiDi Technology 2025</p>
    </>
  );
}
