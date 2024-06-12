import Image from "next/image"
import Link from "next/link"

function MainSection() {
  return (
    <div className=" h-[90vh] items-center justify-center grid  grid-cols-2   bg-[url('/bgImg2.png')] bg-no-repeat bg-center  font-['Sarabun']  " >
      
      <div className="flex flex-col gap-10 md:p-24 p-5 ">
          <p className="opacity-60 text-sm md:text-xl ">The Exchange needed on Xion. Everything awesome at one place.</p>
          <h1 className="font-semibold md:font-bold text-2xl lg:text-6xl">REFURBISHING THE REALM OF EXCHANGES</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <Link href="/" className="flex items-center border rounded-md border-white p-1 md:px-4 md:py-2   opacity-70">
                  <button>Start Building</button>
                  <Image src='/arrow.png' width={12} className=" text-[#07100E]"
                    height={12}
                    alt="Picture of the author"/>
                    
              </Link>
              <Link href="/waitlist" className="flex items-center text-[#07100E] font-bold p-1 md:px-4 md:py-2 bg-[#5BC0BE]   rounded-md border border-[#3A506B] shadow-md shadow-[#6FFFE9]">
              <button>Join Waitlist</button>
                  <Image src='/arrow.png' width={12} className="text-[#07100E] "
                    height={12}
                    alt="Picture of the author"/>
              </Link>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
            <div className=" flex justify-center items-center w-[120px] h-[120px] md:w-[230px] md:h-[230px] rounded-full border border-[#6FFFE9]">
                <div className=" flex justify-center items-center  w-[60px] h-[60px] md:w-[123px] md:h-[123px] rounded-full border border-[#6FFFE9]">

                </div>
            </div>   
        </div>
        
    </div>
  )
}

export default MainSection