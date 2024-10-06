'use client';
import React from "react";
import Image from 'next/image'
import ContactAsside from "@/app/components/ContactAsside";
import logo from '@/app/assets/images/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import Link from "next/link";

function SignIn() {
    return (
        <>
            <section>
                <div className="flex gap-12">
                    <ContactAsside />
                    <div className="">
                        <div className="">
                            <Image src={logo} alt="" className=" mt-20 mx-48 mb-4" />
                            <h1 className="text-2xl font-semibold text-center mb-12">
                                Duck Hunt Pro
                            </h1>
                            <h2 className="text-2xl font-semibold text-[#5AD815] mb-8">
                                Sign In
                            </h2>
                            <div className="flex items-center  border-b-2 rounded-xl px-4 gap-3 pb-3 mb-8">
                                <MdOutlineMail />
                                <input
                                    type="text"
                                    placeholder="Email Id"
                                    className="outline-none"
                                />
                            </div>
                            <div className="flex items-center  border-b-2 rounded-xl px-4 gap-3 pb-3 mb-2">
                                <IoMdUnlock />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="outline-none"
                                />
                            </div>
                            <p className="text-sm mb-10 text-[#00000080]">
                                Forgot Password
                            </p>
                            <button className="text-center text-white w-full py-3.5 rounded-md bg-[#5AD815]">
                                <Link href="/Home">SignIn</Link>
                            </button>
                            <div className="flex items-center gap-2 mt-10 mb-5">
                                <div className="w-[150px] h-[0.5px] bg-slate-500"></div>
                                <p className="text-center">Or Sign Up with</p>
                                <div className="w-[150px] h-[0.5px] bg-slate-500"></div>
                            </div>
                            <div className="flex gap-4 justify-center">
                                <FaFacebookF className="bg-blue-700 p-2 text-white rounded-full w-[30px] h-[30px]" />
                                <FaGoogle className="bg-red-700 p-2 text-white rounded-full w-[30px] h-[30px]" />
                            </div>
                            <p className="text-sm text-center mt-5">
                                Already have an account?
                                <span className="text-[#5AD815]">
                                    create one
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
