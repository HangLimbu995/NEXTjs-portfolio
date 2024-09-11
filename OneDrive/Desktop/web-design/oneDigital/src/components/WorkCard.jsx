import React from 'react'

const WorkCard = ({project,index}) => {
    return (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.category}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">View Project</a>
            </div>
        </div>
    )
}

export default WorkCard
