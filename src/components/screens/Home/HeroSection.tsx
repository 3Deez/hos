"use client";
import Image from "next/image";
import React from "react";

const StateLogo = "/images/state-logo.png";

function HeroSection() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen text-center text-white bg-home-bg'>
      <div className='h-[90%] w-[80%] flex items-center justify-center flex-col gap-y-8 pt-10'>
        {/* Logo Section */}
        <div className='w-[190px] flex items-center justify-center  h-[190px] rounded-full bg-white'>
          <Image src={StateLogo} alt='Head of Service Logo' height={90} width={100} quality={100} />
        </div>

        {/* Office write up */}

        <h3 className='text-[32px] font-bold'>OFFICE OF HEAD OF SERVICE, NIGER STATE</h3>

        <h1 className='text-[50px] uppercase font-extrabold'>
          “opportunities for all in the <br /> atmosphere of peace”
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
