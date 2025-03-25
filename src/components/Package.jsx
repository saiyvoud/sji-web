import React from 'react'
import { useTranslation } from "react-i18next";
import { useGetPAckages } from '../hooks/Package.hook';
import CardSkeleton from './CardSkeleton';
import Swal from 'sweetalert2';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from "react-router-dom";
const Package = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { data, error, isLoading } = useGetPAckages("page=1&limit=5");
    const { AuthDetail } = useAuthStore();
    const packages = data?.data?.data;
    // console.log(packages)
    const handleRegisterPackage = (id) => {
        if (AuthDetail?.data?.token) {
            navigate("/register/package/"+id);
        } else {
            Swal.fire({
                title: `ສະໝັກແພັກເກດ`,
                text: `ທ່ານຕ້ອງເຂົ້າສູ່ລະບົບກ່ອນ ຈຶ່ງສາມາດສະໝັກໄດ້`,
                icon: "warning",
                showCancelButton: true,
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: "ເຂົ້າສູ່ລະບົບ",
                cancelButtonText: "ພາຍຫຼັງ",
                denyButtonText: "ລົງທະບຽນ",
                denyButtonColor: "orange"
            }).then(result => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
                if (result.isDenied) {
                    navigate("/register");
                }
            });
        }

    }
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex justify-center"
            >
                <h2 className="pb-5 pt-5 text-[24px] font-extrabold text-[#1F2937] sm:text-[34px]">
                    {t("home.membershipPackages")}
                </h2>
            </div>

            {isLoading &&
                <div className=' grid grid-cols-1  lg:grid-cols-3 lg:gap-16'>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            }
            <div className="grid grid-cols-1 place-items-center gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-x-1">
                {
                    !isLoading &&
                    packages.map((item, index) => {
                        return (
                            <div
                                onClick={() => handleRegisterPackage(item.id)}
                                key={index}
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1200"
                                className="group flex h-[400px] w-[300px] cursor-pointer flex-col rounded-lg border border-[#CBD5E1] px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:h-[380px] sm:w-[300px] md:w-[225px] lg:w-[290px] hover:border-orange-400 hover:bg-[#FFEDD5] ease-in-out duration-300"
                            >
                                <h2 className="my-4 text-center text-[24px] font-bold text-[#FB923C]">
                                    {item.name.toUpperCase()}
                                </h2>
                                <p className="mb-5 w-full text-[18px]">
                                    {/* {t("home.freePackageDesc")} */}
                                    {item.description}
                                </p>
                                <ul className="list-inside list-disc text-[18px]">
                                    <li>duration: {item.duration}{" "}{item.durationType}</li>
                                    <li>duration: {item.duration}{" "}{item.durationType}</li>
                                    <li>duration: {item.duration}{" "}{item.durationType}</li>
                                </ul>
                                <div className=' pt-5'>
                                    <p> Price: <span className=' text-[25px] font-bold text-orange-600'>{item.price.toLocaleString()}{" "}{"₭"}</span></p>
                                </div>
                                <div className="mb-5 flex h-full w-full items-end">
                                    <div
                                        className="h-[40px] text-center w-full rounded-md border border-orange-400 py-1 text-[20px] font-bold text-orange-400 group-hover:bg-orange-400 group-hover:text-white duration-300"
                                    >
                                        {t("home.tryNow")}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Package