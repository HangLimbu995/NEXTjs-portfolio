import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurPortfolio from './pages/OurPortfolio.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
    <Route index element={<Home />} />
    <Route path='about-us' element={<AboutUs />} />
    <Route path='our-portfolio' element={<OurPortfolio />} />
    <Route path='contact-us' element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
