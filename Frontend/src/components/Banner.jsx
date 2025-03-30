import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Premium <span className="text-blue-600">Refurbished</span> Devices &<br />
            Affordable <span className="text-blue-600">Rental</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Get high-quality refurbished electronics at unbeatable prices or rent 
            the latest devices with flexible plans. Quality assured, budget friendly.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="relative flex-grow">
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                placeholder="Enter your email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 absolute left-3 top-3 text-gray-400"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
              Explore Deals
            </button>
          </div>
        </div>
      </div>
      
      <div className="order-1 w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          className="md:w-[600px] md:h-[500px] object-contain animate-fade-in"
          alt="Refurbished devices showcase"
        />
      </div>
    </div>
  );
}

export default Banner;