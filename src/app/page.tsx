import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NftScroller from "./components/NftScroller";
import ProfilMargin from "./components/ProfilMargin";
import TopSells from "./components/TopSells";
import { AuroraBackground } from "./components/ui/aurora-background";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AuroraBackground>
        <div className="w-full h-full">
          <Navbar />
          <Hero />
          <NftScroller />
          <TopSells />
          <div id="about" />
          <About />
          <ProfilMargin />
          <FAQ />
          <Footer />
        </div>
      </AuroraBackground>
    </main>
  );
}
