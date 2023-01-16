import Hero from "@/components/Home/Hero";
import LearnMore from "@/components/Home/LearnMore";
import Navbar from "@/components/Home/Navbar";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <main className="px-10">
      <Navbar />
      <Hero />
      <Why />
      <LearnMore />
    </main>
  );
}
