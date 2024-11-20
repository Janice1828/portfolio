import React from 'react'
import { Link } from 'react-router-dom'

const Created = ({ createdProjectLists }) => {
    return (
        <div className="grid grid-cols-[100%] md:grid-cols-[50%_50%] gap-3 lg:grid-cols-[33.33%_33.33%_33.33%] mt-4">
            {createdProjectLists.map((project, key) => (
                <div key={key} className='border border-slate-200 p-4'>
                    <a href={project.link} target='_blank'>
                        <img src={project.img} alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Created