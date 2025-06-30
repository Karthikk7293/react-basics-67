import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductDetails() {
    const [mount, setMount] = useState(1)
    const [productDetails, setProductDetails] = useState({})

    const getProductDetails = async (id) => {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log({ result });
        setProductDetails(result.data)

    }

    useEffect(() => {
        if (mount) {
            getProductDetails(mount)
        }

    }, [mount])


    return (
        <div className={` w-full border bg-slate-200  `}>
            <div className=" flex justify-center items-center  py-8">
                <button className='border rounded bg-red-600 w-44 py-2 text-white uppercase ' onClick={(() => setMount(mount + 1))} >fetch products details{mount}</button>
            </div>
            <div className='flex gap-5'>
                <div className='w-1/2 border flex justify-center items-center'>
                    <div className='w-fit h-auto border rounded-xl shadow-xl'>
                        <img className='w-1/2 h-auto mx-auto' src={productDetails?.image} alt="" />
                    </div>
                </div>

                <div className='w-1/2 border shadow-2xl p-5 flex flex-col gap-3'>
                    <h2 className='text-3xl'>{productDetails?.title}</h2>
                    <p>{productDetails?.description}</p>
                    <p> $ {productDetails?.price} </p>
                    <p>Rating: <span>{productDetails?.rating?.rate}</span> </p>
                </div>

            </div>
        </div>

    )
}

export default ProductDetails