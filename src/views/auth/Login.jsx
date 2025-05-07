import { useEffect, useState } from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { LuLoader } from "react-icons/lu";
import bgAuth from "../../assets/bg-register.jpg";
import logo from "../../assets/logo/sji-bg-blue.svg";
import googleLogo from "../../assets/icons/google.png";
import { jwtDecode } from 'jwt-decode';
import { Link } from "react-router-dom";
import { useLogin, useLoginWithGoogle } from "../../hooks/Auth.hook";
import { useRememberMeStore, useMyTempStore, useAuthStore } from "../../store/authStore";
import { decryptPassword } from "../../helper/cryptoJS";
import { Navigate } from "react-router-dom";
// import { signInWithGoogle } from "../../helper/FirebaseApp";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from 'react-toastify';
export const Login = () => {
  const { mutate: Login, error, isPending } = useLogin();
  const { mutate: LoginWithGoogle, error1, isPending1 } = useLoginWithGoogle();
  const { setRememberMe, isRememberMe } = useRememberMeStore();
  const { isLoggedIn } = useAuthStore()
  const { setMyTemp, getMyTemp, clearMyTemp } = useMyTempStore();
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    username: isRememberMe ? getMyTemp()?.username : "",
    password: isRememberMe ? getMyTemp()?.password && decryptPassword(getMyTemp()?.password) : "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: client_id,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // }, [])
  const validate = () => {
    let errors = {};
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);


    if (Object.keys(validationErrors).length === 0) {
      isRememberMe() ? setMyTemp(formData.username, formData.password) : clearMyTemp();
      Login(formData);
    }
  };

  if (isLoggedIn()) {
    return <Navigate to="/home" replace />;
  }
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        if (res) {
          LoginWithGoogle({
            "googleId": res?.data?.sub,
            "name": res?.data?.name,
            "email": res?.data?.email
          })
          setIsLoading(false);
        }

      } catch (error) {
        setIsLoading(false);
        console.error("Lỗi lấy thông tin người dùng:", error);
      }
    },
    onError: () => {
      console.log("Login thất bại");
    },
  });
  // ll
  return (
    <>
      <Helmet>
        <title>Login -SJI Investment</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {isLoading && <Loading />}
      <ToastContainer/>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-8 hidden w-full md:col-span-7 md:block">
          <img src={bgAuth} loading="lazy" alt="" className="h-screen w-full object-cover" />
        </div>
        <div className="col-span-4 w-full p-8 md:col-span-5">
          <div className="flex items-center gap-x-3">
            <img src={logo} loading="lazy" alt="logo" className="w-7" />
            <h2>ສອນເຈົ້າລົງທຶນ</h2>
          </div>
          <form
            className="mt-5 w-full px-3 py-6 sm:mt-10 sm:px-5 md:px-4 lg:mt-5"
            onSubmit={handleSubmit}
          >
            <div className="mb-10 text-center">
              <div>
                <h1 className="text-[30px] font-bold">ເຂົ້າສູ່ລະບົບ</h1>
                <p className="text-[14px] font-semibold text-gray-400">
                  ກະລຸນາລົງທະບຽນເພື່ອເຂົ້າສູ່ລະບົບ
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Input
                label="Username"
                name="username"
                onChange={handleChange}
                value={formData.username}
                color="orange"
              />
              {errors.username && (
                <p className="text-xs text-red-500">{errors.username}</p>
              )}
            </div>
            <div className="relative mt-3 flex items-center">
              <Input
                label="Password"
                name="password"
                type={showPassword ? "password" : "text"}
                onChange={handleChange}
                value={formData.password}
                color="orange"
              />
              <div
                className="absolute right-2 cursor-pointer text-[24px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
            <div className="mb-3 mt-1 flex items-center">
              <Checkbox color="orange" onChange={handleRememberMe} checked={isRememberMe()} />
              <label>ຈື່ຂ້ອຍ</label>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full items-center justify-center rounded-lg bg-[#FF6500] py-2 font-semibold text-white"
            >
              {isPending ? (
                <LuLoader className="animate-spin text-white" />
              ) : (
                "Login"
              )}
            </button>
            <div className="relative my-5 flex w-full items-center justify-center">
              <p className="absolute bg-white px-2 text-gray-500">or</p>
              <hr className="w-full border border-gray-300" />
            </div>
            <div
              onClick={login}
              className="mt-5 flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-300 py-2">
              <span

                className="text-[16px] font-semibold"
              >

                Sign in with Google
              </span>
              <img src={googleLogo} alt="google" className="w-6" />
            </div>
            <p className="mt-2 text-center text-[14px]">
              <Link to="/register" className="text-orange-500 underline">
                Don't have an account ?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
