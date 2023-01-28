import Hero from "@/components/Home/Hero";
import LearnMore from "@/components/Home/LearnMore";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <main className="px-4 md:px-20 pt-36 overflow-hidden">
      <Hero />
      <Why />
      <LearnMore />
    </main>
  );
}
