import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
            <div>
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-lg text-gray-600">Oops! Page not found.</p>
                <p className="mt-2 text-gray-500">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <a href="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;