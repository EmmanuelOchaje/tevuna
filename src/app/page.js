import Image from "next/image";
import NavigationBar from "./components/nav";
import Hero from "./components/hero";
import waves from "../app/images/waves.png";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";
import About from "./components/about";
import GetInTouch from "./components/getInTouch";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="text-white bg-[#17223e]">
      <div
        style={{ backgroundImage: `url(${waves.src})` }}
        className="bg-cover hidden md:block bg-no-repeat"
      >
        <NavigationBar />
        <Hero />
      </div>
      <div className="bg-cover md:hidden bg-no-repeat">
        <NavigationBar />
        <Hero />
      </div>
      <About />
      <SectionTwo />
      <SectionOne />
      <GetInTouch />
      <Footer />
    </div>
  );
}
