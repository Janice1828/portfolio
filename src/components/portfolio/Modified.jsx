import React from 'react'

const Modified = ({ updatedProjectsLists }) => {
    return (
        <div className="grid md:grid-cols-[50%_50%] gap-x-2 lg:grid-cols-[33.33%_33.33%_33.33%] mt-4">
            {updatedProjectsLists.map((project, key) => (
                <div key={key} className='border border-slate-200 p-4 '>
                    <a href={project.link} target='_blank'>
                        <img src={project.img} alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }} />

                    </a>
                </div>
            ))}
        </div>
    )
}

export default Modified