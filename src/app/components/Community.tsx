import Link from "next/link"
import Image from "next/image"

const Community = () => {
  return (
    <div className="w-full h-[60vh] font-['Sarabun'] flex flex-col items-center justify-center md:gap-10 gap-5">
      <h1 className="md:text-3xl text-xl">
        Join Our <span className="text-[#6FFFE9]">Community</span>
      </h1>
      <h1 className="bg-gradient-to-t from-[#052C26] md:w-1/2 to-[#6FFFE9] inline-block text-transparent bg-clip-text md:text-6xl text-3xl font-bold text-center font-['Sarabun']">Sign Up and Follow Our Community Pages</h1>
      <div className="flex md:gap-20 gap-5"> 
        <div>
        <Link href="/" className="flex items-center border rounded-md border-white p-1 md:px-4 md:py-2  md:gap-5 gap-2 opacity-70">
            <Image src='/Twitter.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>
            <button>Twitter</button>
            <Image src='/arrow.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>          
        </Link>
        </div>
        <div>
        <Link href="/" className="flex items-center border rounded-md border-white p-1 md:px-4 md:py-2 md:gap-5 gap-2opacity-70">
            <Image src='/Telegram.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>
            <button>Telegram</button>
            <Image src='/arrow.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>          
        </Link>
        </div>
        <div>
        <Link href="/" className="flex items-center border rounded-md border-white p-1 md:px-4 md:py-2 md:gap-5 gap-2  opacity-70">
            <Image src='/Medium.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>
            <button>Medium</button>
            <Image src='/arrow.png' width={12} className=" text-[#07100E]" height={12} alt="Picture of the author"/>          
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Community