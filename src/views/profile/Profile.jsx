import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import bgOverlay from "../../assets/images/bg.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button, Input } from '@material-tailwind/react';
import { useGetMe } from '../../hooks/Auth.hook';
import Swal from 'sweetalert2';
import { changePass, editProfile } from '../../api/Auth';
import PhoneInput from "react-phone-input-2";
import { Error, Success } from '../../helper/sweetAlert';
import Loading from '../../components/Loading';
const Profile = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetMe();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [isDisableEdit, setDisableEdit] = useState(true);
    const [loading, setLoading] = useState(false);
    // console.log(data)
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [conPass, setConPass] = useState("");

    const { t } = useTranslation();

    // const handelFanme = (e) => {
    //     if (data?.data?.firstName === e.target.value || e.target.value === "") {
    //         setDisableEdit(true);
    //     } else {
    //         setDisableEdit(false);
    //     }
    //     setFname(e.target.value);

    // }
    // const handleLname = (e) => {
    //     if (data?.data?.lastName === e.target.value || e.target.value === "") {
    //         setDisableEdit(true);
    //     } else {

    //         setDisableEdit(false);
    //     }
    //     setLname(e.target.value);

    // }
    // const handlePhone = (e) => {

    //     if (data?.data?.phoneNumber === e.target.value || e.target.value === "") {
    //         setDisableEdit(true);
    //     }
    //     setPhone(e.target.value)
    // }
    const handleEdit = async () => {
        const { value: formValues } = await Swal.fire({
            title: t("profile.changeInfo") + " " + t("profile.title"),
            html: `
              <input id="swal-input1" class="swal2-input" placeholder=${t("profile.fname")} value=${data?.data?.firstName} required >
              <input id="swal-input2" class="swal2-input" placeholder=${t("profile.lname")} value=${data?.data?.lastName} required >
              <input id="swal-input3" class="swal2-input" placeholder=${t("profile.phone")} value=${data?.data?.phoneNumber} required >
            `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    firstName: document.getElementById("swal-input1").value,
                    lastName: document.getElementById("swal-input2").value,
                    phoneNumber: document.getElementById("swal-input3").value
                };
            }
        });
        if (formValues) {
            setLoading(true);
            const result = await editProfile(formValues)
            setLoading(false);
            if (result) {
                Success("Edit success");
                window.location.reload();
            } else {
                Error("Edit Error");
            }
        }
    }
    const handleChangePass = async () => {
        if (oldPass && newPass && conPass) {
            if (newPass !== conPass) {
                Error(t("profile.changePasswordError3"))
                return;
            }
            if (newPass.length < 6) {
                Error(t("profile.changePasswordError2"))
                return;
            }
            setLoading(true);
            const result = await changePass({
                "oldPassword": oldPass,
                "password": newPass,
                "confirmPassword": conPass
            });
            setLoading(false);
            if (result.status) {
                Success("Success");
                window.location.reload();
            }
            if (result?.response?.data?.status !== 200) {
                console.log(result)
                Error(result?.response?.data?.messages || result?.response?.data?.error)
            }

        }

    }

    return (
        <Navbar>
            {loading && <Loading />}
            <div className=' py-28 bg-gray-200'>
                <div className="container px-2 lg:px-0 w-full lg:w-[1200px] md:[900px] mx-auto ">
                    <div className=' bg-white px-3 py-5 rounded-lg'>
                        <h1 className="mb-5 text-lg lg:text-xl font-bold text-[#F97316] text-center">
                            {t("profile.title")}
                        </h1>
                        <div className=' grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3'>
                            <Input type='text' className='' label={t("profile.username")} value={data?.data?.username ? data?.data?.username : data?.data?.displayName} readOnly />
                            <Input
                                type='text'
                                label={t("profile.fname")}
                                value={data?.data?.firstName}
                                readOnly
                            />
                            <Input
                                type='text'
                                label={t("profile.lname")}
                                value={data?.data?.lastName}
                                readOnly
                            />
                        </div>
                        <div className=' mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2'>
                            <Input
                                type='text'
                                label={t("profile.phone")}
                                value={data?.data?.phoneNumber}
                                readOnly
                            />
                            <Input type='text' label={t("profile.email")} value={data?.data?.email} readOnly />
                        </div>
                        <div className=' mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3'>
                            <Input type='text' label="google id" value={data?.data?.googleId} readOnly />
                            <Input type='text' label={"Display Name"} value={data?.data?.displayName} readOnly />
                            <Input type='text' label={"Email"} value={data?.data?.email} readOnly />
                        </div>
                        <div className=' flex justify-center items-center mt-5'>
                            <Button onClick={handleEdit} color="blue" className=' font-lao'>{t("profile.changeInfo")}</Button>
                        </div>
                    </div>
                    {data?.data?.package &&
                        <div className='mt-5 bg-white px-3 py-5 rounded-lg'>
                            <h1 className="mb-5 text-lg lg:text-xl font-bold text-[#F97316] text-center">
                                Package
                            </h1>
                            < div
                                className="w-full p-2 rounded-lg shadow-[0px_2px_2px_rgba(255,215,0,0.7)] border border-orange-400 bg-[#FFEDD5]"
                            >
                                <h2 className="my-4 text-center text-[24px] font-bold text-[#FB923C]">
                                    {data?.data?.package?.name.toUpperCase()}
                                </h2>
                                <div className=' border-b border-gray-300 pb-2 text-center mx-auto' dangerouslySetInnerHTML={{ __html: data?.data?.package?.description }} />
                                <div className=' mt-2 text-center' dangerouslySetInnerHTML={{ __html: data?.data?.package?.feature }} />
                                <p className=" text-center">ໄລຍະເວລາ: {data?.data?.package?.duration}{" "}{data?.data?.package?.durationType}</p>
                                <div className=' pt-5 text-center'>
                                    <p> Price: <span className=' text-[25px] font-bold text-orange-600'>{data?.data?.package?.price.toLocaleString()}{" "}{"₭"}</span></p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='mt-5 bg-white px-3 py-5 rounded-lg'>
                        <h1 className="mb-5 text-lg lg:text-xl font-bold text-[#F97316] text-center">
                            {t("profile.changePassword")}
                        </h1>
                        <div className=' grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3'>
                            <Input
                                type='password'
                                label={t("profile.currentPassword")}
                                value={oldPass}
                                onChange={(e) => { setOldPass(e.target.value) }} />
                            <Input
                                type='password'
                                label={t("profile.newPassword")}
                                value={newPass}
                                onChange={(e) => { setNewPass(e.target.value) }}
                            />
                            <Input
                                type='password'
                                label={t("profile.confirmPassword")}
                                value={conPass}
                                onChange={(e) => { setConPass(e.target.value) }}
                            />
                        </div>
                        <div className=' flex justify-center items-center mt-5'>
                            <Button onClick={handleChangePass} color="blue" className=' font-lao'>{t("profile.changePassword")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar >
    )
}

export default Profile