import React from 'react'

const HoverNav = () => {
  return (
    <div style={{zIndex: 999, minHeight: '70vh'}} className='absolute w-full bg-red-600 top-[60px] left-0 grid place-items-center p-4 '>
 <div className='w-[90%] h-full bg-blue-500 py-4 px-6 flex gap-2 flex-wrap'>
 <h3>sofa cleaning service</h3>
 <h3>carpet cleaning service</h3>
 <h3>pest control service</h3>
 <h3>painting service</h3>
 <h3>marble polishing service</h3>
 </div>
    </div>
  )
}

export default HoverNav