import React from 'react'
import Empty from "../../../components/Empty";
const ShowStatement = ({ data }) => {
    // console.log(data)
    return (
        <div className="w-full overflow-y-auto">
            <table className=" table-auto w-full">
                <tbody>
                    {data?.length > 0 ? (
                        data?.map((item) => {
                            if (item.value.length > 0) {
                                return (
                                    <tr
                                        key={item?.id}
                                        className="w-full border-b-2 text-[#003049] "
                                    >
                                        {item?.value?.map((val,index) => (
                                            <td
                                                key={index}
                                                className={`${index === 0 ? 'w-[100px] lg:w-[200px] bg-white text-start sticky left-0 ':'text-end'} py-3 px-1 text-sm border-b-2 border-[#003049]`}
                                            >
                                                {val !== "" ? val : "-"}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            }
                        })
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
    )
}

export default ShowStatement