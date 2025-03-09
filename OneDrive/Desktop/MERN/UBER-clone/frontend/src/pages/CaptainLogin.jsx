import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const captainData = {
        email,
        password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
      if (response?.data) {
        const data = response?.data
        setCaptain(data.captain)
        toast.success('Captain Login Successfully!')
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      toast.error(error || error?.data?.message || error?.message || 'Invalid email or password!')
      throw new Error(error)
    }
  }
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='h-screen max-w-[500px] p-7 flex  flex-col justify-between'>
        <div >
          <img className='w-16 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber' />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>Whant's your email</h3>
            <input required type='email' placeholder='captain@gmail.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required type='password' placeholder='******'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            />
            <button type='submit'
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg '
            >Login</button>
          </form>
          <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600 '>Register as a Captain</Link></p>
        </div>
        <div>
          <Link to={'/login'}
            className='bg-[#d5622d] flex justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg '
          >Sign in as User</Link>
        </div>
      </div>
    </div>
  )
}

export default CaptainLogin
