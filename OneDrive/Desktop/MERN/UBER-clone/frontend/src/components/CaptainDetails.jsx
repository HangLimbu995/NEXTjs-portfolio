import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
    <div className='flex items-center justify-between'>
    <div className='flex items-center justify-start gap-4'>
      <img className='h-10 w-10 rounded-full object-cover' src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww' alt='' />
      <h4 className='text-lg font-medium'>Harsh Patel</h4>
    </div>
    <div>
      <h4 className='text-xl font-semibold'>₹298.20</h4>
      <p className='text-sm text-gray-600r'>Earned</p>
    </div>
  </div>
  <div className='flex justify-center gap-4 items-start mt-8 p-4 bg-gray-100 rounded-full'>
    <div className='text-center'>
      <i className='text-2xl font-thin ri-timer-2-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
    </div>
    <div className='text-center'>
      <i className='text-2xl font-thin ri-speed-up-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
    </div>
    <div className='text-center'>
      <i className='text-2xl font-thin ri-booklet-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
    </div>
  </div>
    </div>
  )
}

export default CaptainDetails
