import React from 'react'
import './CSS/Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero.jsx'
import Info from '../Components/Info/Info.jsx'
import GallaryHome from '../Components/GallaryHome/GallaryHome.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import Testimonials from '../Components/Testimonials/Testimonials.jsx'
import Projects from '../Components/Projects/Projects.jsx'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Info/>
    <GallaryHome />
    <Projects />
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home