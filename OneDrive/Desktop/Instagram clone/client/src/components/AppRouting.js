import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'

const AppRouting = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouting