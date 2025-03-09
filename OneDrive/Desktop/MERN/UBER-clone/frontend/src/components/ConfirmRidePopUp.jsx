import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState()

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div >
            <div className='flex justify-between items-center text-center mb-8'>
                <h3 className='text-2xl font-semibold '>Confirm this ride to <span className='text-3xl text-green-400 font-semibold'>Start</span></h3>
                <h5 className=' text-2xl' onClick={() => props.setConfirmRidePopupPanle(false)}>
                    <i className="ri-arrow-down-wide-line"></i>
                </h5>
            </div>

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
                <div className='mt-6 w-full'>
                    <form onSubmit={submitHandler} className='flex flex-col gap-2'>
                        <input value={otp} onChange={e => setOtp(e.target.value)} type='text' placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-4' />
                        <Link to={'/captain-riding'} className='w-full bg-green-600 text-lg flex justify-center  text-white font-semibold py-3 px-8 mt-4 rounded-lg'>Confirm</Link>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanle(false)
                            props.setRidePopupPanel(false)
                        }} className=' w-full bg-red-600  text-white text-lg font-semibold py-3 px-8 rounded-lg'>Cancle</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
