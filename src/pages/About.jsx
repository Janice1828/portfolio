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
    const downloadCV = () => {
        alert("Downloading CV....")
    }
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
                            <h1 className='text-xl font-semibold absolute w-fit px-6 py-1' style={{ top: "-20px", background: "#efefef" }}>About Me</h1>
                            <div className='aboutme-container'>
                                <p className='mt-4'>My name is Jenish Limbu and I am a React Js / Front End Developer, and I'm very passionate and dedicated to my work.I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                                </p>
                                <br />
                                <hr />
                                <br />

                                <div className="grid grid-cols-[50%_50%] gap-y-4">
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Name:</p><p className="title-data">Jenish Limbu</p>
                                    </div>
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Email:</p><p className="title-data">jlimbu539@gmail.com</p>
                                    </div>
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Address:</p><p className="title-data">Imadol, Lalitpur, Nepal</p>
                                    </div>
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Phone :</p><p className="title-data">+977 9745303753</p>
                                    </div>
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Github :</p><p className="title-data"><a target='_blank' href="https://github.com/janice1828/">https://github.com/janice1828/</a></p>
                                    </div>
                                    <div className='grid grid-cols-[40%_60%]'>
                                        <p className="title">Linkedin :</p><p className="title-data"><a href="https://www.linkedin.com/in/jenish-limbu-23b054246/" target='_blank'>https://www.linkedin.com/in/jenish-limbu-23b054246/</a></p>
                                    </div>
                                </div>
                                <div className="cv-btn mt-4">
                                    <button className='download-cv-btn py-1 px-4 flex relative' onClick={downloadCV}><span className=' download-cv-bg-secondary absolute z-0'></span><span className='z-10'>Download CV</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="knowledge-container relative mt-16 border border-slate-200 p-8">
                            <h1 className='absolute bg-secondary text-xl font-semibold py-1 px-4' style={{ top: "-20px" }}>Knowledge</h1>
                            <h3 className='text-lg font-semibold mt-4 mb-5'>Tech SKILLS</h3>
                            <div className="grid grid-cols-[33.33%_33.33%_33.33%] gap-y-4">
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