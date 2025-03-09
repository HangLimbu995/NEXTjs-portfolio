import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='absolute right-6 top-8 text-2xl' onClick={() => props.setConfirmRidePanel(false)}>
                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex justify-between flex-col items-center'>
                <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s' alt='ride.png' />

                <div className='w-full mt-5' >
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className='text-lg ri-currency-line'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'>₹193.2</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash payment</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                }} className='w-full mt-5 bg-green-600  text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide
