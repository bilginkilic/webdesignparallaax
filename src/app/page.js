'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return ( 
    <main>
      <Intro />
      <Description />
      <Section />
    
      <div className='h-screen'>deneme</div> 
    <Footer/>
      
    </main>
 
 
  );
}