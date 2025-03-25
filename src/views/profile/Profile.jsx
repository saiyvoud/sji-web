import React from 'react'
import { Navbar } from '../../components/Navbar'
import bgOverlay from "../../assets/images/bg.png";
import { useTranslation } from "react-i18next";

const Profile = () => {
    const { t } = useTranslation();
    return (
        <Navbar>
            <div>
                <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#003049] sm:h-[800px] sm:before:h-[800px] md:h-[850px] md:before:h-[850px] lg:before:h-full">
                    <img
                        src={bgOverlay}
                        className="absolute hidden h-screen w-full sm:block sm:h-[800px] md:h-[850px] md:opacity-55"
                    />
                    <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
                        <h1 className="top-14 mt-10 flex items-start text-[30px] font-bold text-[#F97316] sm:relative sm:mt-0 sm:text-[35px] md:text-[40px]">
                            {t("profile.title")}
                        </h1>
                        <div className=' mt-5 lg:mt-16 w-[50%] bg-white rounded-lg shadow-lg p-5 mx-auto'>
                            dfksjfgd
                            
                        </div>
                    </div>

                </div>
            </div>
        </Navbar >
    )
}

export default Profile