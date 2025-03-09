import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanleRef = useRef(null)

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanle, setConfirmRidePopupPanle] = useState(false)

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])
  useGSAP(function () {
    if (confirmRidePopupPanle) {
      gsap.to(confirmRidePopupPanleRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanleRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanle])


  return (
    <div className='h-screen'>
      <div className='fixed w-full top-0 p-3 flex justify-between items-center'>
        <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' />
        <Link to={'/captain/logout'} className=' h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full'>
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full bg-center bg-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='' />
      </div>

      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full  px-2 py-6 pt-8 z-10 bottom-0 bg-white translate-y-full'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanle={setConfirmRidePopupPanle} />
      </div>
      <div ref={confirmRidePopupPanleRef} className='fixed w-full h-screen px-2 py-6 pt-8 z-10 bottom-0 bg-white translate-y-full'>
        <ConfirmRidePopUp setConfirmRidePopupPanle={setConfirmRidePopupPanle} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome
