import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { images } from "../../../constants/images";

const HeroCarousel = () => {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev + 1) % 3);
    };

    const prevHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev - 1 + 3) % 3);
    };

    return (
        <div className="relative w-full h-140 overflow-hidden">
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentHeroSlide === 0 ? "opacity-100" : "opacity-0"}`}>
                <img src={images.carousel.carousel1} alt="Slide 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                    <div className="text-center text-white">
                        <p className="text-lg md:text-xl text-gray-200 mb-4">Women Collection 2018</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-widest">NEW ARRIVALS</h1>
                        <button className="px-8 py-3 bg-white cursor-pointer hover:text-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentHeroSlide === 1 ? "opacity-100" : "opacity-0"}`}>
                <img src={images.carousel.carousel2} alt="Slide 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                    <div className="text-center text-white">
                        <p className="text-lg md:text-xl text-gray-200 mb-4">Women Collection 2018</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-widest">NEW ARRIVALS</h1>
                        <button className="px-8 py-3 bg-white cursor-pointer hover:text-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentHeroSlide === 2 ? "opacity-100" : "opacity-0"}`}>
                <img src={images.carousel.carousel3} alt="Slide 3" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                    <div className="text-center text-white">
                        <p className="text-lg md:text-xl text-gray-200 mb-4">Women Collection 2018</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-widest">NEW ARRIVALS</h1>
                        <button className="px-8 py-3 bg-white cursor-pointer hover:text-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">SHOP NOW</button>
                    </div>
                </div>
            </div>

            <button onClick={prevHeroSlide} className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 bg-gray-700/60 hover:bg-gray-800 transition-colors duration-300 rounded-full">
                <MdChevronLeft size={28} className="text-white" />
            </button>
            <button onClick={nextHeroSlide} className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 bg-gray-700/60 hover:bg-gray-800 transition-colors duration-300 rounded-full">
                <MdChevronRight size={28} className="text-white" />
            </button>
        </div>
    );
};

export default HeroCarousel;
