import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuroraBackground } from "./components/ui/aurora-background";

const notFound = () => {
  return (
    <main className="overflow-x-hidden">
      <AuroraBackground>
        <div className="w-full h-full">
          <Navbar />
          <section className="w-full h-full flex items-center justify-center text-white">
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
              <h1 className="text-9xl font-extrabold text-white tracking-widest">
                404
              </h1>
              <div className="bg-purple-500 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
              </div>
              <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-purple-500 group active:text-purple-600 focus:outline-none focus:ring">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <Link
                    className="relative block px-8 py-3 bg-[#1A2238] border border-current"
                    href={"/"}
                  >
                    Go Home
                  </Link>
                </a>
              </button>
            </main>
          </section>
          <Footer />
        </div>
      </AuroraBackground>
    </main>
  );
};

export default notFound;
