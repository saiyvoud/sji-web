import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import RouterPath from "./router/Router";
import { useAllowCookieStore } from "./store/authStore";
import { Button } from "@material-tailwind/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const { getAllow, setAllow } = useAllowCookieStore();
  const [show, setShow] = useState(!getAllow());

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <GoogleOAuthProvider clientId={"126390749733-b29ar5aca6nnpu00d0ldu68nb3o5fo5f.apps.googleusercontent.com"}  locale="en">
      <RouterPath />
      {show &&
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-duration="2000"
          data-aos-offset="0"
          className={`w-full px-5 fixed bottom-2 z-50 ease-linear duration-1000`}>
          <div className="w-full lg:w-[600px] mx-auto bg-blue-900 py-5 lg:py-10 rounded-xl">
            <p className=" text-center text-white">ເວັບໄຊສ໋ ເຮົາຕ້ອງການບັນທຶກ Cookie ເພື່ອການໃຊ້ງານທີ່ດີທີ່ສຸດຂອງທ່ານ</p>
            <div className="mt-3 px-5 flex justify-around items-center">
              <Button onClick={() => {
                setShow(false);
                setAllow(true);
              }} className=" font-lao" color="blue">ຍອມຮັບ</Button>
              <Button onClick={() => {
                setShow(false);
              }} className=" font-lao" variant="outlined" color="white">ປິດ</Button>
            </div>
          </div>
        </div>}
    </GoogleOAuthProvider>

  );
}

export default App;
