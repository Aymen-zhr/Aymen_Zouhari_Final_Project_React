import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { images } from "../../../constants/images";

const FeaturedProducts = () => {
    const [productIndex, setProductIndex] = useState(1);
    const [isProductTransitioning, setIsProductTransitioning] = useState(false);
    const [isProductAnimating, setIsProductAnimating] = useState(false);

    const nextProductSlide = () => {
        if (isProductAnimating) return;
        setIsProductAnimating(true);
        setIsProductTransitioning(true);
        setProductIndex((prev) => prev + 1);
    };

    const prevProductSlide = () => {
        if (isProductAnimating) return;
        setIsProductAnimating(true);
        setIsProductTransitioning(true);
        setProductIndex((prev) => prev - 1);
    };

    const handleProductTransitionEnd = () => {
        setIsProductAnimating(false);
        if (productIndex === 3) {
            setIsProductTransitioning(false);
            setProductIndex(1);
        }
        else if (productIndex === 0) {
            setIsProductTransitioning(false);
            setProductIndex(2);
        }
    };

    return (
        <div className="w-full py-16 bg-white relative">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-wide text-gray-900 uppercase">Featured Products</h2>

            <div className="relative max-w-7xl mx-auto px-12 group">
                <div className="overflow-hidden">
                    <div
                        className={`flex ${isProductTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                        onTransitionEnd={handleProductTransitionEnd}
                        style={{
                            width: '400%',
                            transform: `translateX(-${productIndex * 25}%)`
                        }}
                    >
                        <div className="w-1/4 flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product1} alt="Boxy7 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy7 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product2} alt="Boxy6 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy6 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product3} alt="Boxy5 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy5 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product4} alt="Boxy4 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy4 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product5} alt="Boxy3 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute top-3 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-full uppercase shadow-sm">Sale</div>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy3 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center">
                                        <span className="text-gray-400 line-through text-sm">£22.04</span>
                                        <span className="font-normal text-[15px] text-red-500">£14.70</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product6} alt="Boxy2 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy2 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product7} alt="Boxy1 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy1 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product8} alt="Boxy T-Shirt with Roll Sleeve Detail" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy T-Shirt with Roll Sleeve Detail</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product1} alt="Boxy7 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy7 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product2} alt="Boxy6 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy6 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product3} alt="Boxy5 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy5 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product4} alt="Boxy4 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy4 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product5} alt="Boxy3 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute top-3 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-full uppercase shadow-sm">Sale</div>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy3 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center">
                                        <span className="text-gray-400 line-through text-sm">£22.04</span>
                                        <span className="font-normal text-[15px] text-red-500">£14.70</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product6} alt="Boxy2 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy2 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product7} alt="Boxy1 T-Shirt with Roll Sleeve" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy1 T-Shirt with Roll Sleeve</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                            <div className="group/item cursor-pointer">
                                <div className="relative overflow-hidden bg-white mb-4">
                                    <img src={images.products.product8} alt="Boxy T-Shirt with Roll Sleeve Detail" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 w-full flex justify-center pb-2">
                                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg whitespace-nowrap cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-orange-500 text-[15px] mb-1 font-normal">Boxy T-Shirt with Roll Sleeve Detail</h3>
                                    <div className="flex gap-3 items-center"><span className="font-normal text-[15px] text-gray-600">£14.70</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={prevProductSlide} className="absolute -left-12 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors z-10 p-2 cursor-pointer"><MdChevronLeft size={50} /></button>
                <button onClick={nextProductSlide} className="absolute -right-12 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors z-10 p-2 cursor-pointer"><MdChevronRight size={50} /></button>
            </div>
        </div>
    );
};

export default FeaturedProducts;
