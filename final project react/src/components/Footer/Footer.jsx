import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterestSquare,
    FaGooglePlusG,
    FaInstagram
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col items-center pt-16 pb-8 bg-[#f0f0f0] px-4">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                <div className="flex flex-col gap-5 lg:w-[30%] pr-4">
                    <h3 className="font-bold text-sm tracking-widest uppercase">GET IN TOUCH</h3>
                    <p className="text-[#8e8583] text-[13px] leading-relaxed">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="flex items-center gap-5">
                        <FaFacebookF className="text-lg text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" />
                        <FaTwitter className="text-lg text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" />
                        <FaPinterestSquare className="text-lg text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" />
                        <FaGooglePlusG className="text-xl text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" />
                        <FaInstagram className="text-lg text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-sm tracking-widest uppercase">CATEGORIES</h3>
                    <div className="flex flex-col gap-3 text-[13px]">
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Men</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Women</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Dresses</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Sunglasses</a>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-sm tracking-widest uppercase">LINKS</h3>
                    <div className="flex flex-col gap-3 text-[13px]">
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Search</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">About Us</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Contact Us</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Returns</a>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-sm tracking-widest uppercase">HELP</h3>
                    <div className="flex flex-col gap-3 text-[13px]">
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Track Order</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Returns</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">Shipping</a>
                        <a className="text-[#8e8583] hover:text-orange-500 transition-colors cursor-pointer" href="#">FAQs</a>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-sm tracking-widest uppercase">NEWSLETTER</h3>
                    <div className="flex flex-col gap-4">
                        <input className="border-b border-[#8e8583] outline-none bg-transparent py-2 text-[13px] placeholder-[#8e8583]" type="email" placeholder="Email Address" />
                        <button className="px-8 py-3 rounded-full bg-black text-white text-[13px] font-bold tracking-widest hover:bg-orange-500 transition-colors uppercase cursor-pointer">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-[#8e8583] text-[13px]">
                Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
