import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { RiExchange2Fill } from "react-icons/ri";
import { SiContactlesspayment } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (

        <div
            className="hero min-h-screen relative"
            style={{
                backgroundImage: "url('https://i.ibb.co/xgH9Skw/hero-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="hero-overlay bg-black bg-opacity-60"></div>

            {/* Main Content */}
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        Elevate Your Everyday Style
                    </h1>
                    <p className="mb-5">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>
                    <div className='flex justify-center gap-1'>
                        <button className="btn btn-primary rounded-full px-8">Shop Now</button>
                        <button className="btn btn-primary rounded-full p-2 px-4">
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="absolute bottom-0 left-0 w-full bg-primary py-4 px-8 text-center text-white grid sm:grid-cols-1 md:grid-cols-3 gap-4 opacity-70">
                <div>
                    <div className='flex justify-center gap-3'>
                        <FaCartShopping size={20} />
                        <p className="font-bold">  FREE SHIPPING</p>
                    </div>
                    <p>Buy BDT 3000+ & Get Free Delivery</p>
                </div>

                <div>
                    <div className='flex justify-center gap-3'>
                        <RiExchange2Fill size={20} />
                        <p className="font-bold">7 DAYS EXCHANGE</p>
                    </div>
                    <p>Exchange Within 7 Days with Similar Type of Products</p>
                </div>

                <div>
                    <div className='flex justify-center gap-3'>
                        <SiContactlesspayment size={20} color='white' />
                        <p className="font-bold">100% PAYMENT SECURE</p>
                    </div>
                    <p>Cash on Delivery and Secured Online Payment</p>
                </div>
            </div>
        </div>


    );
};

export default Banner;