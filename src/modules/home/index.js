import React, { useEffect } from 'react';
import Contact from './contact';
import HeroBanner from './heroBanner';
import Create from './create';
import Clients from './clients';
import Purchase from './purchase';
import Started from './started';
import Hosting from './hosting';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect (() => {
    Aos.init({
      duration: "2000",
    })
  })
  
  return (
    <>
      <HeroBanner/>

      <Hosting/>

      <Create/>

      <Clients/>

      <Purchase/>

      <Started/>

      <Contact />
    </>
  )
}
