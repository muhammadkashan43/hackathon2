import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='max-w-[1341px] justify-items-center hover:group-first:cursor-pointer  cursor-pointer m-auto px-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-12 mb-12'>
        <Image src={"Logo.svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(1).svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(2).svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(3).svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(4).svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(5).svg"} alt='logo' height={30} width={100}/>
        <Image src={"Logo(6).svg"} alt='logo' height={30} width={100}/>
    </div>
  )
}

export default Logo