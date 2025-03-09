import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const captainData = {
        fullname: {
          firstname,
          lastname,
        },
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if (response?.data) {
        const data = response?.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        toast.success('Captain Register Successfully!')
        navigate('/captain-home')
      }

    } catch (error) {
      throw new Error(error?.message || error?.data?.message)
    }
    // setEmail('')
    // setPassword('')
    // setFirstname('')
    // setLastname('')
  }
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='h-screen max-w-[500px] p-5 flex  flex-col justify-between'>
        <div >
          <img className='w-16 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber' />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>Whant's our Captain's name</h3>
            <div className='flex justify-between gap-3 mb-4'>
              <input required type='text' placeholder='Firstname'
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              />
              <input type='text' placeholder='Lastname'
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>Whant's our Captain's email</h3>
            <input required type='email' placeholder='captain@gmail.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required type='password' placeholder='******'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            />
            <div className='flex justify-between gap-3 mb-4'>
              <div>
                <h3 className='text-lg font-medium mb-2'>Vehicle Color</h3>
                <input required type='text' placeholder='Vehicle Color'
                  value={vehicleColor}
                  onChange={e => setVehicleColor(e.target.value)}
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                />
              </div>
              <div>
                <h3 className='text-lg font-medium mb-2'>Vehicle Plate</h3>
                <input required type='text' placeholder='Vehicle Plate'
                  value={vehiclePlate}
                  onChange={e => setVehiclePlate(e.target.value)}
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                />
              </div>
            </div>
            <div className='flex justify-between gap-3 mb-4'>
              <div>
                <h3 className='text-lg font-medium mb-2'>Vehicle Capacity</h3>
                <input required type='Number' placeholder='Vehicle Capacity'
                  value={vehicleCapacity}
                  onChange={e => setVehicleCapacity(e.target.value)}
                  className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                />
              </div>
              <div>
                <h3 className='text-lg font-medium mb-2'>Vehicle Type</h3>
                <select required value={vehicleType} onChange={e => setVehicleType(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="motorcycle">MotorCycle</option>
                </select>
              </div>
            </div>
            <button type='submit'
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg '
            >Create Captain Account</button>
          </form>
          <p className='text-center'>Already have an Account? <Link to={'/captain-login'} className='text-blue-600 '>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight' >
            This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
