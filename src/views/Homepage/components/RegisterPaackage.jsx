import React, { useState } from "react";
import { Navbar } from "../../../components/Navbar";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";
import { useGetPackage } from "../../../hooks/Package.hook";
import Empty from "../../../components/Empty";
import { QRCodeSVG } from 'qrcode.react';
import CardSkeleton from "../../../components/CardSkeleton";
import { Warning } from "../../../helper/sweetAlert";
import { createOrderPackage } from "../../../api/Package";
import Loading from "../../../components/Loading"
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Input } from "@material-tailwind/react";
const RegisterPaackage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, error, isLoading } = useGetPackage(id);
    const item = data?.data
    const [image, setImage] = useState(null);
    const [imageTemp, setImageTemp] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setImageTemp(e.target?.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setImageTemp(e.target?.result);
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
    const removeImage = () => {
        setImage(null);
        setImageTemp(null);
    };

    const Submit = async (event) => {
        event.preventDefault();
        const error = {}
        if (!image) {
            error.image = "ບໍ່ມີ slip ໂອນເງິນ"
        }
        if (fname === "") {
            error.fname = "ໃສ່ຊື່"
        }
        if (lname === "") {
            error.lname = "ໃສ່ນາມສະກຸນ"
        }
        if (phone === "") {
            error.phone = "ເບີ whatapp"
        } else {
            const phoneRegex = /^20\d{8}$/;
            if (!phoneRegex.test(phone)) {
                error.phone = "ເບີບໍ່ຖືກຕ້ອງ (20xxxxxxxx)";
            }
        }

        if (Object.keys(error).length === 0) {
            try {
                setLoading(true);
                const x = await createOrderPackage({ packageId: id, slip: image,firstName:fname,lastName:lname,phoneNumber:phone })
                const jsonString = encodeURIComponent(JSON.stringify(x.data));
                navigate(`/package/success/${jsonString}`);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                throw error;
            }
        }
        else {
            setErrors(error);
        }
    }
    return (
        <Navbar>
            <Helmet>
                <title>Buy Package -SJI Investment</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {loading && <Loading />}
            <div>
                <div className="w-full bg-[#003049] pt-24">
                    <div
                        className=" container max-w-[1200px] mx-auto text-white flex justify-start items-center"
                        onClick={() => navigate(-1)}
                    >
                        <ImArrowLeft className="mr-5 text-[24px]" />
                        <h1 className="text-[32px] font-bold sm:text-[50px]">
                            ກັບຄືນ
                        </h1>
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
                            <div className=' border-b border-gray-300 pb-2 text-center mx-auto' dangerouslySetInnerHTML={{ __html: item?.description }} />
                            <div className=' mt-2 text-center' dangerouslySetInnerHTML={{ __html: item?.feature }} />
                            <p className=" text-center">ໄລຍະເວລາ: {item?.duration}{" "}{item.durationType}</p>
                            <div className=' pt-5 text-center'>
                                <p> Price: <span className=' text-[25px] font-bold text-orange-600'>{item.price.toLocaleString()}{" "}{"₭"}</span></p>
                            </div>
                        </div>
                        :
                        <CardSkeleton />
                    }
                </div>
                <div className="container mx-auto mt-5 mb-20 h-full w-full max-w-[340px] rounded-lg border-2 bg-white sm:max-w-[620px] lg:max-w-[900px]">

                    <h1 className="w-full rounded-t-lg bg-[#7AA3B2] py-4 text-center text-[30px] font-extrabold text-white">
                        ສະໝັກສະມາຊິກ
                    </h1>
                    <div className="rounded-lg bg-white pb-4">
                        <form onSubmit={Submit} className="h-full w-full rounded-lg px-2">
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                                <div>
                                    <Input
                                        type="text" label="ຊື່"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)} />
                                    <span className=" text-sm text-red-500">{errors?.fname && errors?.fname}</span>
                                </div>
                                <div>
                                    <Input
                                        type="text" label="ນາມສະກຸນ"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)} />
                                    <span className=" text-sm text-red-500">{errors?.lname && errors?.lname}</span>
                                </div>
                                <div>
                                    <Input
                                        type="text" label="ເບີ whatapp"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <span className=" text-sm text-red-500">{errors?.phone && errors?.phone}</span>
                                </div>
                            </div>
                            <div className="w-full mt-4 grid grid-cols-1 md:flex md:justify-around lg::flex lg::justify-around">
                                <div className="w-full mb-4 flex flex-col  justify-center items-center">
                                    <p>BCEL ONE</p>
                                    <QRCodeSVG size={250} value="00020101021138670016A00526628466257701082771041802030010324NEXFOLPOLCIYSAQLCEVWDCAP53034185802LA630473F6" />
                                    <p>MANYLOUD SOMNANONG</p>
                                </div>
                                <div className=" w-full flex justify-center items-center">
                                    {image ?
                                        <div className="relative w-[60%]">
                                            <img src={imageTemp} alt="Preview" className="w-full object-cover rounded-lg" />
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