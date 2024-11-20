import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

const Header = () => {
    return (
        <div className="bg-white px-3">
            <ul className='pt-4 pb-4 flex gap-6 flex-wrap'>
                <li><NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'text-black flex gap-2 items-center' : 'text-secondary flex gap-2 items-center')}
                >
                    <IoHome />
                    Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-black flex gap-2 items-center' : 'text-secondary flex gap-2 items-center')}>
                    <FaCircleInfo />
                    About</NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'text-black flex gap-2 items-center' : 'text-secondary flex gap-2 items-center')}>
                    <IoSettings />
                    Services</NavLink></li>
                <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-black flex gap-2 items-center' : 'text-secondary flex gap-2 items-center')}>
                    <MdWork />
                    Portfolio</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-black flex gap-2 items-center' : 'text-secondary flex gap-2 items-center')}>
                    <BiSolidContact />
                    Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header