import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const SocialMedia = [
    {
        link: "",
        image: "https://static.vecteezy.com/system/resources/previews/018/930/695/non_2x/twitter-logo-twitter-icon-transparent-free-free-png.png"
    },
    {
        link: "",
        image: "https://thumbs.dreamstime.com/b/facebook-logo-transparent-white-background-web-use-printing-purpose-facebook-logo-web-print-264747659.jpg"
    },
    {
        link: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s"
    },
    {
        link: "",
        image: "https://static.vecteezy.com/system/resources/thumbnails/042/387/654/small/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"
    },

]

const Banner = () => {
    return (
        <div className='w-full h-screen  grid sm:grid-cols-1 md:grid-cols-2 xxl:bg-black ' >
            <div className=" px-10 flex flex-col justify-center gap-12">
                <h4 className='text-red-400'>wellcome to <span className='text-2xl font-extrabold uppercase'>swiggy!</span></h4>
                <p className='text-red-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident commodi officiis cumque iste, odit est delectus corporis illo quibusdam vel, necessitatibus asperiores eius excepturi molestiae, deleniti officia omnis vitae.</p>
                <p className='text-green-500 flex justify-start items-center gap-8'>subscribe to newsletter <button className='border w-fit px-4 rounded text-red-500 hover:text-white hover:bg-red-500'> click me</button> </p>
                <div className='flex justify-start items-center gap-4 '>
                    <p className='w-fit text-red-700 uppercase'>follow :</p>
                    {SocialMedia.map((item) => (
                        <a key={item.image} className='w-10 h-10 border p-1 hover:border-red-500  rounded-full overflow-hidden' href={item.link}>
                            <img className='w-full h-full  ' src={item.image} alt="" />
                        </a>
                    ))}
                    <TiSocialLinkedinCircular className='w-10 h-10  text-green-600' />
                </div>
            </div>
            <div className=" flex justify-center items-center ">
                <img className='w-2/3' src="https://www.pngplay.com/wp-content/uploads/9/Meal-Transparent-Images.png" alt="" />
            </div>
        </div>
    )
}

export default Banner