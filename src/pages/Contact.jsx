import React from 'react'
import Sidebar from '../components/Sidebar'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Header from '../components/Header';

const Contact = () => {
    const socialMedias = [
        {
            icon: FaFacebook,
            name: "Jenish Imsong Limbu",
            link: "https://www.facebook.com/jenishimsong369/",
            color: "#316FF6"
        },
        {
            name: "Jenish Limbu",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/jenish-limbu-23b054246/"
            , color: "#0077B5 "
        },
    ]
    return (
        <>
            <div className="lg:hidden">
                <Header />
            </div>
            <div className=' w-11/12 m-auto'>
                <div className='lg:grid grid-cols-[20%_4%_76%] pt-16'>
                    <div className='hidden lg:block'>
                        <Sidebar />
                    </div>
                    <div className='hidden lg:block'></div>
                    <div className='w-full'>
                        <div className='w-full'>
                            <div className="bg-white rounded-sm shadow-lg h-full px-2 lg:px-16 py-20 main-content-body">
                                <div className='border border-slate-200 p-2 lg:p-8 relative'>
                                    <h1 className='text-xl font-semibold absolute w-fit px-6 py-1' style={{ top: "-20px", background: "#efefef" }}>Get In Touch</h1>
                                    <div className="contact-container">
                                        <div className="p-2 lg:p-4 mt-6 grid grid-cols-[100%] sm:grid-cols-[50%_50%] xl:grid-cols-[33.33%_33.33%_33.33%]">
                                            <div className='flex gap-4 '>
                                                <FaLocationArrow className='text-3xl text-secondary' />
                                                <div>
                                                    <p className='text-secondary'>Address</p>
                                                    <p className='font-semibold'>Imadol, Lalitpur, Nepal</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 xl:justify-center items-center'>
                                                <FaPhoneAlt className='text-3xl text-secondary ' />
                                                <div>
                                                    <p className='text-secondary'>Phone</p>
                                                    <p className=' font-semibold'>+977 9745303753</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 xl:justify-center items-center'>
                                                <MdEmail className='text-3xl text-secondary' />
                                                <div>
                                                    <p className='text-secondary'>Email</p>
                                                    <p className='font-semibold'>jlimbu539@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-media-links  p-2">
                                            <h2 className='font-semibold text-xl mt-12'>Social Media Links : </h2>
                                            <div className="grid mt-8 gap-y-4 sm:grid-cols-[50%_50%]">
                                                {socialMedias.map((media, key) => (
                                                    <div key={key} className=''>
                                                        <a href={media.link} className='flex flex-col  gap-y-2' target='_blank'>
                                                            <media.icon className='text-3xl text-secondary' style={{ color: media.color }} />
                                                            <span className='font-semibold'>{media.name}</span></a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Contact