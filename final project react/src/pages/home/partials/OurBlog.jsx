import React from "react";
import { images } from "../../../constants/images";

const OurBlog = () => {
    return (
        <div className="w-full py-16 bg-white px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16 tracking-wide text-gray-900 uppercase">OUR BLOG</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <div className="overflow-hidden mb-6 group cursor-pointer block">
                            <img src={images.blog.blog1} alt="Black Friday Guide: Best Sales & Discount Codes" className="w-full h-auto transition-transform duration-500 group-hover:scale-110 object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 cursor-pointer transition-colors leading-tight">
                            Black Friday Guide: Best Sales & Discount Codes
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">
                            by <span className="text-gray-900 border-r border-gray-300 pr-2 mr-2">fashe-theme Admin</span> on Dec 28,2017
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="overflow-hidden mb-6 group cursor-pointer block">
                            <img src={images.blog.blog2} alt="The White Sneakers Nearly Every Fashion Girls Own" className="w-full h-auto transition-transform duration-500 group-hover:scale-110 object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 cursor-pointer transition-colors leading-tight">
                            The White Sneakers Nearly Every Fashion Girls Own
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">
                            by <span className="text-gray-900 border-r border-gray-300 pr-2 mr-2">fashe-theme Admin</span> on Dec 28,2017
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="overflow-hidden mb-6 group cursor-pointer block">
                            <img src={images.blog.blog3} alt="New York SS 2018 Street Style: By Annina Mislin" className="w-full h-auto transition-transform duration-500 group-hover:scale-110 object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 cursor-pointer transition-colors leading-tight">
                            New York SS 2018 Street Style: By Annina Mislin
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">
                            by <span className="text-gray-900 border-r border-gray-300 pr-2 mr-2">fashe-theme Admin</span> on Dec 28,2017
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
