import React from "react";
import Image from 'next/image'
import logo from "@/app/assets/images/logo.svg";
import { CiSettings } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import duck from "@/app/assets/images/duck.svg";
import { FaChevronDown } from "react-icons/fa";

function Asside() {
  return (
    <>
      <div className="asside w-[18rem] flex justify-center shadow-2xl h-svh  py-8">
        <div className="">
          <div className="logo text-xl flex items-center gap-3 font-semibold text-black">
            <Image src={logo} alt="" />
            <p>Duck Hunt Pro</p>
          </div>
          <div className="h-[0.5px] w-56 bg-black my-8"></div>
          <div className="space-y-8 cursor-pointer">
            <div className="flex font-normal text-base gap-7 items-center">
              <GoHome />
              Home
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <CgProfile />
              Social Profile
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <CiSettings />
              App Setting
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <Image src={duck} alt="" />
              Species
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <MdOutlinePayments />
              payments
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <CiSettings />
              upgrade
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <CiSquareInfo />
              Help & Info <FaChevronDown />
            </div>
            <div className="flex font-normal text-base gap-7 items-center">
              <IoIosLogOut />
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Asside;
