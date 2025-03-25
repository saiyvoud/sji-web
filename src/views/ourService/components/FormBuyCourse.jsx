import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";

import stopWatch from "../../../assets/icons/stopwatch.png";

import qrBCEL from "../../../assets/qrBcel.png";
import { useNavigate } from "react-router-dom";

export const FormBuyCourse = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [phone, setPhone] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const [formNo, setFormNo] = useState(1);

  const nextForm = () => {
    setFormNo(formNo + 1);
  };
  const prevForm = () => {
    setFormNo(formNo - 1);
  };
  return (
    <div className="h-full">
      <Button
        onClick={handleOpen}
        style={{
          background: "#FB923C",
          width: "100%",
          fontFamily: "Noto sans lao",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        ສະໝັກ
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card
          className="mx-auto max-h-[90vh] w-full overflow-y-auto"
          style={{ fontFamily: "Noto sans lao" }}
        >
          {formNo == 1 && (
            <div>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h4"
                  color="orange"
                  style={{
                    fontFamily: "Noto sans lao",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  ຂໍ້ມູນຜູ້ສະໝັກຄອຣ໌ສ
                </Typography>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="w-full">
                    <h4 className="mb-4 text-[18px] font-semibold text-gray-700">
                      ເພີ່ມຮູບພາບ
                    </h4>
                    <div className="w-full rounded-lg border-2 border-gray-400 p-3 md:w-[350px] md:p-6">
                      <div className="flex h-[300px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 md:h-[400px] md:w-[300px]">
                        <input
                          type="file"
                          accept="image/*"
                          className="input-file"
                          hidden
                          onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name);
                            if (files) {
                              setImage(URL.createObjectURL(files[0]));
                            }
                          }}
                        />
                        {image ? (
                          <div className="relative z-10 h-full w-full">
                            <img
                              src={image}
                              className="h-full w-full object-cover"
                              alt={fileName}
                            />
                            <MdDelete
                              onClick={() => setImage(null)}
                              className="absolute right-2 top-2 z-50 cursor-pointer text-[20px] text-red-500"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              document.querySelector(".input-file").click()
                            }
                            className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
                          >
                            <MdOutlineFileUpload className="text-[100px] text-gray-700" />
                            <p className="text-[24px] font-semibold text-blue-500">
                              ເລືອກຮູບພາບ
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mt-10">
                      <Typography
                        style={{ fontFamily: "Noto sans lao" }}
                        className="mb-2"
                        variant="h6"
                      >
                        ຊື່
                      </Typography>
                      <Input label="Email" size="lg" />
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Noto sans lao",
                          marginTop: "20px",
                        }}
                        className="mb-2"
                        variant="h6"
                      >
                        ນາມສະກຸນ
                      </Typography>
                      <Input label="ນາມສະກຸນ" size="lg" />
                    </div>
                    <div className="mt-[20px]">
                      <p className="text-md font-bold">ເບີໂທ</p>
                      <PhoneInput
                        country={"la"}
                        inputStyle={{
                          background: "#F3F4F6",
                          width: "100%",
                          padding: "20px 0 20px 45px",
                          color: "#000",
                          borderRadius: "4px",
                        }}
                        buttonStyle={{
                          backgroundColor: "#F3F4F6",
                          borderRadius: "5px",
                          color: "#000000",
                        }}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Noto sans lao",
                          marginTop: "20px",
                        }}
                        className="mb-2"
                        variant="h6"
                      >
                        ອີເມວ
                      </Typography>
                      <Input label="ອີເມວ" size="lg" />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex justify-end">
                  <button
                    onClick={nextForm}
                    className="rounded-md bg-[#0C4A6E] px-8 py-2 text-white"
                  >
                    Next
                  </button>
                </div>
              </CardFooter>
            </div>
          )}

          {formNo == 2 && (
            <div>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h4"
                  color="orange"
                  style={{
                    fontFamily: "Noto sans lao",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  ຊ່ອງທາງການຊຳລະ
                </Typography>
                <div className="flex justify-between">
                  <div className="flex w-full flex-col items-center">
                    <h4 className="mb-4 text-[18px] font-semibold text-gray-700">
                      ເພີ່ມຮູບພາບ
                    </h4>
                    <div className="w-[350px] rounded-lg border-2 border-gray-400 p-6 sm:flex sm:h-[330px] sm:w-[280px] sm:items-center sm:justify-center sm:px-3">
                      <div className="justify flex h-[400px] w-[300px] flex-col items-center rounded-lg border-2 border-dashed border-gray-400 sm:h-[300px] sm:w-[290px]">
                        <input
                          type="file"
                          accept="image/*"
                          className="input-file"
                          hidden
                          onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name);
                            if (files) {
                              setImage(URL.createObjectURL(files[0]));
                            }
                          }}
                        />
                        {image ? (
                          <div className="relative z-10 h-full w-full">
                            <img
                              src={image}
                              className="h-full w-full object-cover"
                              alt={fileName}
                            />
                            <MdDelete
                              onClick={() => setImage(null)}
                              className="absolute right-2 top-2 z-50 cursor-pointer text-[20px] text-red-500"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              document.querySelector(".input-file").click()
                            }
                            className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
                          >
                            <MdOutlineFileUpload className="text-[100px] text-gray-700" />
                            <p className="text-[24px] font-semibold text-blue-500">
                              ເລືອກຮູບພາບ
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex h-full w-full items-center justify-center">
                      <img src={qrBCEL} alt="qr code" className="w-[300px]" />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex justify-around">
                  <button
                    onClick={prevForm}
                    className="rounded-md bg-[#003049] px-8 py-2 font-semibold text-white"
                  >
                    ກັບຄືນ
                  </button>
                  <button
                    onClick={nextForm}
                    className="rounded-md bg-[#FB923C] px-8 py-2 font-semibold text-white"
                  >
                    Submit
                  </button>
                </div>
              </CardFooter>
            </div>
          )}

          {formNo == 3 && (
            <div>
              <CardBody className="flex flex-col items-center gap-4">
                <Typography
                  variant="h4"
                  color="orange"
                  style={{
                    fontFamily: "Noto sans lao",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  ລໍຖ້າການອະນຸມັດການຊຳລະເງິນຈາກແອດມິນ
                </Typography>

                <div className="my-12 flex h-[230px] w-[230px] items-center justify-center rounded-full bg-gray-100">
                  <img src={stopWatch} alt="" className="w-[200px]" />
                </div>
                <div className="text-center font-medium text-[#F97316]">
                  <p>ການອະນຸມັດການຊຳລະເງິນໂດຍຈະໃຊ້ເວລາໂດຍປະມານ 3-5 ມື້</p>
                  <p>ຕ້ອງການການຊ່ວຍເຫຼືອຕິດຕໍ່ 20 55847928</p>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex justify-around">
                  <button
                    onClick={() => navigate("/ourService/course")}
                    className="rounded-md bg-[#003049] px-8 py-2 font-semibold text-white"
                  >
                    ກັບໜ້າຄອຣ໌ສ
                  </button>
                  <button
                    onClick={() => navigate("/home")}
                    className="rounded-md bg-[#FB923C] px-8 py-2 font-semibold text-white"
                  >
                    ກັບໜ້າຫຼັກ
                  </button>
                </div>
              </CardFooter>
            </div>
          )}
        </Card>
      </Dialog>
    </div>
  );
};
