import React from 'react';
import images from '../../constants/images';

const Title = () => {
    return (
            <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${images.carousel.carousel1})` }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold tracking-widest uppercase">PRODUCTS</h1>
                </div>
            </div>
    );
};

export default Title;