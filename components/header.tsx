'use client';
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

interface navtype {
  name: string;
  id: number;
  href: string;
}

const navlinks: navtype[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/Section/shop" },
  { id: 3, name: "Product", href: "/Section/Product" },
  { id: 4, name: "Pages", href: "/pages" },
  { id: 5, name: "About", href: "/Section/Aboutus" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-[#272343] w-full">
        <div className="max-w-[1341px] px-7 m-auto h-[45px] flex items-center justify-between">
          <div className="flex gap-1 ">
            <Image
              src={"/check 1.svg"}
              alt="tick"
              height={10}
              width={15}
              className="object-contain"
            />
            <p className="capitalize text-white text-xs font-thin">
              free shopping on all orders $50
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="text-white flex items-center focus:outline-none hover:text-white "
                >
                  <span>Eng</span>
                  <Image
                    src={"Group.svg"}
                    alt="arrow"
                    height={8}
                    width={10}
                    className="object-contain "
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#272343] text-white rounded-xl">
                <DropdownMenuItem className="text-xs">English</DropdownMenuItem>
                <DropdownMenuItem className="text-xs">Urdu</DropdownMenuItem>
                <DropdownMenuItem className="text-xs">French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href={"/Section/Faqs"}>Faqs</Link>
            <div className="flex items-center gap-1 ">
              <Image
                src={"/alert-circle 1.svg"}
                alt="alert icon"
                height={10}
                width={15}
              />

             <Link href={"/Section/contact"}> <p className="capitalize">need help</p></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F2F3] w-full">
        <div className="max-w-[1341px] px-7 m-auto h-[84px] flex items-center justify-between ">
          <div className="flex gap-2 items-center">
            <Image
              src={"/Logo Icon.svg"}
              alt="logo"
              height={40}
              width={40}
              className="object-contain"
            />
            <h1 className="capitalize text-[#272343] text-[25px] font-semibold">
              comforty
            </h1>
          </div>
          <Link href={"/Section/Cart"}>
          <Button className="shadow-none p-5 bg-white hover:bg-white rounded-[8px] ">
            <Image src={"/Group(1).svg"} alt="cart" height={22} width={22}/>
            <h2>Cart</h2>
            <span className="px-[8px] py-[3.5px] text-xs text-white rounded-full bg-[#007580]">
              2
            </span>
          </Button>
          </Link>
        </div>
      </div>
      <div className="w-full shadow-sm"> 
        <div className="max-w-[1341px] m-auto h-[74px] px-7 flex items-center justify-between gap-9 ">
          <div className="flex ">
            {/* Desktop Navigation Links */}
                     {/* Desktop Navigation Links */}
                     <ul className="text-xs text-[#272343] gap-8 transition-colors hidden md:flex">
              {navlinks.map((item) => (
                <li key={item.id} className=" ">
                  <Link href={item.href} className="hover:text-[#007580]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-[#272343]  hover:text-[#007580] focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <RxCross2 size={24} />
              ) : (
                <RxHamburgerMenu size={24} />
              )}
            </button>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <div className="absolute top-44  left-0 right-0 bg-white shadow-md block sm:hidden rounded-md z-10 transition-transform transform translate-y-0">
                <ul className="flex flex-col  items-center p-4">
                  {navlinks.map((item) => (
                    <li key={item.id} className="py-2 hover:text-[#007580] ">
                      <Link href={item.href} onClick={toggleMenu}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <p className="text-[#636270] text-sm">Contact: <span className="text-[#272343]">(808) 555-0111</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;