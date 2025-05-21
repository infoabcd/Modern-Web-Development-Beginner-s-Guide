import React from "react";
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
        <div>
            <AnnouncementBar />
            <Navbar />

            <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Oops! Page not found.</h2>
            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    </>
  );
};

export default NotFound;