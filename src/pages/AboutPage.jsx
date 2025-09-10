import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/slices/productSlice'

function AboutPage() {
    const { count } = useSelector((state) => state.product)
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const getUserDetails = async () => {
        try {

            const token = localStorage.getItem('token')

            const { data } = await axios.get('http://localhost:3000/api/users/profile',
                {
                    headers: {
                        "Authorization": `Bearer ${JSON.parse(token)}`
                    }
                }
            )
            dispatch(setUser(data?.data?.user))


        } catch (error) {
            console.log(error);
            if (error?.response?.data?.error?.message === 'invalid token' && error.status == 403) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                dispatch(setUser(null))
                navigate('/login')
            }

        }
    }

    useEffect(() => {
        const data = localStorage.getItem('imageFile')
        if (data) {
            setImage(data)
        }
        getUserDetails()
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