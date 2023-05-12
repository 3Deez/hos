"use client";
import Image from "next/image";
import { document } from "postcss";
import React, { useEffect, useRef } from "react";

const StateLogo = "/images/state-logo.png";

function HeroSection() {
  const stateLogoRef = useRef() as React.LegacyRef<HTMLDivElement>;

  useEffect(() => {
    function fadeLogo(e: Event) {
      if (window.scrollY < 400) {
        const stateLogo = window.document.getElementById("stateLogo");

        // stateLogo.style.opacity = 0.6;
      }
    }
    window.addEventListener("scroll", fadeLogo);

    return () => window.removeEventListener("scroll", fadeLogo);
  });
  return (
    <div
      className='bg-linear_gradient'
      style={
        {
          // background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 24.25%, #1E98C9 78.05%)",
        }
      }
    >
      <div
        className='flex items-start justify-center w-full min-h-[110vh] text-center text-white '
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 40%, #1E98C9 100%), url('/images/home-bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='h-[500px] mt-[14%] w-[80%] flex items-center justify-center flex-col gap-y-8 pt-10'>
          {/* Logo Section */}
          <div
            id='stateLogo'
            ref={stateLogoRef}
            className='w-[190px] flex items-center justify-center  h-[190px] rounded-full bg-white'
          >
            <Image
              src={StateLogo}
              alt='Head of Service Logo'
              height={90}
              width={100}
              quality={100}
            />
          </div>

          {/* Office write up */}

          <h3 className='text-[32px] font-bold'>OFFICE OF HEAD OF SERVICE, NIGER STATE</h3>

          <h1 className='text-[50px] uppercase font-extrabold'>
            “opportunities for all in the <br /> atmosphere of peace”
          </h1>
        </div>
      </div>

      <div className='h-[200px]'></div>
    </div>
  );
}

export default HeroSection;
