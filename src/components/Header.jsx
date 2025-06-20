import React from 'react'

const Header = () => {
    return (
        <div className='w-full sm:bg-premier-blue h-20 border-2 border-red-700 md:bg-[#1ae096] flex justify-center items-center '>
            <div className="text-3xl  h-full border flex items-center border-gray-900 text-center uppercase">
                <p className=' '>logo</p>
            </div>
            <div className="flex w-full  h-full justify-evenly items-center text-center border border-green-700">
                <a className='text-blue-600 w-fit px-4 py-1 capitalize hover:border hover:border-blue-600 hover:bg-blue-200 rounded-xl hover:shadow-xl  duration-700 ' href="">home</a>
                <a className='text-blue-600 w-fit px-4 py-1 capitalize hover:border hover:border-blue-600 hover:bg-blue-200 rounded-xl hover:shadow-xl  duration-700' href="">about</a>
            </div>
        </div>
    )
}

export default Header
