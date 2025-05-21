import React from "react";
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
        <div>
            <AnnouncementBar />
            <Navbar />

            <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to Our Application
                </h1>
                <p className="text-lg text-gray-200 max-w-xl mx-auto">
                  This is a modern React application powered by Tailwind CSS. Explore the features and enjoy a seamless user experience.
                </p>
              </div>
            </div>
        </div>
    </>
  );
};

export default Home;