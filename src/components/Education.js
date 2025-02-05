import React from 'react';

const Education = () => {

    const universityData = {
        university: 'Harvard University',
        degree: 'Bachelor of Arts in Computer Science',
        period: 'August 2015 - May 2019'
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{universityData.university}</div>
                    <p className="text-gray-700 text-base mb-1">{universityData.degree}</p>
                    <p className="text-gray-500 text-sm">{universityData.period}</p>
                </div>
            </div>
        </div>
    );
};

export default Education;