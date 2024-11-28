import React, { useState } from 'react'
import logo from "/logoimg/logo.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
        })

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <div>
            <div className='p-5 h-screen flex flex-col justify-between'>
                <div>
                    <div className='flex items-center mb-8 gap-2'>
                        <img className='w-[30%]' src={logo} alt="App Logo" />
                        <div className='flex items-center gap-2 text-xl justify-center'><span className='text-lg font-bold'>Captain</span><FaArrowRight /></div>
                    </div>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
                        <div className='flex gap-4 mb-5'>
                            <input
                                required
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                type="text"
                                placeholder='firstname'
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                            />
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                type="text"
                                placeholder='lastname'
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                            />
                        </div>


                        <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
                        <input
                            required
                            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            type="email"
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                        <input
                            required
                            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here !</Link></p>
                </div>
                <div>
                    <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>and <span className='underline'>Terms of Services apply</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
