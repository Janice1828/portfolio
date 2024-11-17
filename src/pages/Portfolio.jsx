import React from 'react'
import Sidebar from '../components/Sidebar'
import CarRental from "../assets/Car-All.jpg"
import Created from '../components/portfolio/Created'
import Modified from '../components/portfolio/Modified';
import { useState } from 'react';
import BHSuppliers from "../assets/bh-suppliers.png";
import Himalayanhills from "../assets/himalayanhills-logo.png"
const Portfolio = () => {
    const [portfolio, setPortfolio] = useState("created");
    const createdProjectsLists = [
        {
            title: "Car Rental",
            img: CarRental,
            link: "https://car-rental-ten-lovat.vercel.app/"
        },
        {
            title: "BH Suppliers",
            img: BHSuppliers,
            link: "https://bhsuppliers.vercel.app/"
        }
    ]
    const updatedProjectsLists = [
        {
            title: "Himalayan Hills",
            img: Himalayanhills,
            link: "https://himalayanhills.com.np/"
        }]
    return (
        <div className=' w-11/12 m-auto'>
            <div className='grid grid-cols-[20%_4%_76%] pt-16'>
                <div>
                    <Sidebar />
                </div>
                <div></div>
                <div className='w-full'>
                    <div className="bg-white rounded-sm shadow-lg h-full px-16 py-20 main-content-body">
                        <div className='border border-slate-200 p-8 relative'>
                            <h1 className='text-xl font-semibold absolute w-fit px-6 py-1' style={{ top: "-20px", background: "#efefef" }}>CREATIVE PORTFOLIO</h1>
                            <div className="flex gap-8 pb-4">
                                <button className={portfolio == 'created' ? 'text-lg' : 'text-lg text-secondary'} onClick={() => setPortfolio("created")}>Created Projects</button>
                                <button className={portfolio != 'created' ? 'text-lg' : 'text-lg  text-secondary'} onClick={() => setPortfolio("updated")}>Updated/Modified Projects</button>
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
    )
}

export default Portfolio