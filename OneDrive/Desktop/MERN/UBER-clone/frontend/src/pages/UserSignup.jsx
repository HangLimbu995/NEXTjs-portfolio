import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
  const { user, setUser } = useContext(userDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const newUser = {
        fullname: {
          firstname,
          lastname,
        },
        email,
        password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
      if (response?.data) {
        const data = response.data

        setUser(data.user)
        localStorage.setItem('token',data.token)
        toast.success('User Registred Successfully!')
        navigate('/home')
      }
    } catch (error) {
      toast.error("Invalid Input Field!")
      throw new Error(error)
    }
  }
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='h-screen max-w-[500px] p-7 flex  flex-col justify-between'>
        <div >
          <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>Whant's your name</h3>
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
            <h3 className='text-lg font-medium mb-2'>Whant's your email</h3>
            <input required type='email' placeholder='user@gmail.com'
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
            <button type='submit'
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg '
            >Create Account</button>
          </form>
          <p className='text-center'>Already have an Account? <Link to={'/login'} className='text-blue-600 '>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight' >
            By procedding, you consent to get calls, WhatApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
