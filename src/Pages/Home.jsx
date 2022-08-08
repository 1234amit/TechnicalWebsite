import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import { useGlobalContext } from '../context'
import Contact from './Contact';
import Services from './Services';


const Home = () => {

  const {updateHomePage} = useGlobalContext();

  useEffect(() => 
      updateHomePage()
    , []);

  return (
    
    <>
      <HeroSection/>
      <Services />
      <Contact />
    </>
  )
}

export default Home