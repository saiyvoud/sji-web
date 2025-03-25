import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import bgOverlay from "../../../assets/images/bg.png";
import bgOverlay2 from "../../../assets/images/bg3.png";
import qrBCEL from "../../../assets/qrBcel.png";
import stopWatch from "../../../assets/icons/stopwatch.png";

import { Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { AiOutlineFileImage } from "react-icons/ai";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";

export const Membership = () => {
  const [image, setImage] = useState(null);
  const [imagePay, setImagePay] = useState(null);
  const [fileName, setFileName] = useState("ກະລຸນາເລືອກຮູບພາບ");
  const [phone, setPhone] = useState("");

  const [formNo, setFormNo] = useState(1);

  const nextForm = () => {
    setFormNo(formNo + 1);
  };
  const prevForm = () => {
    setFormNo(formNo - 1);
  };

  return (
    <Navbar>
      {formNo == 1 && (
        <div className="bg-[#003049]">
          <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#002133] sm:before:h-screen sm:before:bg-[#003049] md:h-full md:before:h-full">
            <img
              src={bgOverlay}
              className="absolute hidden h-full w-full md:block"
            />
            <div className="container relative z-50 mx-auto flex h-full max-w-[340px] flex-col items-center justify-center py-20 pt-[70px] text-white sm:max-w-[620px] md:pb-5 lg:max-w-[900px] lg:pb-20">
              <div className="hidden sm:mb-10 sm:mt-10 sm:hidden sm:w-full sm:items-start md:flex">
                <Link
                  to={"/news"}
                  className="flex cursor-pointer items-center justify-start hover:text-[#F97316]"
                >
                  <ImArrowLeft className="mr-5 text-[24px]" />
                  <h1 className="text-[32px] font-bold sm:text-[50px]">
                    ກັບຄືນ
                  </h1>
                </Link>
              </div>
              <h1 className="mb-10 mt-5 text-[40px] font-extrabold text-[#F97316]">
                ສະໝັກສະມາຊິກ
              </h1>
              <div className="h-full w-full rounded-lg bg-white p-4 sm:p-16">
                <form className="h-full w-full rounded-lg">
                  <div className="sm:item-center w-full rounded-lg sm:flex sm:h-[90%] sm:flex-col">
                    <div className="w-full">
                      <h4 className="mb-4 text-[18px] font-semibold text-gray-700 sm:text-[22px]">
                        ເພີ່ມຮູບພາບ
                      </h4>
                      <div className="mb-5 flex w-full items-center justify-center rounded-lg border-2 border-gray-400 p-2 sm:block sm:w-full sm:p-6">
                        <div className="flex h-[350px] w-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 sm:h-[400px] sm:w-full">
                          <input
                            type="file"
                            accept="image/*"
                            className="input-file"
                            hidden
                            onChange={({ target: { files } }) => {
                              files[0] && setFileName(files[0].name);
                              if (files) {
                                setImage(URL.createObjectURL(files[0]));
                              }
                            }}
                          />
                          {image ? (
                            <div className="relative z-10 h-full w-full">
                              <img
                                src={image}
                                className="h-full w-full object-cover"
                                alt={fileName}
                              />
                              <MdDelete
                                onClick={() => setImage(null)}
                                className="absolute right-2 top-2 z-50 cursor-pointer text-[20px] text-red-500"
                              />
                            </div>
                          ) : (
                            <div
                              onClick={() =>
                                document.querySelector(".input-file").click()
                              }
                              className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
                            >
                              <MdOutlineFileUpload className="text-[100px] text-gray-700" />
                              <p className="text-[24px] font-semibold text-blue-500">
                                ເລືອກຮູບພາບ
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="mb-2 mt-2 block text-[18px] text-gray-700 sm:text-[20px]">
                        ຊື່ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mb-10 w-full rounded border border-gray-300 bg-gray-100 px-5 py-2 text-[18px] text-gray-700 outline-none sm:py-3"
                        placeholder="ປ້ອນຊື່..."
                      />
                      <label className="mb-2 block text-[18px] text-gray-700 sm:text-[20px]">
                        ນາມສະກຸນ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mb-10 w-full rounded border border-gray-300 bg-gray-100 px-5 py-2 text-[18px] text-gray-700 outline-none sm:py-3"
                        placeholder="ປ້ອນນາມສະກຸນ..."
                      />
                      <label className="mb-2 block text-[18px] text-gray-700 sm:text-[20px]">
                        ເບີໂທ <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        country={"la"}
                        inputStyle={{
                          background: "#F3F4F6", // Black background
                          width: "100%",
                          padding: "26px 0 26px 45px",
                          color: "#000", // Light text color
                          borderRadius: "4px",
                        }}
                        buttonStyle={{
                          backgroundColor: "#F3F4F6",
                          borderRadius: "5px",
                          color: "#000000",
                        }}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                      <label className="mb-2 mt-10 block text-[18px] text-gray-700 sm:text-[20px]">
                        ອີເມວ{" "}
                      </label>
                      <input
                        type="email"
                        className="mb-10 w-full rounded border border-gray-300 bg-gray-100 px-5 py-2 text-[18px] text-gray-700 outline-none sm:py-3"
                        placeholder="ປ້ອນອີເມວ..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={nextForm}
                      className="rounded-md bg-[#0C4A6E] px-8 py-2"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {formNo == 2 && (
        <div>
          <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049]">
            <img
              src={bgOverlay2}
              className="absolute h-[350px] w-full bg-cover bg-bottom"
            />
            <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px]">
              <div className="relative h-[280px]">
                <div
                  onClick={prevForm}
                  className="absolute bottom-4 left-2 flex cursor-pointer items-center hover:text-[#F97316]"
                >
                  <ImArrowLeft className="mr-5 text-[24px]" />
                  <h1 className="text-[32px] font-bold sm:text-[50px]">
                    ກັບຄືນ
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mb-20 mt-20 h-full w-full max-w-[340px] rounded-lg border-2 bg-white sm:max-w-[620px] lg:max-w-[900px]">
            <h1 className="w-full rounded-t-lg bg-[#7AA3B2] py-4 text-center text-[30px] font-extrabold text-white">
              ຊ່ອງທາງການຊຳລະເງິນ
            </h1>
            <div className="rounded-lg bg-white p-16">
              <form className="h-full w-full rounded-lg">
                <div className="flex h-[90%] w-full items-center justify-between rounded-lg sm:flex-col md:flex-row">
                  <div className="flex w-full items-center justify-center">
                    <img src={qrBCEL} alt="qr code" className="w-[300px]" />
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <h4 className="mb-4 text-center text-[18px] font-semibold text-gray-700">
                      ເພີ່ມຮູບພາບ
                    </h4>
                    <div className="w-[350px] rounded-lg border-2 border-gray-400 p-6 sm:w-[400px]">
                      <div className="flex h-[400px] w-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 sm:w-[350px]">
                        <input
                          type="file"
                          accept="image/*"
                          className="input-file"
                          hidden
                          onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name);
                            if (files) {
                              setImagePay(URL.createObjectURL(files[0]));
                            }
                          }}
                        />
                        {image ? (
                          <div className="relative z-10 flex h-full w-full items-center justify-center">
                            <img
                              src={imagePay}
                              className="h-full w-full object-cover"
                              alt={fileName}
                            />
                            <MdDelete
                              onClick={() => setImagePay(null)}
                              className="absolute right-2 top-2 z-50 cursor-pointer text-[20px] text-red-500"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              document.querySelector(".input-file").click()
                            }
                            className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
                          >
                            <MdOutlineFileUpload className="text-[100px] text-gray-700" />
                            <p className="text-[24px] font-semibold text-blue-500">
                              ເລືອກຮູບພາບ
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-14 flex justify-center">
                  <button
                    onClick={nextForm}
                    className="w-[200px] rounded-md bg-[#F97316] py-2.5 text-[20px] font-semibold text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {formNo == 3 && (
        <div>
          <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049]">
            <img
              src={bgOverlay2}
              className="absolute h-[350px] w-full bg-cover bg-bottom"
            />
            <div className="container relative z-50 mx-auto h-full pt-[70px] text-white sm:max-w-sm md:max-w-xl xl:max-w-4xl 2xl:max-w-7xl">
              <div className="relative h-[280px]">
                {/* <div onClick={prevForm} className='absolute bottom-4 left-2 flex cursor-pointer items-center hover:text-[#F97316]'>
                                    <ImArrowLeft className=' text-[24px] mr-5' />
                                    <h1 className='text-[32px]  sm:text-[50px]  font-bold'>ກັບຄືນ</h1>
                                </div> */}
              </div>
            </div>
          </div>
          <div className="mx-auto mb-20 mt-20 h-full w-full max-w-[340px] rounded-lg border-2 bg-white sm:max-w-[620px]">
            <div className="flex flex-col items-center py-10">
              <h1 className="text-[26px] font-bold text-[#F97316]">
                ລຳຖ້າການອະມຸມັດການຊຳລະເງິນຈາກແອດມິນ
              </h1>
              <div className="my-12 flex h-[230px] w-[230px] items-center justify-center rounded-full bg-gray-100">
                <img src={stopWatch} alt="" className="w-[200px]" />
              </div>
              <div className="text-center font-medium text-[#F97316]">
                <p>ການອະນຸມັດການຊຳລະເງິນໂດຍຈະໃຊ້ເວລາໂດຍປະມານ 3-5 ມື້</p>
                <p>ຕ້ອງການການຊ່ວຍເຫຼືອຕິດຕໍ່ 20 55847928</p>
              </div>
              <Link
                to={"/"}
                className="mt-10 w-[250px] rounded-lg bg-[#F97316] py-2 text-center font-bold text-white"
              >
                ກັບໜ້າຫຼັກ
              </Link>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};
