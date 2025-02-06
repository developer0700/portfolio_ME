import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    const timelineData = [
        {
            date: '06/2023 – 08/2024',
            title: 'Full Stack Developer | Kili Technology',
            description: `• Taught the team how to set up unit tests effectively and efficiently, write them, and how to define a testing strategy.\n• Challenged the team on which technical solutions were used and displayed good practices.\n• Participated in the development of priority React features.`,
        },
        {
            date: '10/2021 – 11/2022',
            title: 'Front-end Developer | Parsl',
            description: `• Oversaw front-end development, optimizing existing solutions, improving performance, reusability, and scalability.\n• Spearheaded new platform development and design while managing the exciting platform. Fixed and tracked bugs using Jira.\n• Mentored and supported a team of five, following agile practices.`,
        },
        {
            date: '02/2020 – 01/2021',
            title: 'Front-end Developer | Pentana Solutions',
            description: `• Designed and implemented micro front-end architecture to modularize front-end products into reusable pieces, allowing different front-end frameworks to work together, developed in TypeScript using principles of Flux architecture.\n• Led development of web components that are core elements of an initiative to unify the design system across the company, used across multiple products and teams developed in TypeScript.\n• Built a web app for capturing and signing sales contracts, agnostic to the document design and printing technology.\n• Created a progressive web app for desktop and mobile as a prototype to showcase feasibility for desktop-like keyboard-heavy interactions, developed in React.\n• Built an extension for the company"s flagship product allowing it to utilize a new user interface running inside an older JavaScript framework. Implemented analytics to track issues and performance that helped identify pre-launch issues.\n• Created a JavaScript library to simplify the execution of test steps and assertion for an in-house developed JavaScript framework, Visage.`,
        },
        {
            date: '02/2017 – 09/2019',
            title: 'Web Developer | Network2Share',
            description: `• Designed prototypes, interfaces, and branding for CloudFileSync, a cloud storage service. Developed in HTML and LESS (for CSS).\n• Developed a responsive web user interface for file exploring, user and drive management in PHP, and a desktop client for showing synchronous operations in C#.\n• Oversaw the design and development process of front-end development.`,
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="bg-gray-100 py-12 my-16" id='experience'>
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold" data-aos="fade-up">experience</h2>

            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-blue-900'></div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto my-15">
                <div className="relative">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="mb-8"
                            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} // Alternate direction for each item
                        >
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-px w-1 bg-teal-500"></div>
                            <div className="ml-12 flex items-start">

                                <div className="ml-4">
                                    <h3 className="text-2xl  text-blue-900 font-bold">{item.date}</h3>
                                    <h4 className="text-xl  text-blue-700 font-bold">{item.title}</h4>
                                    <p className="my-3 text-xl text-gray-600 font-semibold mt-2" style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;