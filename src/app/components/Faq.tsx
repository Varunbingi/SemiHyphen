import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function Faq() {
    const [openedItem, setOpenedItem] = useState<string | null>(null);
    

    const handleToggle = (key: string) => {
      setOpenedItem(openedItem === key ? null : key);
    };

  return (
    <div className="h-fit font-['Sarabun'] flex flex-col md:gap-20 gap-10 justify-center items-center pb-10 mt-10">
      <h1 className="font-bold lg:text-4xl text-xl text-center">
        FA<span className="text-[#6FFFE9]">Q</span>
      </h1>
      <div className="flex flex-col md:gap-10 gap-5 w-[90%] md:w-[80%]">
        <Accordion className="flex flex-col gap-10">
          <AccordionItem
            key="1"
            aria-label="Who is the CEO of Semi Hyphen?"
            
            onClick={() => handleToggle("1")}
            className={`rounded-md text-white overflow-hidden transition-all ease-in-out duration-300 ${
              openedItem === "1" ? "bg-gradient-to-t from-[#3A506B] to-[#0f9480]" : "bg-[#040404]"
            }`}
            title={
              <div className="flex items-center w-full p-4">
                <div className="w-10 h-10 rounded-full bg-[#3A506B] text-white flex justify-center items-center mr-5">
                  <h1 className="text-bold text-xl">+</h1>
                </div>
                <h1>Who is the CEO of Semi Hyphen?</h1>
              </div>
            }
          >
            {openedItem === "1" && (
              <div className="w-full p-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi natus possimus distinctio quod perspiciatis omnis, fuga reiciendis nesciunt, veritatis nulla numquam. Et voluptas molestias ab, repellat veritatis excepturi provident.
              </div>
            )}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="What are the features and options on Blazeswap?"
            
            onClick={() => handleToggle("2")}
            className={`rounded-md text-white overflow-hidden transition-all ease-in-out duration-300 ${
              openedItem === "2" ? "bg-gradient-to-t from-[#3A506B] to-[#0f9480]" : "bg-[#040404]"
            }`}
            title={
              <div className="flex items-center w-full p-4">
                <div className="w-10 h-10 rounded-full bg-[#3A506B] text-white flex justify-center items-center mr-5">
                  <h1 className="text-bold text-xl">+</h1>
                </div>
                <h1>What are the features and options on Semi Hyphen?</h1>
              </div>
            }
          >
            {openedItem === "2" && (
              <div className="w-full p-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni necessitatibus quia, neque aliquid iure delectus vitae reprehenderit, doloremque quae voluptas unde exercitationem hic officiis deleniti nulla veritatis quaerat? Autem?
              </div>
            )}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="This year's growth in Semi Hyphen?"
            
            onClick={() => handleToggle("3")}
            className={`rounded-md text-white overflow-hidden transition-all ease-in-out duration-300 ${
              openedItem === "3" ? "bg-gradient-to-t from-[#3A506B] to-[#0f9480]" : "bg-[#040404]"
            }`}
            title={
              <div className="flex items-center w-full p-4">
                <div className="w-10 h-10 rounded-full bg-[#3A506B] text-white flex justify-center items-center mr-5">
                  <h1 className="text-bold text-xl">+</h1>
                </div>
                <h1>This years growth in Blazeswap Swaps?</h1>
              </div>
            }
          >
            {openedItem === "3" && (
              <div className="w-full p-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis esse rerum officia provident alias obcaecati sed? Reiciendis deserunt laboriosam, odio quaerat iure nisi quam est tempora repellat quas praesentium tenetur!
              </div>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
