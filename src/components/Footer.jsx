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

// images
import midiLogo from "../assets/images/midi-logo.jpg";
import investingLogo from "../assets/images/investing-logo.jpg";

export default function Footer() {
  return (
    <footer className="relative z-[999] w-full bg-[#003049] py-5 lg:h-[370px] lg:pt-5">
      <div className="container mx-auto h-full max-w-[340px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
        <div className="flex sm:items-center justify-between gap-x-4 px-2">
          <div className="flex flex-col items-center gap-x-4 sm:flex-row lg:mb-0">
            <img
              src={midiLogo}
              alt=""
              className="h-10 w-10 rounded-full object-cover lg:h-11 lg:w-11"
            />
            <h5 className="mt-2 lg:mt-0 text-[16px] font-semibold uppercase text-white lg:text-[20px]">
              Midi Technology
            </h5>
          </div>
          <div className="flex flex-col items-center gap-x-4 sm:flex-row">
            <img
              src={investingLogo}
              alt=""
              className="h-10 w-10 rounded-full border-[2px] border-[#F97316] object-cover lg:h-11 lg:w-11"
            />
            <h5 className="mt-2 lg:mt-0 logoName text-[16px] font-semibold text-white lg:text-[20px]">
              ສອນເຈົ້າລົງທຶນ
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" ">
            <h2 className="mt-3 text-[20px] font-extrabold uppercase tracking-[2px] text-white md:mb-1 lg:text-[24px]">
              INFORMATION
            </h2>
            <p className="mb-4 text-[14px] text-white lg:mb-5 lg:text-[16px]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper
              mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center gap-x-4">
              <div className="rounded-md bg-white p-1">
                <FaFacebookF className="text-[20px] sm:text-[18px]" />
              </div>
              <div className="rounded-md bg-white p-1">
                <FaTwitter className="text-[20px] sm:text-[18px]" />
              </div>
              <div className="rounded-md bg-white p-1">
                <FaInstagram className="text-[20px] sm:text-[18px]" />
              </div>
              <div className="rounded-md bg-white p-1">
                <FaLinkedinIn className="text-[20px] sm:text-[18px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-5">
            <div className="flex flex-col items-start">
              <h2 className="mb-1 mt-3 text-[20px] font-extrabold uppercase tracking-[2px] text-white lg:text-[24px]">
                NAVIGATION
              </h2>
              <ul className="flex flex-col gap-y-2">
                <li className="flex items-center gap-x-1 text-white">
                  <FaAngleRight className="text-[#757575]" />
                  <p className="xs:text-[12px] font-sans text-[14px]">
                    Homepage
                  </p>
                </li>
                <li className="flex items-center gap-x-1 text-white">
                  <FaAngleRight className="text-[#757575]" />
                  <p className="xs:text-[12px] font-sans text-[14px]">
                    About Us
                  </p>
                </li>
                <li className="flex items-center gap-x-1 text-white">
                  <FaAngleRight className="text-[#757575]" />
                  <p className="xs:text-[12px] font-sans text-[14px]">
                    Services
                  </p>
                </li>
                <li className="flex items-center gap-x-1 text-white">
                  <FaAngleRight className="text-[#757575]" />
                  <p className="xs:text-[12px] font-sans text-[14px]">
                    Project
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-1 mt-3 text-[20px] font-extrabold uppercase tracking-[2px] text-white lg:text-[24px]">
                CONTACT US
              </h2>
              <ul className="flex flex-col gap-y-2">
                <li className="flex items-center gap-x-2">
                  <FaLocationDot className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white lg:text-[16px]">
                    Lumbung Hidup East Java
                  </p>
                </li>
                <li className="flex items-center gap-x-2">
                  <IoMdMail className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px] lg:text-[16px]">
                    Hello@Homco.com
                  </p>
                </li>
                <li className="flex items-center gap-x-2">
                  <FaPhoneAlt className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px] lg:text-[16px]">
                    +856 20 99281020
                  </p>
                </li>
                <li className="flex items-center gap-x-2">
                  <FaPhoneAlt className="text-[18px] text-[#757575] md:text-[16px]" />
                  <p className="text-[14px] text-white md:text-[12px]">
                    +856 20 99281020
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
