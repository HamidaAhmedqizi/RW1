import React from 'react'
import'./about.css'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_1.jpg'
import StoryImage from '../../Images/about1.jpg'
import VisionImage from '../../Images/about2.jpg'
import MissionImage from '../../Images/about3.jpg'

const About = () => {
  return (
    <>
     <Header title='About Us' image={HeaderImage}>
   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Aliquam a laboriosam dolor obcaecati tenetur, laborum esse rem atque rerum molestias.
    </Header>
  <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
      </div>
      <div className='about__section-content'>
    <h1>Our Story</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut amet assumenda maxime earum, eligendi temporibus aut reprehenderit 
      odit sunt vel non unde impedit quod culpa commodi voluptatibus provident obcaecati?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
       rem quam? Repellat commodi accusamus fuga reprehenderit, quisquam vitae itaque minus corporis.
       Animi a molestiae dolores sequi, modi sed maxime tempora.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
       suscipit nulla dolorem saepe nostrum minus nesciunt. Exercitationem modi corrupti reiciendis.
    </p>
      </div>
    </div>
  </section>
  <section className="about__Vision">
    <div className="container about__Vision-container">
      <div className='about__section-content'>
    <h1>Our Vision</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut amet assumenda maxime earum, eligendi temporibus aut reprehenderit 
      odit sunt vel non unde impedit quod culpa commodi voluptatibus provident obcaecati?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
       rem quam? Repellat commodi accusamus fuga reprehenderit, quisquam vitae itaque minus corporis.
       Animi a molestiae dolores sequi, modi sed maxime tempora.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
       suscipit nulla dolorem saepe nostrum minus nesciunt. Exercitationem modi corrupti reiciendis.
    </p>
  
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="Our Vision Image" />
      </div>
    </div>
  </section>
  <section className="about__mission">
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Image" />
      </div>
      <div className='about__section-content'>
    <h1>Our Mission</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut amet assumenda maxime earum, eligendi temporibus aut reprehenderit 
      odit sunt vel non unde impedit quod culpa commodi voluptatibus provident obcaecati?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
       rem quam? Repellat commodi accusamus fuga reprehenderit, quisquam vitae itaque minus corporis.
       Animi a molestiae dolores sequi, modi sed maxime tempora.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
       suscipit nulla dolorem saepe nostrum minus nesciunt. Exercitationem modi corrupti reiciendis.
    </p>
      </div>
    </div>
  </section>
    </>
    )
   
}

export default About