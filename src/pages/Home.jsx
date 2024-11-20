import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Profile from "../assets/jenish.jpg"
const Home = () => {
    return (
        <>
            <div className='block lg:hidden'>
                <Header />
            </div>
            <div className=' w-11/12 m-auto'>
                <div className='block lg:grid grid-cols-[20%_4%_76%] pt-8 lg:pt-10'>
                    <div className='hidden lg:block'>
                        <Sidebar />
                    </div>
                    <div className='hidden lg:block'></div>
                    <div className='w-full'>
                        <div className='main-content-body'>
                            <div className="bg-white rounded-sm shadow-lg h-full flex items-center justify-center flex-col">
                                <img src={Profile} alt="" className='rounded-full object-cover mb-4 block lg:hidden' style={{ height: "90px", width: "90px" }} />
                                <h1 className='text-4xl font-semibold name text-center'>JENISH LIMBU</h1>
                                <p className='mt-4 px-4 md:px-0 text-center'>React JS / Front End / Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home