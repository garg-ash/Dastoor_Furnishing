import React from 'react'
import './CSS/Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero.jsx'
import Info from '../Components/Info/Info.jsx'
import GallaryHome from '../Components/GallaryHome/GallaryHome.jsx'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Info/>
    <GallaryHome />
    </>
  )
}

export default Home