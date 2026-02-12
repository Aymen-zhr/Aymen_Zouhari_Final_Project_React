
import React from "react";
import { SlUser } from "react-icons/sl";
import { BsBag } from "react-icons/bs";
import { images } from "../../constants/images";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-12 bg-white border-b border-gray-200 transition-all duration-300 py-6 shadow-md">
            <div>
                <img src={images.logo} alt="Logo" className="h-8" />
            </div>
            <div className="flex gap-8">
                <a href="#" className="text-orange-500 font-medium relative group">Home<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">Shop<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">Sale<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">Features<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">Blog<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">About<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
                <a href="#" className="text-gray-700 font-medium relative group hover:text-orange-500 transition-colors">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
            </div>
            <div className="flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors"><SlUser size={20} /></a>
                <a href="#" className="relative text-gray-700 hover:text-orange-500 transition-colors">
                    <BsBag size={20} />
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
