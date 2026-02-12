import React from "react";
import { images } from "../../../constants/images";

const CategorySection = () => {
    return (
        <div className="min-h-screen py-16 px-4 md:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.dresses} alt="DRESSES" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">DRESSES</button>
                        </div>
                    </div>
                </div>
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.sunglasses} alt="SUNGLASSES" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">SUNGLASSES</button>
                        </div>
                    </div>
                </div>
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.watches} alt="WATCHES" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">WATCHES</button>
                        </div>
                    </div>
                </div>
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.footwear} alt="FOOTWEAR" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">FOOTWEAR</button>
                        </div>
                    </div>
                </div>
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.bags} alt="BAGS" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">BAGS</button>
                        </div>
                    </div>
                </div>
                <div className="break-inside-avoid">
                    <div className="relative overflow-hidden group">
                        <img src={images.categories.accessories} alt="ACCESSORIES" className="w-full h-auto block transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute bottom-8 w-full flex justify-center pointer-events-none">
                            <button className="bg-white opacity-90 text-gray-900 px-10 py-3 text-sm font-bold tracking-widest shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase pointer-events-auto cursor-pointer">ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
