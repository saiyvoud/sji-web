import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
// images
import bgOverlay from "../../assets/images/bg.png";
import personImg from "../../assets/images/emp.jpg";
import aiyA from "../../assets/images/aiy-a.png";
import aiyB from "../../assets/images/aiy-b.png";
import visionImg from "../../assets/images/vision.png";
import visionImg2 from "../../assets/images/vision2.jpg";
import visionImg3 from "../../assets/images/vision3.jpg";

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Navbar>
      <div>
        <div className="relative z-0 h-full w-full before:absolute before:-z-[1] before:h-full before:w-full before:bg-[#002133] sm:before:h-[600px] sm:before:bg-[#003049] md:before:h-[600px] lg:h-[650px] lg:before:h-[650px] xl:h-screen xl:before:h-screen">
          <img
            alt=""
            src={bgOverlay}
            className="absolute hidden h-screen w-full sm:block sm:h-[600px] sm:object-cover lg:h-[650px] xl:h-screen"
          />
          <div className="container relative z-50 mx-auto h-full max-w-[340px] pt-[70px] text-white sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-6xl">
            <div className="mt-5 grid h-full grid-cols-1 items-center gap-y-4 pb-5 sm:mt-0 sm:grid-cols-12 sm:gap-x-3 sm:pb-0">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1600"
                className="sm:col-span-6 md:flex md:flex-col md:items-center md:justify-center xl:items-start"
              >
                <h1 className="mb-3 text-center text-[34px] font-bold sm:text-[40px] md:mt-5 lg:text-[50px]">
                  ກ່ຽວກັບພວກເຮົາ
                </h1>
                <img
                  src={personImg}
                  className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[500px] md:h-[370px] md:w-[330px] lg:h-[400px] lg:w-[380px] xl:w-[400px]"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="sm:col-span-6"
              >
                <h2 className="mb-3 text-center text-[30px] font-medium sm:text-[40px] xl:text-[50px]">
                  ຂໍ້ມູນຫຍໍ້
                </h2>
                <p className="my-4 xl:text-[20px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="xl:text-[20px]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto h-full max-w-[340px] pb-20 sm:max-w-[620px] lg:max-w-[900px] xl:max-w-6xl">
          {/* ຜູ້ກໍ່ຕັ້ງ */}
          <div className="w-full bg-white sm:mt-10">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex items-center justify-center"
            >
              <h2 className="my-5 inline-block border-b-4 border-orange-600 px-5 py-4 text-[40px] font-semibold text-[#374151] md:mt-10 md:py-2">
                ຜຸ້ຮ່ວມກໍ່ຕັ້ງ
              </h2>
            </div>
            <div className="my-10 grid w-full grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-8">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex h-[300px] w-full rounded-md border-[2px] border-[#FB923C] bg-[#FB923C] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="flex h-full w-[400px] items-end rounded-md bg-white px-2 sm:w-full sm:px-0"
                >
                  <img
                    src={aiyA}
                    alt=""
                    className="h-[270px] w-[250px] object-cover"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="ml-5 flex h-full w-full flex-col justify-around sm:items-start"
                >
                  <div>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                  <div className="flex gap-x-5 text-[28px]">
                    <FaFacebookF className="cursor-pointer hover:text-[#FB923C]" />
                    <FaTwitter className="cursor-pointer hover:text-[#FB923C]" />
                    <FaLinkedinIn className="cursor-pointer hover:text-[#FB923C]" />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex h-[300px] w-full rounded-md border-[2px] border-[#FB923C] bg-[#FB923C] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="flex h-full w-[400px] items-end rounded-md bg-white px-2 sm:w-full sm:px-0"
                >
                  <img
                    src={aiyB}
                    alt=""
                    className="h-[270px] w-[250px] object-cover"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="ml-5 flex h-full w-full flex-col justify-around sm:items-start"
                >
                  <div>
                    <p>Name</p>
                    <p>Position</p>
                  </div>
                  <div className="flex gap-x-5 text-[28px]">
                    <FaFacebookF className="cursor-pointer hover:text-[#FB923C]" />
                    <FaTwitter className="cursor-pointer hover:text-[#FB923C]" />
                    <FaLinkedinIn className="cursor-pointer hover:text-[#FB923C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ວິໄສທັດ */}
          <div className="w-full bg-white">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex items-center justify-center"
            >
              <h2 className="inline-block px-5 py-4 text-[30px] font-semibold text-[#374151] sm:my-5 sm:text-[40px]">
                ວິໃສທັດຂອງພວກເຮົາ
              </h2>
            </div>
            <div className="mb-5 grid w-full grid-cols-1 gap-x-10 sm:mb-10 sm:grid-cols-2 sm:place-items-center">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="mb-3 flex sm:mb-0"
              >
                <img
                  src={visionImg}
                  className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h4 className="mt-3 text-[28px] font-semibold text-[#F97316] sm:mb-4 sm:mt-0 xl:text-[34px]">
                  ຈຸດປະສົງຂອງພວກເຮົາ
                </h4>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="my-2 text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
              </div>
            </div>
            <div className="mb-5 grid w-full grid-cols-1 gap-x-10 sm:mb-10 sm:grid-cols-2 sm:place-items-center">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h4 className="mt-3 text-[28px] font-semibold text-[#F97316] sm:mb-4 sm:mt-0 xl:text-[34px]">
                  ວິໃສທັດຂອງພວກເຮົາ
                </h4>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="my-2 text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex"
              >
                <img
                  src={visionImg2}
                  className="hidden h-[300px] w-full rounded-lg object-cover sm:block sm:h-[400px] sm:w-[550px]"
                  alt=""
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-10 sm:grid-cols-2 sm:place-items-center">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="flex"
              >
                <img
                  src={visionImg3}
                  className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] sm:w-[550px]"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h4 className="mb-4 text-[28px] font-semibold text-[#F97316] xl:text-[34px]">
                  ເປົ້າໝາຍຂອງພວກເຮົາ
                </h4>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="my-2 text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
                <p className="text-[16px] font-semibold text-[#374151] sm:text-[16px] xl:text-[18px]">
                  ພວກເຮົາມີຈຸດປະສົງຢາກໃຫ້ຄົນລາວທຸກຄົນມີ
                  ຄວາມຮູ້ຄວາມເຂົ້າໃຈຄວາມຮູ້ຄວາມເຂົ້າໃຈກ່ຽວ
                  ກັບການລົງທຶນແລະສາມາດສ້າງກຳໄລຈາກຕະ
                  ຫຼາດຮຸ້ນທົວໂລກເພື່ອສົງເສີມໃຫ້ປະເທດເຮົາມີ
                  ປະສິດທີພາບໃນດ້ານບຸກຄະລາກອນທາງດ້ານ ການເງິນທີ່ເກັ່ງຂື້ນ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
