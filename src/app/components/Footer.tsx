import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <div className="w-full h-[60vh] bg-[#040404] font-['Sarabun'] grid grid-cols-1 justify-between">
      <div className="grid grid-cols-2 justify-center items-center">
        <Image width={150} height={100} src='/logo.svg' alt=""/>
        <div className="flex flex-wrap md:justify-around justify-between gap-5"> 
          <div className="flex flex-wrap gap-10 md:gap-20">
            <div className="flex flex-col gap-5">
                <h1 className="opacity-60">Product</h1>
                <ul>
                  <li><Link href='/'>Doc</Link></li>
                  <li><Link href='/waitlist'>Waitlist</Link></li>
                </ul>
            </div>
            <div  className="flex flex-col gap-5">
              <h1 className="opacity-60">Info</h1>
              <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/waitlist'>Waitlist</Link></li>
                <li>About us</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <button className="w-[136px] h-[38px] text-[#07100E] font-bold text-xl bg-[#5BC0BE]  py-[5px] rounded-[10px] border border-[#3A506B] shadow-md shadow-[#6FFFE9]">Lanch App</button>
        </div>
      </div>
      <div className="grid grid-cols-2  items-end ">
       
        <h1 className=" relative bg-gradient-to-t from-[#052C26]  to-[#6FFFE9]   text-transparent bg-clip-text inline-block  lg:text-9xl text-4xl font-bold text-center font-['Sarabun']  h-[45%]">Semi Hyphen</h1>
        
       <h1 className="text-center">© Semi Hyphen 2024</h1>
        
      </div>
    </div>
  )
}

export default Footer