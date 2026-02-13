import React, { useState } from "react";
import { images } from "../../constants/images";
import Topbar from "../../components/Header/TopBar";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { MdNavigateNext } from "react-icons/md";


const Shop = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const products = [
        { id: 1, image: images.products.product5, name: "Boxy T-Shirt with Roll Sleeve Detail", price: "£14.62", sale: false },
        { id: 2, image: images.products.product6, name: "Boxy T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
        { id: 3, image: images.products.product7, name: "Boxy2 T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
        { id: 4, image: images.products.product8, name: "Boxy3 T-Shirt with Roll Sleeve", price: "£14.62", originalPrice: "£21.93", sale: true },
        { id: 5, image: images.products.product1, name: "Boxy4 T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
        { id: 6, image: images.products.product2, name: "Boxy5 T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
        { id: 7, image: images.products.product3, name: "Boxy6 T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
        { id: 8, image: images.products.product4, name: "Boxy7 T-Shirt with Roll Sleeve", price: "£14.62", sale: false },
    ];

    return (
        <div className="w-full">
            <Topbar />
            <Navbar />

            <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${images.carousel.carousel1})` }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold tracking-widest uppercase">PRODUCTS</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Categories</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">Best Seller (8 Items)</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">Featured (8 Items)</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">Men (8 Items)</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">Women (8 Items)</a></li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Color</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">black</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">gray</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">red</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Price</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">0-20</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">20-40</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Size</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">L</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">M</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">S</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-gray-600 text-sm">XL</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 transition-colors text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <select className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 text-sm cursor-pointer">
                                    <option>Alphabetically: A-Z</option>
                                    <option>Alphabetically: Z-A</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 text-sm cursor-pointer">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                </select>
                            </div>
                            <p className="text-gray-500 text-sm">Showing 1 to 6 of 8 items</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="group cursor-pointer">
                                    <div className="relative overflow-hidden mb-4">
                                        {product.sale && (
                                            <span className="absolute top-3 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-full uppercase z-10">Sale</span>
                                        )}
                                        <img src={product.image} alt={product.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                            <button className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-all cursor-pointer">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-gray-700 text-sm mb-2">{product.name}</h3>
                                    <div className="flex items-center gap-2">
                                        {product.originalPrice && (
                                            <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                                        )}
                                        <span className={`text-sm font-medium ${product.sale ? 'text-red-500' : 'text-gray-900'}`}>{product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-orange-500 transition-colors cursor-pointer">1</button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">2</button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"><MdNavigateNext /></button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Shop;
