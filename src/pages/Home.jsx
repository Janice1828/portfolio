import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
        <div className=' w-11/12 m-auto'>
            <div className='grid grid-cols-[20%_4%_76%] pt-16'>
                <div>
                    <Sidebar />
                </div>
                <div></div>
                <div className='w-full'>
                    <div className="bg-white rounded-sm shadow-lg h-full flex items-center justify-center flex-col">
                        <h1 className='text-4xl font-semibold name'>JENISH LIMBU</h1>
                        <p className='mt-4'>React JS / Front End / Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home