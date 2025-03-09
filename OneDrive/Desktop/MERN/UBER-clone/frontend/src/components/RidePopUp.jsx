import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='absolute right-6 top-8 text-2xl' onClick={() => props.setRidePopupPanel(false)}>
                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <img className='h-12 rounded-full object-cover w-10' src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww' alt='profile.png' />
                    <h2 className='text-lg font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex justify-between flex-col items-center'>

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
                <div className='w-full flex items-center justify-evenly mt-4'>
                    <button onClick={() => {
                        props.setRidePopupPanel(false)
                    }} className=' bg-gray-200  text-gray-700 font-semibold py-3 px-8  rounded-lg'>Ignore</button>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanle(true)
                    }} className=' bg-green-600  text-white font-semibold py-3 px-8 rounded-lg'>Accept</button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp
