import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterestSquare,
    FaGooglePlusG,
    FaInstagram
} from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-12 py-3 bg-gray-100 transition-all duration-300">
            <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><FaFacebookF size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><FaTwitter size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><FaPinterestSquare size={18} /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><FaGooglePlusG size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><FaInstagram size={18} /></a>
            </div>
            <div className="flex-1 text-center px-8">
                <p className="text-gray-400 text-sm">Free shipping for standard order over $100</p>
            </div>
            <div className="flex items-center gap-8">
                <a href="mailto:fashe@example.com" className="text-gray-400 text-sm">fashe@example.com</a>
                <select className="px-3 py-1.5 bg-gray-100 text-gray-400 text-sm cursor-pointer border-0 outline-none">
                    <option className="bg-white text-gray-600">USD</option>
                    <option className="bg-white text-gray-600">EUR</option>
                </select>
            </div>
        </div>
    );
};

export default TopBar;
