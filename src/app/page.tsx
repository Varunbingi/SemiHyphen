
import Community from "./components/Community";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import NewLetter from "./components/NewLetter";
import Started from "./components/Started";
import WaitList from "./components/WaitList";





export default function Home() {
  return (
    <main >
     <div className="bg-[url('/bgImg.png')] lg:max-w-[1512px] w-screen  bg-opacity-30   ">
        <Navbar/>
        <MainSection/>
        <WaitList/>
        <Started/>
        <Community/>
        <NewLetter/>
        <Footer/>
    </div>
    </main>
  );
}
