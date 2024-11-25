"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import axios from 'axios';
import Link from 'next/link';

const NewArrivals = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const { data } = await axios.get('http://localhost:3000/newArrival/api/get-all');
    setProducts(data?.product);
    setLoading(false);
  }
  // console.log(products);


  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="product-slider mt-5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg text-primary font-bold ">FEATURED PRODUCT</h2>
          <h3 className="text-2xl font-semibold mb-6">New Arrivals</h3>
        </div>
        <div className="flex gap-1">
          <a className="border border-primary p-2 rounded-full hover:bg-slate-400">
            <FaArrowRight />
          </a>
          <a className="border border-primary p-2 rounded-full hover:bg-slate-400">
            <FaArrowLeft />
          </a>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        Pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {
          products?.map((product) => (
            <SwiperSlide key={product._id}>
              <Link href={`/newArrival/${product._id}`}>
                <div className="border rounded-lg p-4 text-center hover:bg-slate-100 hover:scale-95 duration-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={400}
                    width={300}
                    className="h-48 w-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-medium">{product.name}</h4>
                  <p className="text-purple-600 font-semibold">{product.price}</p>
                  <button className="btn btn-outline mt-2">Add to Cart</button>
                </div>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <button className="btn btn-primary mt-6 mx-auto block">See More</button>
    </div>
  );
};

export default NewArrivals;