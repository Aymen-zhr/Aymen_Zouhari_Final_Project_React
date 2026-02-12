import React from "react";
import { images } from "../../../constants/images";

const LookbookCountdown = () => {
    return (
        <div className="w-full bg-gray-100 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group overflow-hidden h-[500px] shadow-lg">
                    <img src={images.lookbook.banner} alt="Lookbook" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex flex-col justify-center items-center text-center text-white p-6">
                        <span className="text-2xl md:text-3xl font-medium mb-2 tracking-wide drop-shadow-md">The Beauty</span>
                        <h2 className="text-5xl md:text-6xl font-bold uppercase mb-8 tracking-widest drop-shadow-md">LOOKBOOK</h2>
                        <a href="#" className="text-sm font-bold uppercase tracking-widest border-white/80 hover:border-white hover:border-b pb-1 hover:text-gray-200 ">VIEW COLLECTION</a>
                    </div>
                </div>

                <div className="bg-white flex flex-col items-center justify-center p-8 h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-150 h-170 mb-6 overflow-hidden rounded-lg">
                        <img src={images.lookbook.countdownProduct} className="w-170 h-110 object-contain hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-gray-500 text-lg mb-2">Boxy2 T-Shirt with Roll Sleeve</h3>
                    <p className="text-gray-800 font-medium text-lg mb-8">£14.70</p>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center border border-gray-200 px-3 py-2 min-w-[70px]">
                            <span className="text-gray-500 font-bold text-lg">-2600</span>
                            <span className="text-gray-400 text-xs uppercase">days</span>
                        </div>
                        <div className="flex flex-col items-center border border-gray-200 px-3 py-2 min-w-[70px]">
                            <span className="text-gray-500 font-bold text-lg">-16</span>
                            <span className="text-gray-400 text-xs uppercase">hrs</span>
                        </div>
                        <div className="flex flex-col items-center border border-gray-200 px-3 py-2 min-w-[70px]">
                            <span className="text-gray-500 font-bold text-lg">-8</span>
                            <span className="text-gray-400 text-xs uppercase">mins</span>
                        </div>
                        <div className="flex flex-col items-center border border-gray-200 px-3 py-2 min-w-[70px]">
                            <span className="text-gray-500 font-bold text-lg">-53</span>
                            <span className="text-gray-400 text-xs uppercase">secs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookbookCountdown;
