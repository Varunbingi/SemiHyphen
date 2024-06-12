import { useState } from "react";
import Image from "next/image";

function Work() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  const renderText = () => {
    switch (selectedNumber) {
      case 1:
        return (
          <>
            <h1 className="text-[#6FFFE9] text-center text-xl">Task Completion</h1>
            <p className="text-center lg:w-1/2">Join the waitlist now to secure your spot and gain early access to the innovative features and benefits of the Semi Hyphen ecosystem.</p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="text-[#6FFFE9] text-center text-xl">Get Whitelisted</h1>
            <p className="text-center lg:w-1/2">Get Whitelisted to start exchanging and trading on the Blazwswap platform, gaining early access to exclusive features and benefits.</p>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="text-[#6FFFE9] text-center text-xl">Score Points</h1>
            <p className="text-center lg:w-1/2">Complete tasks and score points to unlock rewards and exclusive features on the platform.</p>
          </>
        );
      case 4:
        return (
          <>
            <h1 className="text-[#6FFFE9] text-center text-xl">Lead the Board</h1>
            <p className="text-center lg:w-1/2">Climb to the top of the leaderboard to win exciting rewards and exclusive prizes.</p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-[#6FFFE9] text-center text-xl">Task Completion</h1>
            <p className="text-center lg:w-1/2">Join the waitlist now to secure your spot and gain early access to the innovative features and benefits of the Semi Hyphen ecosystem.</p>
          </>
        );
    }
  };

  return (
    <div className="w-full lg:h-[80vh] h-full font-['Sarabun'] mt-10 p-5">
      <h1 className="font-bold lg:text-4xl text-xl text-center p-10">How it <span className="text-[#6FFFE9]">Works?</span></h1>
      <div className="grid grid-cols-1 w-full h-fit justify-center items-center">
        <div className="w-full h-full flex flex-col justify-end items-center">
          <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#1D1D1D] rounded-md border border-[#3A506B]">
            <Image src="/work.png" width={54} height={60} alt="" />
          </div>
          <div className="border-dotted border-[#6FFFE9] border-2 h-full"></div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {[1, 2, 3, 4].map((number) => (
              <div key={number} className="flex items-center">
                <div className="border-dotted border-2 border-[#6FFFE9] md:w-[75px] w-[30px]"></div>
                <div
                  className={`border border-[#3A506B] md:w-[75px] md:h-[75px] flex justify-center items-center text-2xl font-bold ${
                    selectedNumber === number ? "text-[#909090] bg-[#6FFFE9]" : "text-[#909090] bg-[#1D1D1D]"
                  } rounded-md`}
                  onClick={() => handleNumberClick(number)}
                >
                  #{number}
                </div>
                <div className="border-dotted border-[#6FFFE9] border-2 md:w-[75px] w-[30px]"></div>
              </div>
            ))}
          </div>
          <div className="p-5 flex flex-col justify-center items-center leading-10">
            {renderText()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
