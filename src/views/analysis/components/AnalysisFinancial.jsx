import React from "react";
import PropTypes from "prop-types";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { FiChevronRight } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import Empty from "./../../../components/Empty";

export const AnalysisFinancial = ({ data }) => {
  const years = [];
  const values = [];
  for(const i of data?.dividendPerYear){
    years.push(i.year);
    values.push(i.value);
  }
  console.log(data)


  const option = {
    xAxis: {
      type: "category",
      data: years,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}%",
      },
      max: 1000,
      min: 0,
    },
    tooltip: {
      trigger: "axis",
      formatter: "{b}: {c}%",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%", // Increased bottom margin to accommodate legend
      containLabel: true,
    },
    legend: {
      show: true,
      bottom: "0%", // Positioned at the bottom
      left: "center",
      itemWidth: 15,
      itemHeight: 15,
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "ເງິນປັນຜົນ/ຫຸ້ນ",
        stack: "Min Max",
        data: values,
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: "#FFF599" },
            { offset: 0.6, color: "#FB923C" },
          ]),
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          fontSize: 12,
          distance: 5,
          valueAnimation: true,
        },
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 2000,
    animationEasing: "linear",
  };

  AnalysisFinancial.propTypes = {
    data: PropTypes.shape({
      dividend: PropTypes.shape({
        amount: PropTypes.number,
        appropriate: PropTypes.number,
        estimate: PropTypes.number,
        rat: PropTypes.number,
      }),
      financialRatios: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          value: PropTypes.arrayOf(PropTypes.number),
        }),
      ),
    }),
  };

  return (
    <div className="">
      <div className="h-[250px] rounded-lg pt-5 shadow-md sm:h-[290px] sm:w-full sm:px-5 md:h-[150px] lg:h-[160px]">
        <ul className="grid grid-cols-2 place-items-center gap-y-3 sm:grid-cols-2 sm:gap-y-4 md:grid-cols-4 md:gap-x-10">
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#BFDBFE] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">
              {data?.dividend?.amount ? data?.dividend?.amount : 0} USD
            </h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ຈຳນວນເງິນປັນຜົນ</p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#F5D0FE] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">
              {data?.dividend?.appropriate ? data?.dividend?.appropriate : 0} %
            </h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="text-center font-medium">
              ອັດຕາເງິນປັນຜົນເປັນເປີເຊັນ
            </p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#FECACA] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">
              {data?.dividend?.estimate ? data?.dividend?.estimate : 0} USD
            </h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ປັນຜົນຄາດຄະເນ</p>
          </li>
          <li className="flex h-[100px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#FED7AA] px-4 text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:h-[120px] sm:w-[240px] md:w-[160px] lg:w-[210px]">
            <h1 className="text-[24px] font-bold">
              {data?.dividend?.rat ? data?.dividend?.rat : 0} USD
            </h1>
            <hr className="border-1 mb-2 w-full border-[#64748B]" />
            <p className="font-medium">ລາຄາເໝາະສົມ</p>
          </li>
        </ul>
      </div>

      <div className="mt-10 rounded-lg px-1 py-4 shadow-md sm:px-8">
        <h1 className="font-semibold text-gray-800 sm:text-[20px]">
          ອັດຕາສ່ວນທາງການເງິນ ແລະ ເງິນປັນຜົນ
        </h1>
        <div className="h-[350px] w-full">
          <div>
            <ReactECharts option={option} className="h-full w-full" />
          </div>
        </div>
        <div className="mt-10 overflow-x-auto pb-10">
          <table className="w-max min-w-full sm:w-full">
            <tbody>
              {data?.financialRatios?.length > 0 ? (
                data?.financialRatios?.map((item,index) => (
                  <tr
                    key={index}
                    className="h-[70px] w-full border-b-2 text-[#003049]"
                  >
                    {item?.value?.map((val) => (
                      <td
                        key={val}
                        className="w-[100px] text-center text-[15px] font-medium"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <p className="font-semibold">{val}</p>
                          {/* <span className="text-[14px] font-semibold text-red-500">
                                                  +30.1 %
                                                </span> */}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <div className="flex items-center justify-center">
                      <Empty />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 rounded-lg px-1 py-4 shadow-md sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-deep-orange-500">
            Financial Ratios
          </h1>
        </div>

        <div className="mt-10 overflow-x-auto pb-10">
          {/* <table className="w-max min-w-full sm:w-full sm:min-w-max">
            <thead>
              <tr className="w-full border-b-2 text-gray-500">
                <th className="w-[200px] px-5 py-4 text-start text-[15px] font-medium sm:w-[270px] md:w-[300px]">
                  ສະກຸນເງິນ: USD
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2024
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2023
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2022
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2021
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2020
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2019
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2018
                </th>
                <th className="w-[120px] py-4 text-[16px] font-semibold sm:text-[15px] sm:font-medium">
                  2017
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[70px] w-full border-b-2 text-[#003049] sm:h-[50px] md:h-[70px]">
                <td
                  colSpan={9}
                  className="w-[100px] bg-[#4E7D98] pl-5 text-start text-[18px] font-medium text-white sm:text-[16px] md:text-[18px]"
                >
                  <p className="font-bold">ອັດຕາສ່ວນສະພາບຄ່ອງ</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-bold">ອັດຕາສ່ວນສະພາບຄ່ອງ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-semibold">
                  <p className="font-bold">ອັດຕາສ່ວນດ່ວນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາສ່ວນເງິນສົດ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049] sm:h-[50px] md:h-[70px]">
                <td
                  colSpan={9}
                  className="w-[100px] bg-[#4E7D98] pl-5 text-start text-[18px] font-medium text-white sm:text-[16px] md:text-[18px]"
                >
                  <p className="font-bold">ອັດຕາສ່ວນຄວາມສາມາດໃນການທຳກຳໄລ</p>
                </td>
              </tr>
              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລຂັ້ນຕົ້ນ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">58.35548%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລຈາກການດຳເນີນງານ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">18.41651%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ອັດຕາກຳໄລກ່ອນຫັກພາສິ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">Profit Margin</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">11.8494%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ROE ກ່ອນຫັກພາສີ</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
              </tr>

              <tr className="h-[70px] w-full border-b-2 text-[#003049]">
                <td className="w-[100px] pl-5 text-start text-[18px] font-medium sm:text-[16px] md:text-[18px]">
                  <p className="font-semibold">ຫລັງຫັກພາສີ ROE</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
                <td className="w-[100px] text-center text-[15px] font-medium">
                  <p className="font-medium">5.3738%</p>
                </td>
              </tr>
            </tbody>
          </table> */}

          <table className="w-max min-w-full sm:w-full">
            <tbody>
              {data?.financialRatios?.length > 0 ? (
                data?.financialRatios?.map((item) => (
                  <tr
                    key={item?.id}
                    className="h-[70px] w-full border-b-2 text-[#003049]"
                  >
                    {item?.value?.map((val) => (
                      <td
                        key={val}
                        className="w-[100px] text-center text-[15px] font-medium"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <p className="font-semibold">{val}</p>
                          {/* <span className="text-[14px] font-semibold text-red-500">
                                                  +30.1 %
                                                </span> */}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <div className="flex items-center justify-center">
                      <Empty />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
