import React from 'react'
import Profile from "../assets/jenish.jpg"

import { Link, NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className='bg-white text-center py-16 px-10 shadow-lg rounded-sm'>
            <img src={Profile} alt="Jenish Profile" className='w-20	profile rounded-full m-auto' />
            <ul className='pt-10 flex flex-col gap-3'>
                <li><NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'text-black' : 'text-secondary')}
                >Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-black' : 'text-secondary')}>About</NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'text-black' : 'text-secondary')}>Services</NavLink></li>
                <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-black' : 'text-secondary')}>Portfolio</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-black' : 'text-secondary')}>Contact</NavLink></li>
            </ul>
            <p className='pt-10 text-secondary'>Copyright &copy; <span className='text-black'>Jenish Limbu</span>
            </p>
            <p className='py-2 text-secondary'>
                All rights are reserved
            </p>
            <div>
            </div>
        </div>
    )
}

export default Sidebar