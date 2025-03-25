import React from 'react'
import Empty from "../../../components/Empty";
const ShowStatement = ({ data }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-max min-w-full">
                <tbody>
                    {data?.length > 0 ? (
                        data?.map((item) => (
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
                                            <p className="font-semibold">{val !== "" ? val : "-"}</p>
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
    )
}

export default ShowStatement