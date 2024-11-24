import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const OfferSection = () => {
    return (
        <div className="bg-purple-50 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">
                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-purple-700 font-bold text-2xl md:text-3xl">
                        Big Deal
                    </h2>
                    <p className="text-gray-800 font-semibold text-xl md:text-4xl mt-2">
                        30% Off for New Customers
                    </p>
                    <button className="mt-6 bg-purple-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
                        Shop Now
                    </button>
                    <button className="btn btn-primary rounded-full p-2 px-4">
                            <MdArrowOutward />
                        </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        height={450}
                        width={400}
                        src="https://i.ibb.co.com/M7yHwnD/image-2.png"
                        alt="Fashion Models"
                        className="max-w-sm md:max-w-md rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferSection;