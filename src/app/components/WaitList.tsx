'use client'
import { useState } from "react";



function WaitList() {
    

    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
      setHoveredItem(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };
    const additionalContent = (index: number) => {
        switch (index) {
          case 0:
            return <p className="opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, accusantium cumque, at assumenda, ullam voluptatibus impedit alias odit saepe exercitationem pariatur? Nihil vitae nostrum illo maiores enim ducimus fugiat ea.</p>;
          case 1:
            return <p className="opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ducimus nobis accusamus, iste iure, expedita qui doloremque inventore quasi accusantium perspiciatis ratione voluptatibus facere quam temporibus aut fuga neque delectus.</p>;
          case 2:
            return <p className="opacity-60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet praesentium voluptas quibusdam aliquam suscipit numquam laudantium libero, molestias, iusto incidunt. Dicta assumenda inventore consequatur numquam alias itaque laudantium tempore.</p>;
          default:
            return null;
        }
      };
  return (
    <div className="w-full h-[100vh]  flex flex-col justify-center md:gap-10 gap-5">
        <h1 className="font-bold lg:text-4xl text-xl text-center">Waitlist Program <span className="text-[#6FFFE9]">Semi Hyphen</span></h1>
        <div className="grid md:grid-cols-2 grid-cols-1  ">
            <div className="p-5 md:p-24 bg-[url('/bgImg3.png')] bg-cover flex flex-col md:gap-10 gap-5  ">
                <h1 className="opacity-60 text-xs md:text-[16px]">Our Solutions</h1>
                <div >
                    <h1 className="md:text-5xl">Our Waitlist Program-</h1>
                    <h1 className="text-[#6FFFE9] md:text-4xl">The following options for whitelist capturing.</h1>
                </div>
                <h1 className="opacity-60 text-xs md:text-[16px]">Wallet Confirmation . Token acquisition . NFT acquisition</h1>
            </div>
            <div className="w-full flex flex-col md:gap-10 gap-5 md:pr-10 p-5 md:p-0">
            <div
                className={`w-full h-full  rounded-xl border border-[#3A506B] p-5  transition-all ease-in-out`}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: hoveredItem === 0 ? '#2b4e33' : '#011210' }}
            >
                <h1 className="md:w-1/2">1. Join waitlist by signing with your Wallet address or with your email.</h1>
                {hoveredItem === 0 && additionalContent(0)}
            </div>
            <div
                className={`w-full h-full  rounded-xl border border-[#33613e] p-5  transition-all ease-in-out`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: hoveredItem === 1 ? '#2b4e33' : '#011210' }}
            >
                <h1>2. Should stake 20,000 SCLX tokens.</h1>
                {hoveredItem === 1 && additionalContent(1)}
            </div>
            <div
                className={`w-full h-full  rounded-xl border border-[#3A506B] p-5 transition-all ease-in-out`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: hoveredItem === 2 ? '#2b4e33' : '#011210' }}
            >
                <h1>3. Should have Scalex Bot NFT</h1>
                {hoveredItem === 2 && additionalContent(2)}
            </div>
            </div>
        </div>
    </div>
  )
}

export default WaitList