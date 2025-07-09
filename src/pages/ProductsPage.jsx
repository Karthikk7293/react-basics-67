import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ProductsPage() {

    const dispatch = useDispatch()

    const { products, loading, error } = useSelector((state) => state.product)

    useEffect(() => {
        if (products.length === 0) {

            dispatch(fetchProducts())
        }

    }, [products])


    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center text-5xl'>
                loading...
            </div>
        )
    }

    return (
        <div className='w-full min-h-screen bg-slate-300 p-16 flex justify-center gap-4 flex-wrap'>
            {products.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="border w-[18rem] bg-white shadow-lg rounded-lg h-[30rem] my-3 overflow-hidden p-2 flex flex-col gap-2 ">
                    <img className='w-full h-auto' src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    {/* <p>{item.description}</p> */}
                </Link>
            ))}
        </div>
    )
}

export default ProductsPage