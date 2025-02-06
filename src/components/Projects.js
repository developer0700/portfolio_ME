import React, { useState } from 'react';
import pj1 from '../images/pj1.jpg';
import pj2 from '../images/pj2.jpg';
import pj3 from '../images/pj3.jpg';
import pj4 from '../images/pj4.jpg';
const Projects = () => {
    const projectlist = [
        {
            image: pj1,
            title: 'Healthcare Service Platform',
            description: `I joined a new project as a team lead to:\n• Develop front-end React applications with Gatsby.\n• Mentor the most junior members.<br />\n• Participate in the definition and assignment of work.`,
            url: 'https://www.optum.com/en'
        },
        {
            image: pj2,
            title: 'Heathcare Online Marketplac',
            description: `I was asked to join a project as a team lead to support the project in several areas:\n• Development of front-end React applications with Next.js\n• Serve as a communication channel between the technical team and the rest of the company`,
            url: 'https://www.costplusdrugs.com/'
        },
        {
            image: pj3,
            title: 'Official Platform for the French Rugby Federation',
            description: `Intervened on a React project for the French Rugby Federation :\n• Under the direction of the CTO, developed in collaboration with a team responsible for the back end.\n• I led the integration of the design made by an external team`,
            url: 'https://www.ffr.fr/'
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },
        {
            image: pj4,
            title: 'JS Jobbs',
            description: ` Took the helm in developing an innovative web application for creating and applying for JavaScript jobs utilizing React, TypeScript, and Node.js. It sparked a notable 30% increase in user retention rates due to streamlined posting and application processes.`,
            url: 'https://jsjobbs.com',
        },


    ]

    const [displayedProjects, setDisplayedProjects] = useState(4);

    const handleViewMoreClick = () => {
        setDisplayedProjects(displayedProjects + 4);
    };
    return (
        <>
            <div className="my-16 py-4" id='projects'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Projects</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            projectlist.slice(0, displayedProjects).map((item, index) => (

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col items-center justify-center text-center" key={index}>
                                    <div className="flex justify-center h-400" >
                                        <img key={index} src={item.image} alt={item.title} target="_blank" className="max-w-[400px] max-h-[400px] object-cover rounded-xl border-2 border-grey" />
                                    </div>
                                    <div className="m-2 text-justify text-sm">
                                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-1">{item.title}</h4>
                                        <p className="text-md font-medium leading-5 h-auto" style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                                        <div className="flex justify-center my-4">
                                            <a href={item.url} target='_blank' className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-1/2 m-auto px-1 py-1 my-1 text-lg shadow-xl rounded-xl">
                                                View More
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {displayedProjects < projectlist.length && (
                    <div
                        className="flex justify-center mt-16 w-48 m-auto"
                    >
                        <button
                            onClick={handleViewMoreClick}
                            className="text-white bg-blue-600 hover:bg-blue-600 inline-flex items-center justify-center w-full px-1 py-4 my-1 text-2xl shadow-xl rounded-xl"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Projects;