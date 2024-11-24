"use client"
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-stone-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a className='hover:text-primary duration-300 font-bold'>Home</a></li>
                        <li><a className='hover:text-primary duration-300 font-bold'>Shop</a></li>
                        <li><a className='hover:text-primary duration-300 font-bold'>Deals</a></li>
                        <li><a className='hover:text-primary duration-300 font-bold'>What,s New</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                <Image src={"/asets/logo.png"} height={120} width={150} alt='footer icon'/>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='hover:text-primary duration-300 font-bold'>Home</a></li>
                    <li><a className='hover:text-primary duration-300 font-bold'>Shop</a></li>
                    <li><a className='hover:text-primary duration-300 font-bold'>Deals</a></li>
                    <li><a className='hover:text-primary duration-300 font-bold'>What,s New</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
            <FaSearch className="block md:hidden " size={22}/>
                <input
                    type="text"
                    placeholder="Search"
                    className="hidden md:block input h-8 mr-2 input-primary max-w-lg " />

                <div className="relative">
                    <MdOutlineShoppingBag size={25} className="mr-1 hover:text-primary cursor-pointer " />
                    <p className="absolute -top-2 -right-1 px-1  bg-slate-900 text-white mx-auto rounded-full text-center">0</p>
                </div>

                <CiUser size={25} className="hover:text-primary cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;