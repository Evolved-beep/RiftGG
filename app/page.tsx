import Features from "@/components/header/features";
import HeroSection from "@/components/header/hero-section";
import TopPicks from "@/components/header/top-pick";
import CallToAction from "@/components/header/CTA";

export default function Home() {
  return(
    <section className="flex flex-col justify-center items-center w-full">
      <div className="w-full">
        <HeroSection />
        <Features />
        <TopPicks />
        <CallToAction />
      </div>
    </section>
  )
}
