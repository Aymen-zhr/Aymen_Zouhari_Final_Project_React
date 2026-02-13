import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className="px-10 py-17.5 md:px-20 lg:px-40 bg-white">
            <nav className='flex items-center gap-1 text-sm text-gray-500 mb-10'>
                <div  className="hover:text-orange-500 transition-colors flex gap-1" >
                <Link to="/">Home</Link>
                
                <span className='flex pt-1 items-center cursor-pointer text-lg'>
                    <MdNavigateNext />
                </span>
                </div>
                <span className="text-gray-400 cursor-pointer hover:text-orange-500">Search</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-light text-slate-800">
                Search
            </h1>
            
        </div>
    );
};

export default Search;