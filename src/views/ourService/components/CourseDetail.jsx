import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";
import { Checkbox } from "@material-tailwind/react";

import bgOverlay from "../../../assets/images/bg2.png";
import serviceImg from "../../../assets/images/bg-service.jpg";
import manImg from "../../../assets/man.png";
import { dataCourse } from "./dataCourse";
import { data } from "autoprefixer";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { FormBuyCourse } from "./FormBuyCourse";

export const CourseDetail = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const id = useParams();
  const cid = id.id;
  const itemPerpage = 6;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemPerpage, dataCourse.length + itemPerpage),
    );
    console.log(currentIndex);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemPerpage, 0));
  };
  return (
    <Navbar>
      <div>
        <div className="relative z-0 h-[200px] xl:h-[240px] w-full before:absolute before:-z-[1] before:h-[200px] before:w-full before:bg-[#003049] xl:before:h-[240px] xl:before:bg-[#002133]">
          <img
            src={bgOverlay}
            className="absolute h-[200px] opacity-45 object-cover w-full xl:h-[240px]"
          />
          <div className="container relative z-50 mx-auto flex h-full max-w-[340px] items-center justify-center pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
            <Link
              to={"/ourService/course"}
              className="absolute bottom-5 left-2 hidden cursor-pointer items-center hover:text-[#F97316]"
            >
              <ImArrowLeft className="mr-5 text-[30px]" />
              <h1 className="text-[40px] font-bold sm:text-[50px]">ກັບຄືນ</h1>
            </Link>
            <h1 className="text-[40px] font-semibold sm:text-[50px]">
              ລາຍລະອຽດຄອສ
            </h1>
          </div>
        </div>
        <div className="container mx-auto h-full max-w-[340px] bg-white sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
          <div className="py-10 sm:py-7">
            {dataCourse.map(
              (item) =>
                item.id == id.id && (
                  <div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-5" >
                      <div className="flex-[5] text-gray-800 sm:flex-[3] lg:flex-[5]">
                        <h1 className="mb-5 text-[28px] font-bold text-[#F97316]">
                          {item.title}
                        </h1>
                        <div className="relative rounded-lg">
                          <img
                            src="https://imageio.forbes.com/specials-images/imageserve/6026d84441501b8d5dd87e54/Dashboard-graph-of-forex-statistics--business-and-financial-analytics--profit-and/960x0.jpg?format=jpg&width=960"
                            alt=""
                            className="w-full rounded-lg"
                          />
                          <FaRegPlayCircle
                            size={100}
                            className="absolute left-[50%] top-[50%] z-50 -translate-x-1/2 -translate-y-1/2 text-white"
                          />
                        </div>
                        <div className="mt-10">
                          <h4 className="text-[24px] font-semibold">
                            ລາຍລະອຽດເນື້ອຫາ
                          </h4>
                          <p className="text-justify text-[18px] sm:text-[16px]">
                            &emsp;
                            ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລ
                            ຈາກຕະຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                            ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                            ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                            ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານການເງິນທີ່ເກັ່ງຂື້ນ
                          </p>

                          <h5 className="mt-14 font-semibold">
                            ສິ່ງທີ່ທ່ານຈະໄດ້ຮັບຈາກຄອສນີ້:
                          </h5>
                          <div className="mt-2 flex flex-col gap-y-5">
                            <div className="flex items-center font-medium">
                              <IoMdCheckmark className="mr-2 text-[24px]" />
                              ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                            </div>
                            <div className="flex items-center font-medium">
                              <IoMdCheckmark className="mr-2 text-[24px]" />
                              ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                            </div>
                            <div className="flex items-center font-medium">
                              <IoMdCheckmark className="mr-2 text-[24px]" />
                              ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                            </div>
                            <div className="flex items-center font-medium">
                              <IoMdCheckmark className="mr-2 text-[24px]" />
                              ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                            </div>
                            <div className="flex items-center font-medium">
                              <IoMdCheckmark className="mr-2 text-[24px]" />
                              ມີຄວາມເຂົ້າໃຈກ່ຽວກັບການລົງທຶນຮຸ້ນໃນລາວ
                            </div>
                          </div>
                          <div className="mt-10">
                            <h5 className="mb-4 text-[18px] font-semibold">
                              ຜູ້ສອນ:
                            </h5>
                            <div className="flex items-center gap-x-5">
                              <img src={manImg} alt="" className="w-[60px]" />
                              <div>
                                <p className="font-semibold">
                                  ທ່ານ ສຸລິນທາລາ ພິລາວົງ
                                </p>
                                <p className="font-medium">
                                  ຕຳແໜ່ງ: ຮອງຜູ້ກໍ່ຕັ້ງ ບໍລິສັດ M
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex-[2] xl:flex-[2] flex-[2] leading-[2.6] text-gray-800">
                        <p className="mb-5 font-medium">ເນື້ອຫາທັງໝົດ 1/25</p>
                        <div className="rounded-lg border-2 p-2 lg:p-2 xl:p-4  leading-[1.8]">
                          <p className="text-[17px] font-bold">ແນະນຳ</p>
                          <div className="text-[16px] font-semibold">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center lg:gap-x-2 xl:gap-x-5 md:gap-x-3 gap-5">
                                <Checkbox defaultChecked
                                  style={{ width: "20px", height: '20px' }}
                                />
                                <label htmlFor="" className=" lg:text-[18px] text-[16px]">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                              </div>
                              <span className="">2:30</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center lg:gap-x-2 xl:gap-x-5 md:gap-x-3 gap-5">
                                <Checkbox
                                  style={{ width: "20px", height: '20px' }}
                                />
                                <label htmlFor="" className=" lg:text-[18px] text-[16px]">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                              </div>
                              <span>2:30</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center lg:gap-x-2 xl:gap-x-5 md:gap-x-3 gap-5">
                                <Checkbox
                                  style={{ width: "20px", height: '20px' }}
                                />
                                <label htmlFor="" className=" lg:text-[18px] text-[16px]">ແນະນຳກ່ຽວກັບມືໃໝ່</label>
                              </div>
                              <span>2:30</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 rounded-lg border-2 p-2 lg:p-2 xl:p-4 leading-[2.5]">
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-[20px] font-semibold text-red-500 sm:text-[24px]">
                                {item.price} KIP
                              </h4>
                              <span className="text-[14px] font-medium text-green-500">
                                ອີກ 2 ມື້
                              </span>
                            </div>
                            <h3 className="text-[24px] font-medium leading-[1] sm:text-[24px]">
                              ຈາກ{" "}
                              <span className='relative after:absolute after:left-[50%] after:top-[50%] after:h-[2px] after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black after:content-[""]'>
                                300.000 KIP
                              </span>
                            </h3>
                            {/* FB923C */}
                            <div className="mt-10  flex flex-col">
                              <FormBuyCourse />
                              <button className="mt-4 rounded-lg border border-[#FB923C] text-[18px] font-semibold text-[#FB923C]">
                                ເພີ່ມລົງໃນກະຕ່າ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-14">
                      <h4 className="text-[20px] font-semibold text-[#F97316]">
                        ຄອສໃກ້ຄຽງ
                      </h4>
                      <div className="overflow-x-auto">
                        <ul className="flex w-max gap-x-10 py-4 pl-3 pr-4 sm:p-4 md:gap-x-4">
                          {dataCourse.map((item, index) => (
                            <li
                              key={index}
                              className="relative h-[400px] w-[320px] rounded-lg border-2 shadow-md md:h-[380px] md:w-[280px] lg:w-[320px] xl:h-[420px] xl:w-[320px]"
                            >
                              <img
                                src={item.picture}
                                alt=""
                                className="h-[250px] w-[320px] rounded-lg object-cover md:h-[220px] lg:h-[240px] xl:h-[280px] xl:w-full"
                              />
                              <div className="leading-[1.6]">
                                <div className="flex justify-between p-3">
                                  <h4 className="text-[18px] font-semibold leading-[1.2]">
                                    {item.title}
                                  </h4>
                                  <p className="flex items-center gap-x-2">
                                    4.5 <FaRegStar className="text-[#F97316]" />
                                  </p>
                                </div>
                                <p className="px-3 text-[12px] font-medium text-gray-400">
                                  ຜູ້ຊົມ 21ຄົນ
                                </p>
                                <div className="absolute bottom-5 flex w-full items-center justify-between px-3">
                                  <p className="text-[18px] font-medium text-[#F97316]">
                                    {item.price} ₭
                                  </p>
                                  <button
                                    onClick={() => {
                                      navigate(`/ourService/course/${item.id}`);
                                      // settimeOute 1s
                                      setTimeout(() => {
                                        window.location.reload(false);
                                        window.scrollTo(0, 0);
                                      }, 1000);
                                    }}
                                    className="w-[100px] rounded bg-[#F97316] py-1 text-white"
                                  >
                                    ສະໝັກ
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </Navbar>
  );
};
