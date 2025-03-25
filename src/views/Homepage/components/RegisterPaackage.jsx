import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useParams } from "react-router-dom";
import bgOverlay2 from "../../../assets/images/bg3.png";
import { ImArrowLeft } from "react-icons/im";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";
import { useGetPackage } from "../../../hooks/Package.hook";
import Empty from "../../../components/Empty";
import { QRCodeSVG } from 'qrcode.react';
import CardSkeleton from "../../../components/CardSkeleton";
import { Warning } from "../../../helper/sweetAlert";
import { createOrderPackage } from "../../../api/Package";
import Loading from "../../../components/Loading"
const RegisterPaackage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, error, isLoading } = useGetPackage(id);
    const item = data?.data
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target?.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target?.result);
            reader.readAsDataURL(file);
        }
    };

    if (!isLoading) {
        if (error || !data) {
            return (
                <>
                    <h1 className=" text-center text-4xl mt-20">404 NOT FOUND</h1>
                    <Empty />
                </>
            )
        }
    }
    const removeImage = () => setImage(null);

    const Submit = async (event) => {
        event.preventDefault();
        if (!image) {
            Warning("ບໍ່ສຳເລັດ", "ບໍ່ມີ slip ໂອນເງິນ");
            return;
        } else {
            try {
                setLoading(true);
                const x = await createOrderPackage({ packageId: id, slip: image })
                const jsonString = encodeURIComponent(JSON.stringify(x.data));
                navigate(`/package/success/${jsonString}`);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                throw error;
            }
        }
    }
    return (
        <Navbar>
            {loading && <Loading />}
            <div>
                <div className="relative z-0 w-full before:absolute before:-z-[1] before:h-[350px] before:w-full before:bg-[#003049]">
                    <img
                        src={bgOverlay2}
                        className="absolute h-[350px] w-full bg-cover bg-bottom"
                    />
                    <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] lg:max-w-[900px]">
                        <div className="relative h-[280px]">
                            <div
                                className="absolute bottom-4 left-2 flex cursor-pointer items-center hover:text-[#F97316]"
                                onClick={() => navigate(-1)}
                            >
                                <ImArrowLeft className="mr-5 text-[24px]" />
                                <h1 className="text-[32px] font-bold sm:text-[50px]">
                                    ກັບຄືນ
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto my-10 h-full w-full max-w-[340px] bg-white sm:max-w-[620px] lg:max-w-[900px]">
                    {!isLoading ?
                        < div
                            className="w-full p-2 rounded-lg shadow-[0px_2px_2px_rgba(255,215,0,0.7)] border border-orange-400 bg-[#FFEDD5]"
                        >
                            <h2 className="my-4 text-center text-[24px] font-bold text-[#FB923C]">
                                {item?.name.toUpperCase()}
                            </h2>
                            <p className="mb-5 w-full text-[18px] text-center">
                                {/* {t("home.freePackageDesc")} */}
                                {item?.description}
                            </p>
                            <ul className="list-inside list-disc text-[18px] text-center">
                                <li>duration: {item?.duration}{" "}{item?.durationType}</li>
                                <li>duration: {item?.duration}{" "}{item?.durationType}</li>
                                <li>duration: {item?.duration}{" "}{item?.durationType}</li>
                            </ul>
                            <div className=' pt-4 text-center'>
                                <p> Price: <span className=' text-[25px] font-bold text-orange-600'>{item?.price.toLocaleString()}{" "}{"₭"}</span></p>
                            </div>
                        </div>
                        :
                        <CardSkeleton />
                    }
                </div>
                <div className="container mx-auto mt-5 mb-20 h-full w-full max-w-[340px] rounded-lg border-2 bg-white sm:max-w-[620px] lg:max-w-[900px]">

                    <h1 className="w-full rounded-t-lg bg-[#7AA3B2] py-4 text-center text-[30px] font-extrabold text-white">
                        ຊ່ອງທາງການຊຳລະເງິນ
                    </h1>
                    <div className="rounded-lg bg-white pb-4">
                        <form onSubmit={Submit} className="h-full w-full rounded-lg">
                            <div className="w-full mt-4 grid grid-cols-1 md:flex md:justify-around lg::flex lg::justify-around">
                                <div className="w-full mb-4 flex flex-col  justify-center items-center">
                                    <p>BCEL ONE</p>
                                    <QRCodeSVG size={250} value="00020101021133380004BCEL0106ONEPAY0216mch5f76a7f5ca7d25204569753034185802LA6002SV6304182B" />
                                    <p>SENGSAVANG ຕັດຫຍິບ</p>
                                </div>
                                <div className=" w-full flex justify-center items-center">
                                    {image ?
                                        <div className="relative w-[60%]">
                                            <img src={image} alt="Preview" className="w-full object-cover rounded-lg" />
                                            <div
                                                onClick={removeImage}
                                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 transition"

                                            >
                                                ✖
                                            </div>
                                        </div>
                                        :
                                        <div
                                            className=" mx-auto p-6 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer hover:border-blue-500 transition"
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={handleDrop}
                                        >
                                            <label htmlFor="file-upload" className="flex flex-col items-center gap-2">
                                                <MdOutlineFileUpload className="text-[100px] text-gray-700" />
                                                <p className="text-gray-600">ຮູບພາບ slip ໂອນເງິນ</p>
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="mt-14 flex justify-center">
                                <button
                                    type="submit"
                                    className="w-[200px] rounded-md bg-[#F97316] py-2.5 text-[20px] font-semibold text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Navbar >
    )
}

export default RegisterPaackage

//     <div div className = "flex w-full flex-col items-center" >
//         <div className="w-full rounded-lg border-2 border-gray-400 p-6 sm:w-[400px]">
//             <div className="flex h-[400px] w-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 sm:w-[350px]">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     className="input-file"
//                     hidden
//                     onChange={({ target: { files } }) => {
//                         // files[0] && setFileName(files[0].name);
//                         // if (files) {
//                         //     setImagePay(URL.createObjectURL(files[0]));
//                         // }
//                     }}
//                 />
//                 {image ? (
//                     <div className="relative z-10 flex h-full w-full items-center justify-center">
//                         <img
//                             src={imagePay}
//                             className="h-full w-full object-cover"
//                             alt={fileName}
//                         />
//                         <MdDelete
//                             onClick={() => setImagePay(null)}
//                             className="absolute right-2 top-2 z-50 cursor-pointer text-[20px] text-red-500"
//                         />
//                     </div>
//                 ) : (
//                     <div>

//                         {/* <div

//                     className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
//                 >
//                     <MdOutlineFileUpload className="text-[100px] text-gray-700" />
//                     <p className="text-[24px] font-semibold text-blue-500">
//                         ເລືອກຮູບພາບ
//                     </p>
//                 </div> */}
//                     </div>
//                 )}
//             </div>
//         </div>
// </div >