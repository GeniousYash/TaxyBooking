import React from 'react'
import logo from "/logoimg/logo.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-bottom bg-[url(/gallary/trafficlight.png)] h-screen pt-8 w-full flex justify-between flex-col'>
                <img className='w-[30%] ml-8' src={logo} alt="App Logo" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-2xl font-bold'>Get Started with TaxyGo</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
