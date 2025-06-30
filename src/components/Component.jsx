import React, { useEffect, useState } from 'react'

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
                    <div key={item.id} className='border mx-auto border-gray-300 pt-2 rounded-lg shadow-lg w-[15rem] h-[20rem] overflow-hidden'>
                        <img className='w-100 h-[10rem] object-contain' src={item.image} alt="" />
                        <div className='p-4'>
                            <h3 className='text-lg font-bold '>{item.title} </h3>
                            {/* <p>{item.description}</p> */}
                            <p> $ {item.price} </p>
                            <p>Rating: <span>{item.rating.rate}</span> </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default Component