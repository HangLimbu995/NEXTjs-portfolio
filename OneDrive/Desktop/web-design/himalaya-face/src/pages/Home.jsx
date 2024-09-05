// src/Home.jsx
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'; // Import CSS for styling

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {


    // GSAP ScrollTrigger for expanding the box
    // gsap.to('.box', {
    //   width: '80vw',
    //   height: '70vh',
    //   placeItems:'center',
    //   scrollTrigger: {
    //     trigger: '.container',
    //     start: 'top top',
    //     end: '100%',
    //     scrub: true,
    //   },
    // });


  }, []);

  return (
    <div className='w-full'>
   
    </div>
  );
};

export default Home;