import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { LuLoader } from "react-icons/lu";
import bgAuth from "../../assets/bg-register.jpg";
import logo from "../../assets/logo/sji-bg-blue.png";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/Auth.hook";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { signInWithGoogle } from "../../helper/FirebaseApp";
import Loading from "../../components/Loading";
import { useLoginWithGoogle } from "../../hooks/Auth.hook";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
export const Register = () => {
  const { mutate: Signup, error, isPending } = useSignup();
  const { mutate: LoginWithGoogle, error1, isPending1 } = useLoginWithGoogle();
  const { isLoggedIn } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required";

    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      Signup(formData);
    }
  };
  if (isLoggedIn()) {
    return <Navigate to="/home" replace />;
  }
  const handlesignInWithGoogle = async () => {
    setIsLoading(true);
    const user = await signInWithGoogle();
    if (user) {
      LoginWithGoogle({
        "googleId": user.uid,
        "name": user.displayName,
        "email": user.email
      }).finally(() => {
        setIsLoading(false);
        window.location.href = "/home";
      })

    }
    setIsLoading(false);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <Helmet>
        <title>Register -SJI Investment</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {isLoading && <Loading />}
      <div className="col-span-8 hidden w-full md:col-span-6 md:block lg:col-span-7">
        <img src={bgAuth} loading="lazy" alt="" className="h-[800px] w-full object-cover" />
      </div>
      <div className="col-span-4 w-full p-8 md:col-span-6 lg:col-span-5 lg:px-4 lg:py-8">
        <div className="flex items-center gap-x-3">
          <img loading="lazy" src={logo} alt="logo" className="w-7" />
          <h2>ສອນເຈົ້າລົງທຶນ</h2>
        </div>
        <form
          className="sm:mt-7 mt-0 w-full px-3 py-6 sm:px-5 lg:mt-5 lg:px-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <div>
              <h1 className="text-[30px] font-bold">ລົງທະບຽນ</h1>
              <p className="text-[14px] font-semibold text-gray-400">
                ກະລຸນາລົງທະບຽນເພື່ອເຂົ້າສູ່ລະບົບ
              </p>
            </div>
          </div>
          <div className="mb-3">
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              color="orange"
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              color="orange"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              color="orange"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="Phone number (20xxxxxxxx)"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              color="orange"
            />
            {errors.phoneNumber && (
              <p className="text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              color="orange"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="relative mt-3 flex items-center">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "password" : "text"}
              value={formData.password}
              onChange={handleChange}
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
          <div className="relative mt-3 flex items-center">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "password" : "text"}
              value={formData.confirmPassword}
              onChange={handleChange}
              color="orange"
            />
            <div
              className="absolute right-2 cursor-pointer text-[24px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword}</p>
          )}
          <Button type="submit"
            className="mt-4 flex items-center justify-center w-full rounded-lg bg-[#FF6500] py-3 font-semibold text-white">
            {isPending ? (
              <LuLoader className="animate-spin text-white" />
            ) : (
              "Register"
            )}
          </Button>
          {/* <div className="relative mt-5 flex w-full items-center justify-center">
            <p className="absolute bg-white px-2 text-gray-500">or</p>
            <hr className="w-full border border-gray-300" />
          </div>
          <button
            onClick={handlesignInWithGoogle}
            className="mt-5 flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-300 py-2">
            <span className="text-[16px] font-semibold">
              Sign in with Google
            </span>
            <img src={googleLogo} alt="google" className="w-6" />
          </button> */}

          <p className="mt-2 text-center text-[14px]">
            <Link to="/login" className="text-orange-500 underline">
            Have an account ?
            </Link>
          </p>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
};
