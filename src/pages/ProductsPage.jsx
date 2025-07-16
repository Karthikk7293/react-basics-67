import React, { useEffect } from 'react'
import { fetchProducts } from '../api/products'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { priceSort, setPage } from '../redux/slices/productSlice'
import image from '../assets/react.svg'

function ProductsPage() {

    const dispatch = useDispatch()

    const { products, paginatedProducts, currentPage, loading, error } = useSelector((state) => state.product)

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
    console.log(currentPage);
    console.log(products);

    // page 0 count 5
    // [0 => 4]   start=page*count=0 end = start+count = 5(end-1)

    // page 1 count 5
    // [5 => 9]   start = page*count = 5 end= start+count=10(end-1)


    return (
        <div className='w-full min-h-screen bg-slate-300 p-16 flex justify-center gap-4 flex-wrap'>
            <img className='w-10 h-10' width={100} height={100} src={image} alt="" />
            <button onClick={(() => dispatch(priceSort()))} className='border bg-green-600'>sort</button>
            <button className='border bg-red-600 text-white' onClick={(() => dispatch(setPage(currentPage + 1)))}>count {currentPage}</button>
            {products.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="border w-[18rem] bg-white shadow-lg rounded-lg h-[30rem] my-3 overflow-hidden p-2 flex flex-col gap-2 ">
                    <img className='w-full h-auto' src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </Link>
            ))}
        </div>
    )
}

export default ProductsPage