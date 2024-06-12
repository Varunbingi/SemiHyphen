import Link from "next/link";
import Image from "next/image";

function Started() {
  return (
    <div className="w-full md:h-[80vh] h-full flex justify-center pb-10  ">
      <div className="bg-gradient-to-tl  from-[#167E6E] from-0% via-[#032c26] via-20% to-[#011210] to-60% w-[90%] rounded-lg md:h-[70vh] h-full ">
        <div className="flex justify-between md:p-10 p-5">
          <h1 className="md:w-1/4 w-1/2 font-semibold md:text-4xl">Getting Started with  <span className="text-[#6FFFE9]">   Semi Hyphen</span></h1>
          <div>
          <Link href="/waitlist" className="flex items-center text-[#07100E] font-bold p-1 md:px-4 md:py-2 bg-[#5BC0BE]   rounded-md border border-[#3A506B] shadow-md shadow-[#6FFFE9]">
              <button>Join Waitlist</button>
                  <Image src='/arrow.png' width={12} className="text-[#040404] "
                    height={12}
                    alt="Picture of the author"/>
              </Link>
          </div>
          
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-around ">
          <div className="md:p-10 p-5 flex flex-col md:gap-5 gap-2">
            <div className="w-[45px] h-[45px] bg-[#167E6E] rounded-md flex justify-center items-center"> 
              <Image src='/swap.png' width={25} height={25} alt="Picture of the author" />   
            </div>
            <h1 className="font-bold">Swap</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</p>
          </div>
          <div className="md:p-10 p-5 flex flex-col gap-2 md:gap-5">
          <div className="w-[45px] h-[45px] bg-[#167E6E] rounded-md flex justify-center items-center">
            <Image src='/liquidity.png' width={25} height={25} alt="Picture of the author"/>    
          </div> 
            <h1 className="font-bold">Liquidity</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</p>
          </div>
          <div className="md:p-10 p-5 flex flex-col gap-2 md:gap-5">
            <div className="w-[45px] h-[45px] bg-[#167E6E] rounded-md flex justify-center items-center">
              <Image src='/bridge.png' width={25} height={25} alt="Picture of the author"/>
            </div>
            <h1 className="font-bold">Bridge</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Started