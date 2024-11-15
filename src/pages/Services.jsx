import React from 'react'
import Sidebar from '../components/Sidebar'
const Services = () => {
  return (
    <div className=' w-11/12 m-auto'>
      <div className='grid grid-cols-[20%_4%_76%] pt-16'>
        <div>
          <Sidebar />
        </div>
        <div></div>
        <div className='w-full'>
          <div className="bg-white rounded-sm shadow-lg h-full flex items-center justify-center flex-col">
            <h1 className='text-4xl font-semibold name'>Services</h1>
            <div>
              <h3>Web Development</h3>
              <ul>
                <li>HTML Websites</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services