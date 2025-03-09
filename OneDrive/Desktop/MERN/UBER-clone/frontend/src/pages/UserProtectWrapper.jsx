import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const { setUser } = useContext(userDataContext)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data)
            setIsLoading(false)
            navigate('/home')
        }).catch(err => {
            console.log(err)
            navigate('/login')
            throw new Error(err)
        })
    }, [token])

    if (isLoading) {
        return <>Loading...</>
    }


    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper
