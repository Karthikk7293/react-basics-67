import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const NavLink = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "about",
        text: "About"
    },
    {
        url: "contact",
        text: "Contact"
    },
    {
        url: "",
        text: "Today Special"
    },
    {
        url: "",
        text: " Special"
    },
]

const Header = () => {

    const handleClick = () => {
        localStorage.setItem('status', JSON.stringify(true))
    }

    return (
        <header className=' grid md:grid-cols-2 sm:grid-cols-[20%_80%] lg:grid-cols-2 xl:grid-cols-2 gap-5  w-full h-20 border-b-2 shadow-xl '>
            <div className=' h-full  flex justify-around items-center  '>
                <img className='w-16 ml-10 ' src="https://static.vecteezy.com/system/resources/previews/005/513/590/non_2x/catering-quality-food-design-premium-logo-vector.jpg" alt="" />
                <h2 onClick={handleClick} className='text-center cursor-pointer  relative mx-auto w-fit text-2xl uppercase font-extrabold italic text-red-500 border'>swiggy!
                    <span className='text-red-700 absolute text-[8px] -bottom-4 -left-10   '>everything is delicious</span>
                </h2>
            </div>
            <div className=' h-full text-center flex justify-around items-center'>
                {NavLink.map((item) => (
                    <Link key={item.text} className='text-red-400 hover:text-red-600   ' children={item.text} to={item.url} />
                ))}
            </div>

        </header>
    )
}

export default Header
