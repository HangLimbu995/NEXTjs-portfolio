import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            toast.success('Captain Logout Successfully!')
            localStorage.removeItem('token')
            navigate('/captain-login')
        }).catch(err => {
            console.log(err)
            navigate('/captain-login')
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default CaptainLogout
