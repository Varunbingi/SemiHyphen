

function NewLetter() {
  return (
    <div className="w-full md:h-[60vh] h-full flex justify-center pb-10  ">
    <div className=" md:h-[50vh] h-full w-[90%] grid md:grid-cols-2 grid-cols-1  bg-gradient-to-tl  from-[#167E6E] from-0% via-[#032c26] via-20% to-[#011210] to-60%  justify-center items-center rounded-md">
        <div className="md:p-20 p-5 gap-5 flex flex-col">
            <div className="w-1/3 border-2 border-[#909090]"></div>
            <h1 className="md:text-5xl font-bold text-xl font-['Sarabun'] ">
                Newsletter  
            </h1>
            <p className="opacity-75 w-2/3">Subscribe to the BlazeSwap newsletter to be updated with the ecosystem.</p>
        </div>
        <div  className="md:p-20 p-5 flex flex-col w-full gap-5">
            <h1>Your email address</h1>
            <input type="email" className="bg-[#011210] border border-[#3A506B] text-white md:w-1/2 w-2/3 rounded-md"/>
            <button className="font-bold text-xl bg-[#5BC0BE] text-[#07100E]  p-1 rounded-[10px] border border-[#3A506B] shadow-md shadow-[#6FFFE9] w-fit md:px-4 py-1">signin</button>
        </div>
    </div>
    </div>
  )
}

export default NewLetter