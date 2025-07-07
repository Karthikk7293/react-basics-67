import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Component() {
    const [mount, setMount] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (mount) {

            fetch('https://fakestoreapi.com/products').then((response) => response.json()).then((result) => {
                console.log({ result });
                setProducts(result)
            })
        }

    }, [mount])


    return (
        <div className={` w-full border bg-slate-200  `}>
            <div className=" flex justify-center items-center  py-8">
                <button className='border rounded bg-red-600 w-36 py-2 text-white uppercase ' onClick={(() => setMount(true))} >fetch products</button>
            </div>
            <div className='flex  flex-wrap gap-4 '>
                {products?.map((item) => (
                    <ProductCard key={item?.id} image={item?.image} price={item?.price} title={item?.title} rate={item?.rating?.rate} />
                ))}
            </div>
        </div>

    )
}

export default Component