import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import LocationSearchPanel from '../components/LocationSearchPanel';
import logo from "/logoimg/logo.png"
import carpng from '/gallary/carLogo.png'
import bikepng from '/gallary/bikeLogo.png'
import autopng from '/gallary/auto.png'

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24,
                // opacity: 1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0,
                // opacity: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])


    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-[30%] absolute left-5 top-5' src={logo} alt="App Logo" />
            <div className='h-screen w-screen'>
                {/* Image for Temporary Use */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className=' flex flex-col justify-end absolute top-0 h-screen w-full'>

                <div className='h-[30%] px-6 py-2 bg-white relative'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='text-4xl'><RiArrowDownWideFill /></h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[55%] left-10 bg-gray-700 rounded-full">
                            <div className='w-[10px] h-[10px] rounded-full bg-gray-700 absolute top-[40%] !ml-[-3px]'></div>
                        </div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5'
                            type="text"
                            placeholder='Add a Pickup Location' />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                <h5 className='py-1 text-3xl flex items-center justify-center text-gray-400 absolute w-[93%] top-0' onClick={() => {
                    setVehiclePanel(false)
                }}><RiArrowDownWideFill /></h5>
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
                <div className='flex border-2 mb-2 active:border-black bg-gray-200 rounded-xl w-full items-center justify-between p-3'>
                    <img className='h-12' src={carpng} alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-bold text-lg flex gap-2'>TaxyGo <span className='flex items-center'><FaUser />4</span></h4>
                        <h5 className='font-normal text-xs text-gray-600'>2 mins away</h5>
                        <p className='text-md'>Affordable, compact, rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹193.20</h2>
                </div>
                <div className='flex border-2 mb-2 active:border-black bg-gray-200 rounded-xl w-full items-center justify-between p-3'>
                    <img className='h-16' src={bikepng} alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-bold text-lg flex gap-2'>Moto <span className='flex items-center'><FaUser />1</span></h4>
                        <h5 className='font-normal text-xs text-gray-600'>3 mins away</h5>
                        <p className='text-md'>Affordable motercycle rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹65.00</h2>
                </div>
                <div className='flex border-2 mb-2 active:border-black bg-gray-200 rounded-xl w-full items-center justify-between p-3'>
                    <img className='h-12' src={autopng} alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-bold text-lg flex gap-2'>TaxyGo Auto <span className='flex items-center'><FaUser />3</span></h4>
                        <h5 className='font-normal text-xs text-gray-600'>5 mins away</h5>
                        <p className='text-md'>Affordable auto rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹118.00</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
