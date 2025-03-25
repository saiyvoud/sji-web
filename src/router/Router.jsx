import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { OurService } from "../views/ourService/OurService";
import { News } from "../views/news/News";
import { Analysiss } from "../views/analysis/Analysiss";
import { AboutUs } from "../views/aboutUs/AboutUs";
import { NewsGold } from "../views/news/components/NewsGold";
import { VideoExample } from "../views/ourService/components/VideoExample";
import { Contact } from "../views/contact/Contact";
import { Login } from "../views/auth/Login";
import { Register } from "../views/auth/Register";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";
import { AiOutlineFileImage } from "react-icons/ai";
import { Membership } from "../views/Homepage/components/Membership";
import { Course } from "../views/ourService/components/Course";
import { CourseDetail } from "../views/ourService/components/CourseDetail";
import { AnalysisDetail } from "../views/analysis/components/AnalysisDetail";
import { AnalysisDetailCompany } from "../views/analysis/components/AnalysisDetailCompany";
import { Article } from "../views/article/Article";
import { ArticleDetail } from "../views/article/components/ArticleDetail";
import RegisterPaackage from "../views/Homepage/components/RegisterPaackage";
import PaySuccess from "../views/Homepage/components/PaySuccess";
import VerifyOTP from "../views/auth/VerifyOTP";
import Profile from "../views/profile/Profile";

export default function RouterPath() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/ourService",
      element: <OurService />,
    },
    {
      path: "/ourService/course",
      element: <Course />,
    },
    {
      path: "ourService/course/:id",
      element: <CourseDetail />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/gold/:id",
      element: <NewsGold />,
    },
    {
      path: "analysis",
      element: <Analysiss />,
    },
    {
      path: "analysis/country/:id",
      element: <AnalysisDetail />,
    },
    {
      path: "analysis/country/:id/:company",
      element: <AnalysisDetailCompany />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/article/:id",
      element: <ArticleDetail />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/verifyotp",
      element: <VerifyOTP />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/home/membership",
      element: <Membership />,
    },
    {
      path: "/register/package/:id",
      element: <RegisterPaackage />,
    },
    {
      path: "/package/success/:data",
      element: <PaySuccess />
    }
  ]);
  return <RouterProvider router={router} />;
}
