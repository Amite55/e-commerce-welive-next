"use client"
import NewArrivals from '@/components/NewArrivalsSection/NewArrivals';
import ReviewSection from '@/components/ReviewSection/ReviewSection';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NewArrivalsPage = ({params}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        const {data} = await axios.get(`http://localhost:3000/newArrival/api/${params.id}`);
        setProduct(data?.product);
        setLoading(false);
    }
    console.log(product);
    useEffect(()=> {
        loadData()
    }, [])
    return (
        <>
        <div className='bg-white text-black grid grid-cols-1 md:grid-cols-2 py-7'>
            <div>
                <Image src={product?.image} height={500} width={400} alt='image' />
            </div>

            <div className='space-y-5'>
                <div className='space-y-4'>
                    <button className='btn bg-[#3a2960] text-white px-3 '>New Arrivals!</button>
                    <h3 className='text-2xl'>{product?.name}</h3>
                    {/*  ==================  rating ============ */}
                    <div className='flex gap-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className='flex'>
                            <p>(4.2)</p>
                            <p className='text-primary'>121 review</p>
                        </div>
                    </div>
                    <h5 className='text-2xl'>BDT 2500</h5>
                </div>
                <div className="divider"></div>
                <div className='flex justify-between pr-10 gap-5'>
                    <div className='space-y-3'>
                        <p>Available Size</p>
                        <div className='flex items-center gap-5'>
                            <p className='text-primary border border-primary rounded-md p-1'>S</p>
                            <p className='text-primary hover:border border-primary rounded-md p-1'>M</p>
                            <p className='text-primary hover:border border-primary rounded-md p-1'>L</p>
                            <p className='text-primary hover:border border-primary rounded-md p-1'>XL</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p>Available Color</p>
                        <div className='flex gap-2'>
                            <p><span className='px-2  rounded-full border border-primary mr-1'></span>Of White</p>
                            <p><span className='px-2  bg-black rounded-full border border-primary mr-1'></span>Black</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>

                <div>
                    <p>Quality</p>
                    <div className='bg-purple-100 flex gap-5 text-2xl w-32 items-center px-3 rounded-full'>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-1'>
                    <button className='btn btn-primary btn-sm '>By Now</button>
                    <button className="btn btn-outline btn-sm ">Add to Cart</button>
                </div>
            </div>
        </div>


        <ReviewSection/>

        <NewArrivals/>
       </>
    );
};

export default NewArrivalsPage;