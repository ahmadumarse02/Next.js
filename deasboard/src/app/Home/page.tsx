import React from "react";
import Image from 'next/image'
import Asside from "@/app/components/Asside";
import temp from '@/app/assets/images/temp.png'
import moon from '@/app/assets/images/moon.png'
import sun from '@/app/assets/images/sun.png'
import { FaSearch } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import birds from "@/app/assets/images/birds.svg";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Egle from '@/app/assets/images/Egle.png';
import egle from '@/app/assets/images/e.svg';

function Home() {
  return (
    <>
      <div className="flex gap-12 relative">
        <div className="absolute top-0 right-0">
          <Image src={egle} alt="" />
        </div>
        <Asside />
        <section className="w-[72rem] mt-6">
          <div className="header flex justify-between">
            <p className="text-base font-normal">Hi Robert Fox,</p>
            <div className="flex items-center border-2 rounded-xl px-4">
              <FaSearch />
              <input
                type="text"
                className="px-4 py-2 w-full outline-none"
                placeholder="Current Location"
              />
            </div>
          </div>
          <h1 className="text-[#5ad815] font-semibold text-[26px]">
            Welcome back
          </h1>
          <div className="flex">
            <div className="w-[40rem]">
              <div className="flex justify-between">
                <h2 className="text-base font-medium">Today’s Huntcast</h2>
                <div className="flex gap-2 items-center">
                  Switch Icons
                  <FaArrowsRotate />
                </div>
              </div>
              <div className="border border-slate-200 py-5 px-6 rounded-md relative">
                <div className="absolute top-0 right-0"><Image src={egle} alt="" /></div>
                <div className="flex justify-between">
                  <h4 className="text-[#5ad815]">California</h4>
                  <Image src={birds} alt="" />
                </div>
                <p className="text-sm font-normal text-[#00000080] mt-3 mb-5">
                  Mon, 10 pm, Partly cloudy
                </p>
                <div className="flex text-5xl">
                  <Image src={temp} alt="" />
                  11<span className="text-2xl">F</span>
                </div>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-6">
                    <div className="flex gap-4 text-sm">
                      <Image src={sun} alt="" />
                      6:45am
                    </div>
                    <div className="flex gap-4 text-sm">
                      <Image src={sun} alt="" />
                      5:34pm
                    </div>
                    <div className="flex gap-4 text-sm">
                      <Image src={moon} alt="" />
                      6:45am
                    </div>
                    <div className="flex gap-4 text-sm">
                      <Image src={moon} alt="" />
                      5:9pm
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    View Details
                    <FaArrowRight className="text-[#5ad815]" />
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 py-5 px-6 rounded-md mt-8">
                <div className="flex justify-between">
                  <div className="flex gap-10 text-lg items-center">
                    <Image
                      src={temp}
                      alt=""
                      className="w-[46px] h-10"
                    />
                    3 Days Hunt Forecast
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    View Details
                    <FaArrowRight className="text-[#5ad815]" />
                  </div>
                </div>
              </div>
              <div className="border border-slate-200 py-5 px-6 rounded-md mt-8">
                <div className="flex justify-between">
                  <div className="flex gap-10 text-lg items-center">
                    <Image
                      src={temp}
                      alt=""
                      className="w-[46px] h-10"
                    />
                    7 Days Hunt Forecast
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    View Details
                    <FaArrowRight className="text-[#5ad815]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right relative bg-[#5ad815] px-6 ml-12 mt-8 rounded-lg h-full w-[385px] py-5">
              <h3 className="text-white text-base">
                Enjoy Duck Hunt Pro Elite features:
              </h3>
              <p className="text-white text-base flex gap-3 items-center mt-6 mb-4">
                <IoIosArrowDown />3 day hunt forecast
              </p>
              <p className="text-white text-base flex gap-3 items-center mt-6 mb-4">
                <IoIosArrowDown />7 day hunt forecast
              </p>
              <p className="text-white text-base flex gap-3 items-center mt-6 mb-4">
                <IoIosArrowDown />
                Barometer
              </p>
              <p className="text-white text-base flex gap-3 items-center mt-6 mb-4">
                <IoIosArrowDown />
                Moon Phases
              </p>
              <p className="text-white text-base flex gap-3 items-center mt-6 mb-4">
                <IoIosArrowDown />
                Species Select
              </p>
              <div className="absolute top-0 left-0">
                <Image src={Egle} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
