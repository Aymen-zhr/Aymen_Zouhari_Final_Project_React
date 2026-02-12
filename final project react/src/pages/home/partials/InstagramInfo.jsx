import React from "react";

const InstagramInfo = () => {
    return (
        <div className="w-full bg-white pb-16">
            <h2 className="text-3xl font-bold text-center mb-16 tracking-wide text-gray-900 uppercase">@ FOLLOW US ON INSTAGRAM</h2>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="flex-1 py-8 md:px-8">
                        <h3 className="text-gray-800 text-lg font-medium mb-2 uppercase tracking-wide">Free Delivery Worldwide</h3>
                        <p className="text-gray-500 text-sm italic">Mirum est notare quam littera gothica</p>
                    </div>
                    <div className="flex-1 py-8 md:px-8">
                        <h3 className="text-gray-800 text-lg font-medium mb-2 uppercase tracking-wide">30 Days Return</h3>
                        <p className="text-gray-500 text-sm italic">Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className="flex-1 py-8 md:px-8">
                        <h3 className="text-gray-800 text-lg font-medium mb-2 uppercase tracking-wide">Store Opening</h3>
                        <p className="text-gray-500 text-sm italic">Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramInfo;
