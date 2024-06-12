import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function WaitlistMain() {
  const [changeData, setChangeData] = useState("Join Us");
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {
    switch (selectedOption) {
      case 1:
        setChangeData("Join Waitlist");
        break;
      case 2:
        setChangeData("Stake");
        break;
      case 3:
        setChangeData("NFT Acquisition");
        break;
      default:
        setChangeData("Join Us");
    }
  }, [selectedOption]);

  return (
    <div className="md:h-[90vh] h-fit items-center justify-center grid lg:grid-cols-2 grid-col-1 font-['Sarabun']">
      <div className="flex flex-col md:gap-10 gap-5 md:p-24 p-5">
        <h1 className="opacity-60 text-xs md:text-[16px]">Our Solutions</h1>
        <div>
          <h1 className="md:text-5xl text-2xl">Our Waitlist Program-</h1>
          <h1 className="text-[#6FFFE9] md:text-5xl text-2xl">The following options for whitelist capturing.</h1>
        </div>
        <h1 className="opacity-60 text-xs md:text-[16px]">Wallet Confirmation . Token acquisition . NFT acquisition</h1>
        <div className="flex flex-row gap-2 md:gap-8">
          <Link href="/" className="flex items-center border rounded-md border-white p-1 md:px-4 md:py-2 opacity-70">
            <button>Start Building</button>
            <Image src='/arrow.png' width={12} height={12} alt="Arrow" />
          </Link>
          <Link href="/waitlist" className="flex items-center text-[#07100E] font-bold p-1 md:px-4 md:py-2 bg-[#5BC0BE] rounded-md border border-[#3A506B] shadow-md shadow-[#6FFFE9]">
            <button>Join Waitlist</button>
            <Image src='/arrow.png' width={12} height={12} alt="Arrow" />
          </Link>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center p-5">
        <div className="md:w-[80%] md:h-[60%] h-full flex justify-between">
          <div className="w-[70%] h-full border border-[#3A506B] bg-[#011210] rounded-md shadow-md hover:shadow-[#6FFFE9]">
            <div className="p-5 flex flex-col gap-10">
              <div className="justify-center flex items-center w-full">
                <h1 className="font-['Train_One'] w-[90%] text-center py-5 border-2 border-[#3A506B] bg-[url('/bgImg4.png')] bg-no-repeat bg-center rounded-lg bg-opacity-50">{changeData}</h1>
              </div>
              <h1 className="text-center text-[#6FFFE9] md:text-2xl">{changeData}</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</p>
            </div>
          </div>
          <div className="w-[20%] h-full flex flex-wrap items-center text-center md:text-xl text-xs">
            {["WaitList", "Stake", "NFT Acquisition"].map((option, index) => (
              <div
                key={index}
                className={`w-full h-1/4 border border-[#3A506B] bg-[#011210] text-[#6FFFE9] shadow-md hover:shadow-[#6FFFE9] rounded-md ${selectedOption === index + 1 ? "border-[#6FFFE9] shadow-[#6FFFE9]" : ""}`}
                onClick={() => setSelectedOption(index + 1)}
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="w-10 h-10 border border-[#6FFFE9] rounded-full flex justify-center items-center">
                    <div className="w-8 h-8 border border-[#6FFFE9] rounded-full flex justify-center items-center">
                      <h1>{index + 1}</h1>
                    </div>
                  </div>
                  <h1>{option}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistMain;
