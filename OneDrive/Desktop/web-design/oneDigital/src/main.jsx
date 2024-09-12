import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurPortfolio from './pages/OurPortfolio.jsx'
import Contact from './pages/Contact.jsx'
import OurServices from './pages/OurServices.jsx'
import WebDebelopment from './pages/sub_pages/WebDebelopment.jsx'
import DigitalMarketing from './pages/sub_pages/DigitalMarketing.jsx'
import Ecommerce from './pages/sub_pages/Ecommerce.jsx'
import UIUX from './pages/sub_pages/UIUX.jsx'
import SEO from './pages/sub_pages/SEO.jsx'
import Marketing from './pages/sub_pages/Marketing.jsx'
import GraphicDesign from './pages/sub_pages/GraphicDesign.jsx'
import Animation from './pages/sub_pages/Animation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='our-portfolio' element={<OurPortfolio />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='services' element={<OurServices />} >
        <Route path='web-development' element={<WebDebelopment />} />
        <Route path='digital-marketing' element={<DigitalMarketing />} />
        <Route path='ecommerce' element={<Ecommerce />} />
        <Route path='ui-ux' element={<UIUX />} />
        <Route path='graphic-design' element={<GraphicDesign />} />
        <Route path='animation' element={<Animation />} />
        <Route path='marketing' element={<Marketing />} />
        <Route path='seo' element={<SEO />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
