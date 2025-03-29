import React, { useEffect, useRef, useState } from 'react'
import { useRegisterTempStore } from '../../store/authStore'
import { useNavigate } from "react-router-dom";
import { resentVerifyEmail, verifyOTP } from '../../api/Auth';
import Loading from '../../components/Loading';
import { Error, Success } from '../../helper/sweetAlert';
//import { useLogin } from '../../hooks/Auth.hook';
import { useSignup } from '../../hooks/Auth.hook';
import { Helmet } from 'react-helmet-async';
const VerifyOTP = () => {
    const navigate = useNavigate();
    const { mutate: Signup, error, isPending } = useSignup();
    const { setRegisterTemp, getRegisterTemp, clearRegisterTemp } = useRegisterTempStore();
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs?.current[0]?.focus();
    }, []);

    if (!getRegisterTemp()) {
        navigate('/home');
    }
    const handleChange = async (index, value) => {
        if (!/^\d?$/.test(value)) return; // Chỉ cho phép nhập số (0-9)

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus ô tiếp theo nếu nhập số
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Nếu nhập đủ thì submit
        if (newOtp.every((num) => num !== "")) {
            setIsLoading(true);
            const res = await verifyOTP({ email: getRegisterTemp().email, otp: newOtp.join("") });
            // console.log(res);
            setIsLoading(false);
            if (res.status === true) {
                Signup(
                    {
                        username: getRegisterTemp().username,
                        password: getRegisterTemp().password,
                        firstName: getRegisterTemp().firstName,
                        lastName: getRegisterTemp().lastName,
                        phoneNumber: getRegisterTemp().phoneNumber,
                        email: getRegisterTemp().email,
                        confirmPassword: getRegisterTemp().confirmPassword
                    });
            } else {
                setOtp(["", "", "", "", "", ""]);
                setIsLoading(false);
                inputRefs?.current[0]?.focus();
                Error("Verify OTP", "Verify OTP failed, Please try again");
            }
        };
    }

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            const newOtp = [...otp];
            if (!newOtp[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
            newOtp[index] = "";
            setOtp(newOtp);
        }
        if (event.key === "ArrowRight") {
            inputRefs.current[index + 1]?.focus();
        }
        if (event.key === "ArrowLeft") {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handleResent = async () => {
        setIsLoading(true);
        const res = await resentVerifyEmail({ email: getRegisterTemp().email });
        setIsLoading(false);
        if (res) {
            Success("Re-sent", "Please check your email to get the new OTP");
        } else {
            Error("Re-sent Error", "Please wait at least 1 minute before requesting another OTP.");
        }
    }
    return (
        <>
            <Helmet>
                <title>Verify OTP -SJI Investment</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {isLoading && <Loading />}
            {isPending && <Loading />}
            <div class=" w-[300px] lg:w-[30%] md:w-[50%] mx-auto mt-20 border border-gray-300 rounded-lg shadow-lg p-5">

                <div class="card p-2 text-center">
                    <h6 className=' text-orange-600 font-bold text-sm lg:text-lg'>Please enter the one time otp <br /> to verify your account</h6>
                    <div> <span>A code has been sent to</span> <small id="maskedNumber">{getRegisterTemp().email}</small> </div>
                    <div className="w-full flex justify-between gap-2 lg:gap-5 mt-10">
                        {otp.map((item, index) => (
                            <div>
                                <input
                                    key={index}
                                    value={item}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className='w-full p-2 border-2 border-black rounded-lg text-center focus:border focus:outline-orange-500' type='text' maxLength={1} />
                            </div>
                        ))}
                    </div>
                    <div class="mt-4">
                        <button onClick={handleResent} id="validateBtn" class=" w-full bg-orange-500 text-white p-2 rounded-lg mt-5">re-sent</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyOTP;