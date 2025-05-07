import React from 'react'
import { Helmet } from 'react-helmet'
import { TbFaceIdError } from "react-icons/tb";
const NotFound = () => {
    return (
        <div className='w-full h-[60vh] pt-20 lg:pt-24 pb-8'>
            <Helmet>
                <title> 404 Not Found - SJI Investment</title>
            </Helmet>
            <p className=' text-lg font-bold text-center'>Oop!</p>
            <p className=' text-lg font-bold text-center'>404 Not Found</p>
            <div className=' flex justify-center items-center mt-3'>
                <TbFaceIdError size={60} />
            </div>
        </div>
    )
}

export default NotFound