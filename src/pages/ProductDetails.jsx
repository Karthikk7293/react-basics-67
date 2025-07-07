import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetails } from '../api/products'

function ProductDetailsPage() {

    const [productDetails, setProductDetails] = useState(null)

    const { productId } = useParams()

    useEffect(() => {

        fetchProductDetails(productId).then((result) => {
            setProductDetails(result)
        })

    }, [productId])


    if (!productDetails) {
        return (
            <div className='flex justify-center items-center w-full h-screen text-4xl'>
                loading...
            </div>
        )
    }

    return (
        <div className='w-full min-h-screen bg-red-100 p-20' >
            <div className='flex justify-center items-center gap-4 h-full'>
                <div className='w-1/2 flex justify-center items-center border bg-white shadow-2xl rounded-xl'>
                    <img className='w-1/2' src={productDetails?.image} alt="" />
                </div>
                <div className='w-1/2 flex flex-col gap-3 bg-white p-3  h-full justify-around '>
                    <p className='text-xl text-green-500'>{productDetails.title}</p>
                    <p>$ {productDetails.price}</p>
                    <p>{productDetails.rating.rate} {productDetails.rating.count}</p>
                    <p>{productDetails.description}</p>
                </div>

            </div>

        </div>
    )
}

export default ProductDetailsPage