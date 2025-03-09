import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(userDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const userData = {
        email,
        password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if (response?.data) {
        setUser(response.data)
        localStorage.setItem('token', response.data.token)
        toast.success("User Login Successful!")
        navigate('/home')
      }
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data.message || 'Invalid Form Filed!')
      throw new Error(error)
    }
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='h-screen max-w-[500px] p-7 flex  flex-col justify-between'>
        <div >
          <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>Whant's your email</h3>
            <input required type='email' placeholder='user@gmail.com'
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
          <p className='text-center'>New here? <Link to={'/signup'} className='text-blue-600 '>Create new Account</Link></p>
        </div>
        <div>
          <Link to={'/captain-login'}
            className='bg-[#10b461] flex justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg '
          >Sign in as Captain</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
