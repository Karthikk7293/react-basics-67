import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState({ name: "", email: "", password: "", confirmPass: "" })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            return setError((prev) => ({ ...prev, name: 'please enter your name' }))
        }
        setError((prev) => ({ ...prev, name: '' }))
        if (!email) {
            return setError((prev) => ({ ...prev, email: 'please enter your email' }))
        }
        setError((prev) => ({ ...prev, email: '' }))
        if (!password) {
            return setError((prev) => ({ ...prev, password: 'please enter a password' }))
        }
        setError((prev) => ({ ...prev, password: '' }))
        if (!confirmPass) {
            return setError((prev) => ({ ...prev, confirmPass: 'please enter your confirm password' }))
        }

        if (password !== confirmPass) {
            return setError((prev) => ({ ...prev, confirmPass: 'your confirm password does not match' }))
        }
        setError((prev) => ({ ...prev, confirmPass: '' }))

        console.log({ name, email, password, confirmPass });

    }



    return (
        <div className='border h-screen bg-slate-200 py-10'>
            <h3 className='text-2xl text-center font-bold uppercase'>Registration form</h3>
            <div className='w-full sm:w-2/3 mx-auto'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='relative '>
                        <label className='font-semibold ' htmlFor="">Name</label>
                        <input value={name} onChange={((e) => setName(e.target.value))} className={`border ${error.name ? "border-red-500 border-2" : "border-gray-800"}  rounded-md px-5 py-2 my-3`} type="text" placeholder='Please enter your name' />
                        <p className='text-red-500 absolute text-xs -bottom-1 right-0 text-end'>{error.name}</p>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold ' htmlFor="">Email</label>
                        <input value={email} onChange={((e) => setEmail(e.target.value))} className={`border ${error.email ? "border-red-500 border-2" : "border-gray-800"}  rounded-md px-5 py-2 my-3`} type="email" placeholder='Please enter your Email Address' />
                        <p className='text-red-500 absolute text-xs -bottom-1 right-0 text-end'>{error.email}</p>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold ' htmlFor="">Password</label>
                        <input value={password} onChange={((e) => setPassword(e.target.value))} className={`border ${error.password ? "border-red-500 border-2" : "border-gray-800"}  rounded-md px-5 py-2 my-3`} type={showPassword ? "text" : "password"} placeholder='Please enter your Password' />
                        <p className='text-red-500 absolute text-xs -bottom-1 right-0 text-end'>{error.password}</p>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold ' htmlFor="">Confirm Password</label>
                        <input value={confirmPass} onChange={((e) => setConfirmPass(e.target.value))} className={`border ${error.confirmPass ? "border-red-500 border-2" : "border-gray-800"}  rounded-md px-5 py-2 my-3`} type={showPassword ? "text" : "password"} placeholder='Please enter confirm Password' />
                        <p className='text-red-500 absolute text-xs -bottom-1 right-0 text-end'>{error.confirmPass}</p>
                        <input onChange={((e) => {
                            if (e.target.checked) {
                                setShowPassword(true)
                            } else {
                                setShowPassword(false)
                            }
                        })} type="checkbox" name="" id="" />

                    </div>
                    <div className='flex justify-center items-center  gap-5 mt-10'>
                        <button type='reset' className='border uppercase border-red-700 bg-red-300 text-white hover:bg-red-500 px-5 py-1 rounded-md '>Cancel</button>
                        <button type='submit' className='border uppercase border-green-700 bg-green-300 text-white hover:bg-green-500 px-5 py-1 rounded-md '>submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form