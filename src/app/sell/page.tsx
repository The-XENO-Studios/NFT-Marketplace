import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Form } from "@/components/form";
import { AuroraBackground } from "@/components/ui/aurora-background";

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <AuroraBackground>
        <div className="w-full h-full">
          <Navbar />
          <section>
            <Form />
          </section>

          <Footer />
        </div>
      </AuroraBackground>
    </main>
  );
};

export default page;
