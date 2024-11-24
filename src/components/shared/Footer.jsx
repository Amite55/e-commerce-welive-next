"use client"

import Image from 'next/image';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <div>
            {/* ================== footer fast section ================= */}
            <footer className="footer justify-evenly text-base-200 bg-slate-800  mx-auto text-center  p-10 md:px-20">
                <nav>
                    <a className="btn btn-ghost text-2xl">
                    <Image src={"/asets/footerLogo.png"} height={120} width={150} alt='footer icon'/>
                    </a>
                    <p className='items-start md:w-5/12'>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
                </nav>
                <form>
                    <h6 className="text-base-100 tracking-wide font-bold text-2xl">Sing Up for Our Newsletter!</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-base-100">Get notified about updates and be the first to get early access to new Podcast episodes.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>

            <footer className="footer text-base-200 bg-slate-800 p-10">
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">support@we5ive.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Privacy policy</h6>
                    <a className="link link-hover">Terms & Condition</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Link</h6>
                    <div className='flex gap-5'>
                        <a className="link link-hover">
                            <FaFacebook size={28}   />
                        </a>
                        <a className="link link-hover">
                            <FaSquareXTwitter size={28} />
                        </a>
                        <a className="link link-hover">
                            <GrLinkedin size={28}  />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;