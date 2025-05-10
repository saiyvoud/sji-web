import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate, Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import SJI_logo from "../assets/logo/sji-bg-blue.svg";
import flagLaos from "../assets/images/flag-laos.png";
import flagUs from "../assets/images/flag-us.png";

import Footer from "./Footer";
import useLanguageStore from "../store/languageStore";
import { useAuthStore } from "../store/authStore";
import { useRedirectUrl } from "../store/redirectPath";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { signOutGoogle } from "../helper/FirebaseApp";

export const Navbar = ({ children }) => {
  const activeLink =
    "text-[#F97316] font-medium xl:text-[16px] w-full sm:hover:bg-transparent px-3 md:px-1.5 sm:px-1 hover:bg-[#005887] py-2  sm:w-fit ";
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageStore();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(
    i18n.language === "la" ? flagLaos : flagUs,
  );
  const [isDropdownFlag, setIsDropdownFlag] = useState(false);
  const { AuthDetail, clearAuthDetail } = useAuthStore();
  const { setRedirectUrl } = useRedirectUrl();

  useEffect(() => {
    setSelectedFlag(i18n.language === "la" ? flagLaos : flagUs);
  }, [i18n.language]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  useEffect(() => {
    // console.log(AuthDetail)
    if (AuthDetail?.data?.token) {
      const date = new Date();
      const token_expired_at = new Date(AuthDetail?.data?.token_expired_at)
      console.log(date > token_expired_at)
      if (date > token_expired_at) {
        if (AuthDetail?.data?.displayName !== null || AuthDetail?.data?.displayName !== "") {
          signOutGoogle();
        }
        clearAuthDetail();
        window.location.href = "/login"
      }
    }
  }, [])

  const dataNav = [
    { title: "navbar.home", path: "/" },
    { title: "navbar.ourService", path: "/ourService" },
    { title: "navbar.news", path: "/news" },
    { title: "navbar.analysis", path: "/analysis" },
    { title: "navbar.article", path: "/article" },
    { title: "navbar.about", path: "/about" },
    { title: "navbar.contact", path: "/contact" },
  ];

  const pathname = "/" + useLocation().pathname.split("/")[1];
  const isActivePath = (path) => pathname === path;
  // const isHomepage = (path) => path == '/'

  const handleLogin = () => {
    setRedirectUrl(location.pathname);
    navigate("/login");
  };
  const handleLogout = () => {
    Swal.fire({
      title: t("navbar.logout"),
      text: t("navbar.confirmLogout"),
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: t("alert.cancel"),
      confirmButtonText: t("alert.confirm")
    }).then(async result => {
      if (result.isConfirmed) {
        if (AuthDetail?.data?.displayName !== null || AuthDetail?.data?.displayName !== "") {
          await signOutGoogle();
        }
        clearAuthDetail();
      }
    });
  }
  return (
    <nav>
      <div className="fixed z-[1000] w-full bg-[#003049] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="container mx-auto flex h-[70px] max-w-[340px] items-center justify-between sm:h-[60px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:h-[70px] xl:max-w-6xl 2xl:max-w-7xl">
          <NavLink to={"/"}>
            <img
              src={SJI_logo}
              alt="logo"
              className="w-12 sm:w-10 xl:w-14 2xl:w-[65px] border-2 border-orange-500 rounded-full"
            />
          </NavLink>
          <ul
            className={`f flex w-[200px] items-start justify-start gap-x-2 px-2.5 py-2 text-[18px] text-white sm:w-full sm:items-center sm:justify-center sm:gap-x-0 sm:px-0 sm:text-[12px] md:justify-center md:gap-x-2 lg:gap-x-10 xl:text-[16px] ${isMenuVisible ? "absolute -right-0 top-[72px] flex w-[220px] flex-col items-start gap-y-2 bg-[#003652]" : "hidden sm:flex"}`}
          >
            {dataNav.map((list, index) => (
              <NavLink
                to={list.path}
                key={index}
                className={
                  isActivePath(list.path)
                    ? activeLink
                    : "f w-full px-3 py-2 duration-300 hover:bg-[#005887] sm:w-fit sm:px-1.5 sm:text-[12px] sm:hover:bg-transparent xl:text-[16px]"
                }
                onClick={() => setIsMenuVisible(false)}
              >
                {t(list.title)}
              </NavLink>
            ))}
          </ul>
          <div className="flex gap-x-[6px] sm:gap-x-2 xl:gap-x-3">
            <div
              className="relative flex w-[100px] cursor-pointer flex-col items-center justify-center gap-x-2 rounded-md border-2 border-white sm:w-[80px] sm:gap-x-1 sm:py-[1px] md:py-1 xl:w-[120px]"
              onClick={() => setIsDropdownFlag(!isDropdownFlag)}
            >
              <div className="flex w-[90px] cursor-pointer items-center justify-center px-[2px] sm:w-[80px] sm:px-[2px] xl:w-[120px] xl:gap-x-2">
                <img
                  className="mr-1 w-7 cursor-pointer rounded-full border-2 border-white sm:w-6"
                  src={selectedFlag}
                  alt=""
                />
                <p className="text-[14px] font-normal text-white sm:text-[12px] sm:font-normal xl:text-[17px]">
                  {t(
                    selectedFlag === flagLaos
                      ? "language.laos"
                      : "language.english",
                  )}
                </p>
              </div>
              {isDropdownFlag && (
                <div className="absolute left-[50%] top-[55px] flex h-fit w-[110px] -translate-x-1/2 flex-col items-center gap-2 rounded-md border-2 border-white bg-[#003049] py-2 sm:top-11 sm:w-[120px] md:gap-0 md:p-0 md:px-3 xl:w-[120px] xl:gap-x-2">
                  <div
                    className="flex w-[90px] cursor-pointer items-center justify-center border-b border-white py-[4px] md:py-2 xl:w-[100px] xl:gap-x-2"
                    onClick={() => {
                      changeLanguage("la");
                      setIsDropdownFlag(false);
                    }}
                  >
                    <img
                      className="mr-1 w-7 cursor-pointer rounded-full border-2 border-white sm:w-6"
                      src={flagLaos}
                      alt=""
                    />
                    <p className="text-[14px] font-semibold text-white sm:text-[14px] sm:font-medium">
                      {t("language.laos")}
                    </p>
                  </div>
                  <div
                    className="flex w-[90px] cursor-pointer items-center justify-center py-[4px] md:py-2 xl:w-[100px] xl:gap-x-2"
                    onClick={() => {
                      changeLanguage("en");
                      setIsDropdownFlag(false);
                    }}
                  >
                    <img
                      className="mr-1 w-7 cursor-pointer rounded-full border-2 border-white sm:w-6"
                      src={flagUs}
                      alt=""
                    />
                    <p className="text-[14px] font-semibold text-white sm:text-[14px]">
                      {t("language.english")}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {AuthDetail && AuthDetail?.data?.token ? (
              <>
                <Menu>
                  <MenuHandler>
                    <Button className="bg-[#FB923C]">{AuthDetail.data.displayName ? AuthDetail.data.displayName.split(" ")[0] : AuthDetail.data.username}</Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem></MenuItem>
                    <MenuItem className="font-lao"><Link to="/profile">{t("navbar.profile")}</Link></MenuItem>
                    <MenuItem
                      className="font-lao "
                      onClick={handleLogout}
                    >
                      {t("navbar.logout")}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <button
                type="button"
                onClick={() => handleLogin()}
                className="flex w-[90px] items-center justify-center rounded-md bg-[#FB923C] py-2 text-[14px] font-normal text-white sm:w-[70px] sm:rounded sm:py-[2px] sm:text-[14px] sm:font-normal md:w-[80px] md:rounded-md xl:w-[100px] xl:text-[16px]"
              >
                {t("navbar.login")}
              </button>
            )}
            <div
              className="ml-2 flex cursor-pointer items-center justify-center text-[34px] text-white sm:hidden"
              onClick={toggleMenu}
            >
              {isMenuVisible ? <IoClose /> : <IoMenu />}
            </div>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </nav>
  );
};
