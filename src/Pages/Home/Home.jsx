import React from 'react'
import './home.css'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import FAQS from '../../Components/FAQS'
import Testimonials from '../../Components/Testimonials'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQS/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home