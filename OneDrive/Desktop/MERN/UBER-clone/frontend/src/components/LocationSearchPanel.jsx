import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "24B, Near Kapoor's cafe, Sherians Coding School, Bhopal",
        "22C, Near Malhotra's cafe, Sherians Coding School, Bhopal",
        "18A, Near Singhania's cafe, Sherians Coding School, Bhopal",
        "20D, Near Sharma's cafe, Sherians Coding School, Bhopal",
    ]

    return (
        <div >
            {locations.map((elem, index) => (
                <div key={index} onClick={() => {
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex items-center justify-start my-4 border-2 border-gray-50 active:border-black rounded-xl p-1'>
                    <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full mr-2 '><i className='ri-map-pin-fill text-xl'></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))}

        </div>
    )
}

export default LocationSearchPanel
