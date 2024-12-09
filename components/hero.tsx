import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1341px] bg-[#F0F2F3] h-[100vh] flex flex-col md:flex-row justify-between items-center m-auto px-3 sm:px-20 rounded-b-[30px] lg:px-7 lg:mt-0">
      {" "}
      {/* Add mt-4 for mobile and lg:mt-0 for larger screens */}
      <div className="text-[#272343] mt-20 flex flex-col justify-center gap-8 w-full lg:w-1/2 px-4">
        <h4 className="text-xs tracking-[12%]">WELCOME TO CHAIRY</h4>
        <h1 className="text-[30px] md:text-[40px] lg:text-[60px] font-[1000] leading-tight text-wrap">
          best furniture collection for your interior
        </h1>
        <Button className="text-white bg-[#029FAE] hover:bg-[#029FAE] rounded-[6px] w-max flex items-center">
          <h2 className="text-md">Shop Now</h2>
          <Image src={"/Right 24px.svg"} alt="arrow" height={10} width={30} />
        </Button>
      </div>
      <div className="">
        <Image src={"Product Image.svg"} alt="Chair" width={350} height={400} />
      </div>
    </div>
  );
};

export default Hero;
