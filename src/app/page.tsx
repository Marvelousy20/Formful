import Hero from "@/components/Home/Hero";
import LearnMore from "@/components/Home/LearnMore";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <main className="px-20 pt-36 max-w-[1440px] mx-auto">
      <Hero />
      <Why />
      <LearnMore />
    </main>
  );
}
