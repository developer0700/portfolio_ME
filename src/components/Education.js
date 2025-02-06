import React from 'react';
import img from '../images/monash.jpg';

const Education = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='education' >

                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold" data-aos="fade-up">education</h2>

                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-xl float-right" src={img} />
                    </div>
                    <div className="my-4 lg:text-left lg:my-0 w-full lg:w-1/2 px-8 flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="500">

                        <h3 className="text-3xl  text-blue-900 font-bold">Monash University</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>2015 – 2017, Melbourne, Australia</p>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Masters Degree in Software Engineering</p>
                        </div>
                        <p className='my-3 text-xl text-gray-600 font-semibold italic'>Monash University is one of Australia's leading universities, located in Melbourne, Victoria. It's a public research university founded in 1958, and it’s known for its strong academic programs, global reach, and cutting-edge research.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;