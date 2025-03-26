import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 ">
  
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center"
       
      >
        <div className="bg-black   bg-opacity-50 p-6 sm:p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-3">
            Find the best deals on trendy fashion and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
