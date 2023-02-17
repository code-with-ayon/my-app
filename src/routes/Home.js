import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import WorkCard from '../Components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Home