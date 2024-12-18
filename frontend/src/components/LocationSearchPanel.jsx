import React from 'react'
import { FaMapPin } from "react-icons/fa6";

const LocationSearchPanel = (props) => {
    // sample array for location
    const locations = [
        "24B, Near ByPass Road, Dharuhera, Haryana",
        "22B, Near PizzaHut, Jaipur, Rajasthan",
        "38B, Near ByPass Road, Badarpur Border, Delhi",
        "128,1st floor, Genesis Mall, Rajasthan, Delhi",
    ];
    return (
        <div>
            {
                locations.map(function (e, i) {
                    return <div key={i} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl justify-center my-2 items-start'>
                        <h3 className='bg-[#eee] h-[40px] w-[40px] flex items-center justify-center rounded-full'>{<FaMapPin />}</h3>
                        <h4 className='font-medium'>{e}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel
