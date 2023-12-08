import React from 'react'
import './trainers.css'
import Header from '../../Components/Header'
import HeaderImage from '../../Images//header_bg_5.jpg'
import { trainers } from '../../Data'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Trainer from '../../Components/Trainer'
const Trainers = () => {
  return (
    <>

      <Header title='Our Trainers' image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus unde deleniti harum laborum nostrum dolor facere,
        impedit nemo doloremque ab soluta aliquam maiores nesciunt porro fugiat saepe illum voluptate.
      </Header>
      <section className='trainers'>
        <div className=' .container trainers__container'>

          {
            trainers.map(({ id, image, name, job, socials }) => {
              <Trainer key={id}>

              </Trainer>
            })
          }
        </div>

      </section>
    </>
  )
}

export default Trainers