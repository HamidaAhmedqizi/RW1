import React from 'react'
import './navbar.css'
import Logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../Data'

import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div className='container nav_container '>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <ul className='nav__links'>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li>
                                    <NavLink to={path} className={({isActive})=>isActive ?'active-nav' : ''}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn'>
                    <FaBars/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar