import React from "react";
import Image from 'next/image'
import image1 from '@/app/assets/images/image1.jpeg';
import image2 from "@/app/assets/images/image2.jpeg";
import image3 from "@/app/assets/images/image3.jpeg";
import image4 from "@/app/assets/images/image4.jpeg";
import image5 from "@/app/assets/images/image5.jpeg";
import image6 from "@/app/assets/images/image6.jpeg";
import image7 from "@/app/assets/images/image7.jpeg";
import image8 from "@/app/assets/images/image8.jpeg";
import image9 from "@/app/assets/images/image9.jpeg";
import mobile1 from "@/app/assets/images/mobile1.png";
import mobile2 from "@/app/assets/images/mobile2.png";
import mobile3 from "@/app/assets/images/mobile3.png";

function ContactAsside() {
    return (
        <>
            <div className="relative w-[59.25rem]">
                <div className="group grid grid-cols-3 gap-0 ab">
                    <Image src={image1} alt="" />
                    <Image src={image2} alt="" />
                    <Image src={image3} alt="" />
                    <Image src={image4} alt="" />
                    <Image src={image5} alt="" />
                    <Image src={image6} alt="" />
                    <Image src={image7} alt="" />
                    <Image src={image8} alt="" />
                    <Image src={image9} alt="" />
                </div>
                <div className="absolute inset-0 bg-[#5AD81580]">
                    <div className="flex justify-center items-center">
                        <div className="flex">
                            <Image
                                src={mobile1}
                                className="w-[253px] h-[488px] -mr-28 mt-[121px]"
                                alt=""
                            />
                            <Image
                                src={mobile2}
                                className="w-[253px] h-[488px] -mr-20  mt-[266px]"
                                alt=""
                            />
                            <Image src={mobile3}
                                className="w-[253px] h-[488px] mt-[201px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactAsside;
