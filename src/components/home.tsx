import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import VideoPlayer from "./landing/VideoPlayer";
import AdvantagesSection from "./landing/AdvantagesSection";
import BenefitsFooter from "./landing/BenefitsFooter";
import React from "react";
import AboutSection from "./landing/AboutSection";

function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <HeroSection />
      <div className="py-16 bg-black">
        <VideoPlayer />
      </div>
      <AdvantagesSection />
      <div className="py-32 bg-black"></div>
      <BenefitsFooter />
      <div className="py-32 bg-black"></div>
      <AboutSection />
      <div className="py-32 bg-black"></div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Header 1
      </h1>
    </div>
  );
}

export default Home;
