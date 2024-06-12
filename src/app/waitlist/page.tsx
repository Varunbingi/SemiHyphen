'use client'

import Discover from "../components/Discover"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WaitlistMain from "../components/WailtListMain"
import Work from "../components/Work"


export default function WaitList(){
    return(
    
      <div className="bg-[url('/bgImg.png')]  lg:max-w-[1512px] w-screen  bg-opacity-30   ">
        <Navbar/>
        <WaitlistMain/>
        <Discover/>
        <Work/>
        <Faq/>
        <Footer/>
     </div>
     
       
    )
   }