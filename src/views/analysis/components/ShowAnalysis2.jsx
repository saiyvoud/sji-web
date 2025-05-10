import React, { useEffect } from 'react'
import ShowStatement from './ShowStatement'
import { useState } from 'react'
const ShowAnalysis2 = ({ data }) => {
    // console.log(data)
    const [showRecieve, setShowRecieve] = useState("");
    const [reciveIndex, setReciveIndex] = useState(0);
    const [currency, setCurrency] = useState("ລ້ານກີບ");
    const [typeStatement, setTypeStatement] = useState("quarter");
    const [statement, setStatement] = useState([]);
    // console.log(typeStatement);
    useEffect(() => {
        setShowRecieve("income")
        setCurrency(data?.fields[reciveIndex]?.currencyUnit)
    }, [])
    useEffect(() => {
        setCurrency(data?.fields[reciveIndex]?.currencyUnit)
        if (typeStatement === "quarter") {
            setStatement(data?.value[reciveIndex]?.quarter)
        } else {
            setStatement(data?.value[reciveIndex]?.year)
        }
    }, [reciveIndex, typeStatement])
    return (
        <div className="mb-20 mt-10 h-full w-full bg-white sm:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-x-5 md:gap-x-2 lg:gap-x-3">
                <div className="mb-3 flex w-full items-center justify-start gap-x-3 sm:mb-0 md:gap-x-2">
                    {data?.fields?.map((item, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setShowRecieve(item?.field);
                                    setReciveIndex(index);
                                }}
                                className={`rounded-md px-2 py-2 text-[12px] font-medium sm:h-[35px] sm:w-[180px] sm:px-5 sm:text-[14px] md:h-[40px] md:w-[200px] md:px-2 ${showRecieve === item.field ? "bg-[#f97316]" : "border-2 border-[#f97316] text-[#f97316]"}`}
                            >
                                {item?.field}
                            </button>
                        )
                    })}
                </div>
                <div className=" flex justify-end items-center gap-3">
                    <div>
                        <p className=' text-black'>ຫົວໜ່ວຍເງິນຕາ: {currency}</p>
                    </div>
                    <select
                        onChange={(e) => setTypeStatement(e.target.value)}
                        value={typeStatement}
                        className="px-3 rounded-md border-2 border-[#f97316] bg-[#fff] text-[18px] font-medium text-[#f97316] sm:h-[35px] md:h-[40px]">
                        <option value="quarter">ໄຕມາດ</option>
                        <option value="year">ປະຈຳປີ</option>
                    </select>
                </div>
            </div>
            <div className="mt-8 w-full rounded-lg p-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <ShowStatement data={statement} />
                {/* {showRecieve === "Income Statement" && (< ShowStatement data={data?.data?.financialFieldValue?.value[0]} />)}
                {showRecieve === "Balance Sheet" && (< ShowStatement data={data?.data?.financial?.balanceSheet} />)}
                {showRecieve === "Cash Flow" && (<ShowStatement data={data?.data?.financial?.cashFlow} />)} */}
            </div>
        </div>
    )
}

export default ShowAnalysis2