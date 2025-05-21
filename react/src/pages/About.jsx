import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <div>
                <AnnouncementBar />
                <Navbar />

                <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 text-center max-w-2xl">
                        Welcome to our application! We are a team dedicated to delivering high-quality solutions that empower our users to achieve their goals. Our mission is to blend simplicity, beauty, and functionality in all that we do.
                    </p>
                    <div className="mt-6">
                        <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                        Learn More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;