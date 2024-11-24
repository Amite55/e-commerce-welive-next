import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const MenCollection = () => {
    return (
        <div className=" w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">


                {/* Image Section */}
                <div className="w-full bg-purple-50 md:w-1/2 flex justify-center">
                    <Image
                        height={450}
                        width={400}
                        src="https://i.ibb.co.com/LY7RWMG/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man-1.png"
                        alt="Fashion Models"
                        className="max-w-sm md:max-w-md rounded-md"
                    />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left items-start">
                    <p className="text-gray-800 font-semibold text-xl md:text-4xl mt-2">
                    MEN COLLECTION
                    </p>
                    <button className="mt-6 bg-purple-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
                        Shop Now
                    </button>
                    <button className="btn btn-primary rounded-full p-2 px-4">
                        <MdArrowOutward />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default MenCollection;