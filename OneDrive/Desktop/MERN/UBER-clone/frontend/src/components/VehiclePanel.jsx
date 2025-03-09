import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <h5 className='absolute right-6 top-8 text-2xl' onClick={() => props.setVehiclePanelOpen(false)}>
                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className='flex p-3 border-2 active:border-black rounded-xl items-center justify-between w-full mb-2'>
                <img className='h-16' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s' alt='' />
                <div className='w-1/2'>
                    <h4 className='text-ase font-medium'>UberGo <span><i className='ri-user-3-fill '></i>4</span></h4>
                    <h5 className='text-sm font-medium'>2 mins away</h5>
                    <p className='text-xs font-normal text-gray-700'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className='flex p-3 border-2 active:border-black rounded-xl items-center justify-between w-full mb-2'>
                <img className='h-16' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt='' />
                <div className='w-1/2 '>
                    <h4 className='text-ase font-medium'>Moto <span><i className='ri-user-3-fill '></i>1</span></h4>
                    <h5 className='text-sm font-medium'>3 mins away</h5>
                    <p className='text-xs font-normal text-gray-700'>Affordable, motercycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className='flex p-3 border-2 active:border-black rounded-xl items-center justify-between w-full mb-2'>
                <img className='h-16' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' alt='' />
                <div className='w-1/2 ml-4'>
                    <h4 className='text-ase font-medium'>UberAuto <span><i className='ri-user-3-fill '></i>3</span></h4>
                    <h5 className='text-sm font-medium'>3 mins away</h5>
                    <p className='text-xs font-normal text-gray-700'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.86</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
