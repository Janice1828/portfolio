import React from 'react'
import Sidebar from '../components/Sidebar'
import { CgWebsite } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import Header from '../components/Header';

const Services = () => {
  const availableServices = [
    {
      icon: CgWebsite,
      title: "Web Development",
      techUsing: ["NORMAL HTML, CSS & JAVASCRIPT", "FRONT-END FRAMEWORKS LIKE REACT, CHART, NEXT JS.", "PHP AND MYSQL"]
    }
  ]
  return (
    <>
      <div className='lg:hidden'>
        <Header />
      </div>
      <div className=' w-11/12 m-auto'>
        <div className='lg:grid grid-cols-[20%_4%_76%] pt-8 lg:pt-16'>
          <div className='hidden lg:block'>
            <Sidebar />
          </div>
          <div></div>
          <div className='w-full'>
            <div className="bg-white rounded-sm shadow-lg h-full px-2 lg:px-16 py-20 main-content-body">
              <div className='border border-slate-200 p-3 lg:p-8 relative'>
                <h1 className='text-xl font-semibold absolute w-fit px-6 py-1' style={{ top: "-20px", background: "#efefef" }}>Available Services</h1>
                <div className='aboutme-container'>
                  <div className='grid grid-cols-[100%] md:grid-cols-[50%_50%] gap-x-20 gap-y-4 mt-8'>
                    {availableServices.map((service, key) => (
                      <div key={key} className='border border-slate-200 p-8'>
                        <service.icon className='text-4xl text-secondary' />
                        <h4 className='text-xl py-3 font-semibold'>{service.title}</h4>
                        <h3 className='text-lg mb-2 text-secondary'>Technology Using : </h3>
                        {service.techUsing.map((tech) => (
                          <p className='text-sm leading-8 text-secondary flex items-center gap-3'><GoDotFill /> {tech}</p>
                        ))}
                      </div>
                    ))}
                    <div></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Services