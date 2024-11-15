import React from 'react'
import Sidebar from '../components/Sidebar'
const About = () => {
    const skills = [
        {
            title: "HTML",
            skillsPercentage: ""
        },
        {
            title: "CSS",
            skillsPercentage: ""
        },
        {
            title: "BOOTSRAP",
            skillsPercentage: ""
        },
        {
            title: "TAILWIND CSS",
            skillsPercentage: ""
        },
        {
            title: "MATERIAL UI",
            skillsPercentage: ""
        }
        ,
        {
            title: "JAVASCRIPT",
            skillsPercentage: ""
        },
        {
            title: "REACT JS",
            skillsPercentage: ""
        },
        {
            title: "NEXT JS",
            skillsPercentage: ""
        },
        {
            title: "PHP",
            skillsPercentage: ""
        },
        {
            title: "MYSQL",
            skillsPercentage: ""
        },
        {
            title: "NODE JS",
            skillsPercentage: ""
        },
        {
            title: "MONGO DB",
            skillsPercentage: ""
        },
    ]
    return (
        <div className=' w-11/12 m-auto'>
            <div className='grid grid-cols-[20%_4%_76%] pt-16'>
                <div>
                    <Sidebar />
                </div>
                <div></div>
                <div className='w-full'>
                    <div className="bg-white rounded-sm shadow-lg h-full ">
                        <h1 className='text-4xl font-semibold name'>About Me</h1>
                        <div className='aboutme-container'>
                            <p>My name is Jenish Limbu and I am a React Js / Front End Developer, and I'm very passionate and dedicated to my work.I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                            </p>
                            <div className="border"></div>
                            <div className="grid grid-cols-[50%_50%]">
                                <div className='flex gap-4 items-center'>
                                    <p className="title">Name:</p><p className="title-data">Jenish Limbu</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <p className="title">Email:</p><p className="title-data">jlimbu539@gmail.com</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <p className="title">Address:</p><p className="title-data">Imadol, Lalitpur, Nepal</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <p className="title">Phone :</p><p className="title-data">+977 9745303753</p>
                                </div>
                            </div>
                            <div className="cv-btn">
                                <button>Download CV</button>
                            </div>
                        </div>
                        <div className="knowledge-container">
                            <h1>Knowledge</h1>
                            <h3>PROGRAMMING SKILLS</h3>
                            <div className="grid grid-cols-[50%_50%]">
                                {skills.map((skill, key) => (
                                    <div>
                                        <p>{skill.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About