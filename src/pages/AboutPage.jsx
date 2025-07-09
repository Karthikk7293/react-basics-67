import React from 'react'
import { useSelector } from 'react-redux'

function AboutPage() {
    const { count } = useSelector((state) => state.product)
    console.log(count);

    return (
        <div>AboutPage
            <p className='text-3xl text-center'> {count}</p>
        </div>
    )
}

export default AboutPage