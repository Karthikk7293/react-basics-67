import React from 'react'
import Header from '../components/Header'
import Component from '../components/Component'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/slices/productSlice'

function HomePage() {

    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.prdouct)
    console.log(count);

    const handleClick = () => {
        dispatch(increment(100))
    }

    return (
        <div className='w-screen h-screen bg-slate-300 '>
            this is home page
            <div className='flex justify-center items-center'>

                <button onClick={handleClick} className='border rounded bg-red-600 px-3 py-2 shadow-lg w-fit'>increment</button>
                <p className='text-4xl text-center'>{count}</p>
            </div>
            <Component />
        </div>
    )
}

export default HomePage