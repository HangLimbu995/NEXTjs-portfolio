import React, { useEffect } from 'react'
import Home from './pages/Home'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  },[])
  
  return (
    <div data-scroll-container className='relative' id='main'>
    <Navbar />
    <div className='w-full h-[100vh]'></div>
    <Home />
    </div>
  )
}

export default App