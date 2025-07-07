import React from 'react'

function ProductCard({ image, rate, price, title }) {

    return (
        <div className='border mx-auto border-gray-300 pt-2 rounded-lg shadow-lg w-[15rem] h-[20rem] overflow-hidden'>
            <img className='w-100 h-[10rem] object-contain' src={image} alt="" />
            <div className='p-4'>
                <h3 className='text-lg font-bold '>{title} </h3>
                {/* <p>{item.description}</p> */}
                <p> $ {price} </p>
                <p>Rating: <span>{rate}</span> </p>
            </div>

        </div>
    )
}

export default ProductCard