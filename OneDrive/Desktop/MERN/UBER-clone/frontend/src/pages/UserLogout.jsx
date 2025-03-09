import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log('token', token)
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearers ${token}`
        }
    }).then(response => {
        toast.success('User Logout Successfully!')
        localStorage.removeItem('token')
        navigate('/login')
    }).catch(err => {
        navigate('/login')
        // toast.error(err.message || err)
        console.log(err)
    })

    return (
        <div>

        </div>
    )
}

export default UserLogout
