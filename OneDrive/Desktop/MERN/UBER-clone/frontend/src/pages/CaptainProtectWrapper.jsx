import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainProtectWrapper = ({ children }) => {
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    const token = localStorage.getItem('token')


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const data = res.data
            setCaptain(data.captain)
            setIsLoading(false)
            navigate('/captain-home')
        }).catch(error => {
            console.log(error)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectWrapper
