import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [userData, setUserData] = useState({ email: "", password: "" })
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post('http://localhost:3000/api/users/login', userData)
            if (data?.success) {
                // console.log(data);

                localStorage.setItem('token', JSON.stringify(data.data.token))
                localStorage.setItem('user', JSON.stringify(data.data.user))
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div className='flex flex-col   w-full h-screen gap-4 py-4'>
            <p className='text-center text-2xl font-bold uppercase text-blue-600 '>Login form</p>
            <div className='border w-1/2 mx-auto rounded-lg shadow-lg h-1/2'>
                <form onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-between py-10' >
                    <div>
                        <div className='w-[80%] mx-auto my-2'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" value={userData.email} onChange={((e) => setUserData((prev) => ({ ...prev, email: e.target.value })))} className='border py-2 px-1 rounded' required />
                        </div>
                        <div className='w-[80%] mx-auto my-2'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" value={userData.password} onChange={((e) => setUserData((prev) => ({ ...prev, password: e.target.value })))} className='border py-2 px-1 rounded' required />
                        </div>
                    </div>

                    <div className='flex  justify-center items-center px-7 gap-4 '>
                        <button type='reset' className='border rounded shadow-md bg-red-400 hover:bg-red-600 text-white  uppercase py-2'>Cancel</button>
                        <button type='submit' className='border rounded shadow-md bg-green-400 hover:bg-green-600 text-white  uppercase py-2'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginPage