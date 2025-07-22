import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function AboutPage() {
    const { count } = useSelector((state) => state.product)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const data = localStorage.getItem('imageFile')
        if (data) {
            setImage(data)
        }

    }, [])


    const handleChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result
            setImage(imageData)
        }
        reader.readAsDataURL(file)

    }

    const handleUpload = (e) => {
        e.preventDefault()
        localStorage.setItem('imageFile', image)

    }

    return (
        <div>AboutPage
            <p className='text-3xl text-center'> {count}</p>
            <div className='w-1/3 h-52 my-10 border mx-auto shadow-md overflow-hidden'>

                {image && <div>
                    <img src={image} alt="" width={100} height={100} className='w-[150px] h-auto mx-auto object-contain' />
                </div>}
            </div>
            <div className='border shadow-lg text-center'>
                <form action="" onSubmit={handleUpload}>
                    <input onChange={handleChange} type="file" name="" id="" />
                    <button className='border px-2 py-1 bg-green-500 shadow-md w-28 my-10'>upload</button>
                </form>
            </div>

        </div>
    )
}

export default AboutPage