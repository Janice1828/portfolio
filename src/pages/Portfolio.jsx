import React from 'react'
import Sidebar from '../components/Sidebar'
import CarRental from "../assets/Car-All.jpg"
import Created from '../components/portfolio/Created'
import Modified from '../components/portfolio/Modified';
import { useState } from 'react';
import BHSuppliers from "../assets/bh-suppliers.png";
import Himalayanhills from "../assets/himalayanhills-logo.png"
import Header from '../components/Header';
import meroKrishi from "../assets/merokrishi.png"
import Possystem from "../assets/possystem.png"
import Lawnella from "../assets/lawnella.jpg"
import Instagram from "../assets/instagram.webp"
const Portfolio = () => {
    const [portfolio, setPortfolio] = useState("created");
    const createdProjectsLists = [
        {
            title: "Car Rental",
            img: CarRental,
            link: "https://car-rental-ten-lovat.vercel.app/",
            Note: ""
        },
        {
            title: "BH Suppliers",
            img: BHSuppliers,
            link: "https://bhsuppliers.vercel.app/",
            Note: ""

        },
        {
            title: "POS System",
            img: Possystem,
            link: "https://janice1828.github.io/pos-system/Dashboard/setup/system-setup.html"
            , Note: ""
        },
        {
            title: "Lawnella",
            img: Lawnella,
            link: "https://lawnella-git-main-jlimbu539gmailcoms-projects.vercel.app/"
            ,
            Note: "Not Responsive"
        },
        {
            title: "Instagram Clone",
            img: Instagram,
            link: "https://instagram-clone-wine-nine.vercel.app/index.html/"
            ,
            Note: "Not Responsive"
        }
    ]
    const updatedProjectsLists = [
        {
            title: "Himalayan Hills",
            img: meroKrishi,
            link: "https://merokrishi.com/"
        }]
    return (
        <>
            <div className="lg:hidden">
                <Header />
            </div>
            <div className=' w-11/12 m-auto'>
                <div className='lg:grid grid-cols-[20%_4%_76%] pt-8 lg:pt-10'>
                    <div className='hidden lg:block'>
                        <Sidebar />
                    </div>
                    <div className='hidden lg:block'></div>
                    <div className='w-full'>
                        <div className="bg-white rounded-sm shadow-lg h-full px-2 lg:px-16 py-20 main-content-body">
                            <div className='border border-slate-200 p-4 lg:p-8 relative'>
                                <h1 className='text-xl font-semibold absolute w-fit px-6 py-1' style={{ top: "-20px", background: "#efefef" }}>CREATIVE PORTFOLIO</h1>
                                <div className="flex gap-y-0 gap-x-8 lg:gap-8 pb-4 flex-wrap mt-2">
                                    <button className={portfolio == 'created' ? 'text-lg' : 'text-lg text-secondary'} onClick={() => setPortfolio("created")}>Created Projects</button>
                                    <button className={portfolio != 'created' ? 'text-lg' : 'text-lg  text-secondary'} onClick={() => setPortfolio("updated")}>Contributed Projects</button>
                                </div>
                                <div>
                                    <div className={portfolio == 'created' ? 'block' : 'hidden'}>
                                        <Created createdProjectLists={createdProjectsLists} />
                                    </div>
                                    <div className={portfolio != 'created' ? 'block' : 'hidden'}>
                                        <Modified updatedProjectsLists={updatedProjectsLists} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio