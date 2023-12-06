import React from 'react'
import{Link} from 'react-router-dom'
import Logo  from '../Images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
  <footer>
    <div className="container footer__container">
   <article>
    <Link to='/'>
     <img src={Logo} alt="Footer Logo" />
    </Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Aperiam perspiciatis praesentium porro harum quaerat quod itaque cumque voluptas molestias maxime.</p>
<div className="footer__socials">
    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
</div>
</article>
<article>
    <h4>Permalinks</h4>
    <Link to ='/about'>About</Link>
    <Link to ='/plans'>Plans</Link>
    <Link to ='/trainers'>Trainers</Link>
    <Link to ='/gallery'>Gallery</Link>
    <Link to ='/contact'>Contact</Link>
</article>
<div className="footer__copyright">
    <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
</div>
    </div>
  </footer>
  )
}

export default Footer