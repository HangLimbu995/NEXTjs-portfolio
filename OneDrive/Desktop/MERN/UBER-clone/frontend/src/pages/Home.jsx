import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' />
      <div className='w-screen h-screen'>
        <img className='h-full w-full bg-center bg-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='' />
      </div>
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full ' >
        <div className='relative h-[30%] bg-white p-6'>
          <h5 ref={panelCloseRef} className='absolute opacity-0 right-6 top-6 text-2xl ' onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 bg-gray-600 top-[50%] -translate-y-[50%] left-12 rounded-full'></div>
            <input type='text' placeholder='Add a pick-up location' className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              value={pickup}
              onChange={e => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input type='text' placeholder='Enter your destination' className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              value={destination}
              onChange={e => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white' >
          <LocationSearchPanel setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full px-3 py-8 pt-12 z-10 bottom-0 bg-white translate-y-full'>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full px-3 py-6 pt-12 z-10 bottom-0 bg-white translate-y-full'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full px-3 py-6 pt-12 z-10 bottom-0 bg-white translate-y-full'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={WaitingForDriverRef} className='fixed w-full px-3 py-6 pt-12 z-10 bottom-0 bg-white'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home
