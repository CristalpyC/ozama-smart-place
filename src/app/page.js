import { NavBar } from "@/components/navbar/NavBar";
import { SolutionPage } from "./sections/Solution-page/SolutionPage";
import { Footer } from "@/components/footer/Footer";
import { UpButton } from "@/components/upButton/UpButton";
import { Stepper } from "./sections/Stepper/Stepper";
import { AboutSection } from "./sections/About-us/AboutSection";
import { HeroSection } from "./sections/Hero/HeroSection";

export default function Home() {
  return (
    <div className="font-sans ">
      <main className="text-gray-700">
        <NavBar />
        <UpButton />
        <HeroSection />
        <AboutSection />
        <SolutionPage />
        <Stepper />
        <Footer />
      </main>
    </div>
  );
}
