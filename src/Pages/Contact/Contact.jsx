import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem laudantium
        quae optio accusamus nobis beatae sapiente tempora ipsa?
        Quod qui maxime tempore cupiditate voluptatibus ad sequi atque consectetur aspernatur.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@egattor.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+233557097546" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact