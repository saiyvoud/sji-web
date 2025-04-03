import React from 'react'
import { Navbar } from "../../../components/Navbar";
import "react-phone-input-2/lib/style.css";
import bgOverlay2 from "../../../assets/images/bg3.png";

import stopWatch from "../../../assets/icons/stopwatch.png";

import { Link, useParams } from "react-router-dom";

const PaySuccess = () => {
    const { data } = useParams();

    const jsonData = JSON.parse(decodeURIComponent(data));
    // console.log(jsonData);
    return (
        <Navbar>
            <div>
                <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049]">
                    <img
                        loading="lazy"
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
                <div className="mx-auto mb-20 mt-10 h-full w-full max-w-[340px] rounded-lg border-2 bg-white sm:max-w-[620px] p-4 ">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-[26px] font-bold text-[#F97316] text-center">
                            ລຳຖ້າການອະມຸມັດການຊຳລະເງິນຈາກແອດມິນ
                        </h1>
                        <div>
                            <p>ເລກທີ: {jsonData.id}</p>
                            <p>ຈຳນວນເງິນ: {Number(jsonData.price)}</p>
                            <p>ສະຖານະ: {jsonData.status}</p>

                        </div>
                        <div className="my-12 flex h-[230px] w-[230px] items-center justify-center rounded-full bg-gray-100">
                            <img src={stopWatch} alt="" className="w-[200px]" />
                        </div>
                        <div className="text-center font-medium text-[#F97316]">
                            <p>ການອະນຸມັດການຊຳລະເງິນໂດຍຈະໃຊ້ເວລາໂດຍປະມານ 3-5 ມື້</p>
                            <p>ຕ້ອງການການຊ່ວຍເຫຼືອຕິດຕໍ່ 20 96596959</p>
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
        </Navbar>
    )
}

export default PaySuccess