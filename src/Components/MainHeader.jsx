import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className="main__header-left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends Of the Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore vero minima,
             dolor corporis laudantium?</p>
             <Link to= "/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-rigt">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader