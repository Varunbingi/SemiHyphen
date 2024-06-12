import Link from "next/link"
import Image from "next/image"

function Discover() {
  return (
    <div className="w-full h-full  md:h-[80vh]  flex flex-col justify-center md:gap-10 gap-5 font-['Sarabun'] mt-10">
        <h1 className="font-bold lg:text-4xl text-xl text-center">Discover the  <span className="text-[#6FFFE9]">Waitlist</span></h1>
        <div className="grid md:grid-cols-2 grid-cols-1  ">
        <div className="flex flex-col md:gap-10 gap-5 md:p-24 p-5">
        <h1 className="font-bold lg:text-4xl text-xl ">About <span className="text-[#6FFFE9]">Waitlist</span></h1>
        <p className="opacity-60 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. </p>
        <p className="opacity-60 md:text-xl">Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</p>  
        <Link href="/waitlist" className="flex justify-center items-center text-[#07100E] font-bold p-1 md:px-4 md:py-2 bg-[#5BC0BE]   rounded-md border border-[#3A506B] shadow-md shadow-[#6FFFE9] w-fit">
              <button>Join Waitlist</button>
                  <Image src='/arrow.png' width={12} className="text-[#07100E] "
                    height={12}
                    alt="Picture of the author"/>
              </Link>
        </div>
        <div className="flex flex-col-reverse   ">
           <div><Image src="/Shape.png" width={210} height={198} alt="" ></Image></div>
           <div className="flex justify-center"><Image src="/Shape2.png" width={114} height={108} alt=""></Image></div>
           <div className="flex justify-end w-[75%]"><Image src="/Shape3.png" width={78} height={74} alt=""></Image></div>
           <div className="flex justify-end w-[90%]"><Image src="/Shape3.png" width={50} height={50} alt=""></Image></div>
           <div className="flex justify-end "><Image src="/Shape3.png" width={40} height={40} alt=""></Image></div>
        </div>
        </div>
    </div>
  )
}

export default Discover