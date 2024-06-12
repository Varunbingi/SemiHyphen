'use client'
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#040404] from-80% to-[#040404cf] to-100% flex justify-between h-[80px] w-full md:p-10 font-['Sarabun'] ">
        <div className="flex items-center justify-center gap-5 md:gap-14">
            <div className="flex gap-1  ">
                <Image src='/logo.svg' width={42} className=" "
                height={29}
                alt="Logo"/>
                <h1 className="text-[#6FFFE9] font-bold text-xl  ">Semi Hyphen</h1>
            </div>
            <div className="flex   items-center md:gap-10">  
                <div className="flex items-center gap-2 ">
                <Link href="/" className="text-[#909090] font-bold text-xl   ">Doc</Link>
                <div className="w-5 h-5 flex items-center ">
                    <Image src='/arrow.png' width={12} className=" "
                    height={12}
                    alt="Picture of the author"/>
                    </div>
               
                </div>
                <div className="flex items-center gap-2">
                <Link href="/waitlist" className="text-[#909090] font-bold text-xl  ">Waitlist</Link>
                <div className="flex items-center ">
                    <Image src='/arrow.png' width={12} className=" "
                    height={12}
                    alt="Picture of the author"/>
                    </div>
            </div>
                
            </div>
            
        </div>
        <div className="md:flex hidden items-center gap-[30px] h-full"> 
        <div className="flex items-center w-[75px] h-[30px] gap-[15px]">
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#3B3B3B] rounded-full">
                <Image src='/Twitter.png' width={15} className=" "
                    height={15}
                    alt="Picture of the author"/>
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#3B3B3B] rounded-full">
            <Image src='/Telegram.png' width={15} className=" "
                height={15}
                alt="Picture of the author"/>
            </div>
             
            </div>
            <button className="w-[136px] h-[38px] text-[#07100E] font-bold text-xl bg-[#5BC0BE]  py-[5px] rounded-[10px] border border-[#3A506B] shadow-md shadow-[#6FFFE9]">Lanch App</button>
        </div>
    </div>
  )
}

export default Navbar