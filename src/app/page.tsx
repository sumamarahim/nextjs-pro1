import { DialogDemo } from "@/components/dialog";
import Image from "next/image";
import Hero from "@/components/hero";
import Nav from "@/components/navbar/Nav";
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Footer from "@/components/footer";
import Features from "@/components/features";

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="bg-gray-100 text-white h-screen">
      <div className=" mb-12">
        <Nav></Nav>
      </div>
      <div className="mt-10">
        <Hero></Hero>
      </div>

<div>
  <Features/>
</div>

      <Pricing></Pricing>
      <Team></Team>

      <div>
        <Stats></Stats>
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <Footer/>
      </div>
    </main>
  );
}
