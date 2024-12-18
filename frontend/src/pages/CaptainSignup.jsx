import React, { useState } from 'react'
import logo from "/logoimg/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');


    const { captain, setCaptain } = React.useContext(CaptainDataContext)


    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
    }

    return (
        <div>
            <div className='p-5 h-[100%] flex flex-col justify-between'>
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

                        <h3 className='text-base font-medium mb-2'>Vehicle Information :-</h3>
                        <div className='flex gap-4 mb-5'>
                            <input
                                required
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                type="text"
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => {
                                    setVehicleColor(e.target.value)
                                }}
                            />

                            <input
                                required
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                type="text"
                                placeholder='Number Plate'
                                value={vehiclePlate}
                                onChange={(e) => {
                                    setVehiclePlate(e.target.value)
                                }}
                            />
                        </div>
                        <div className='flex gap-4 mb-5'>
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                type="number"
                                placeholder='Vehicle Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => {
                                    setVehicleCapacity(e.target.value)
                                }}
                            />
                            <select
                                required
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                                value={vehicleType}
                                onChange={(e) => {
                                    setVehicleType(e.target.value)
                                }}
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="moto">Moto</option>
                            </select>
                        </div>



                        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here !</Link></p>
                </div>
                <div className='mt-10'>
                    <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>and <span className='underline'>Terms of Services apply</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
