import React from 'react';
import './home.scss';
import Contact from './contact';
import HeroBanner from './heroBanner';
import Create from './create';
import Clients from './clients';
import Purchase from './purchase';
import Started from './started';
import Hosting from './hosting';

export default function Home() {

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
