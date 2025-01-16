import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import VideoPlayer from "./landing/VideoPlayer";
import BenefitsFooter from "./landing/BenefitsFooter";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#2B5C0F]">
      <Header />
      <HeroSection />
      <div className="py-16">
        <VideoPlayer />
      </div>
      <BenefitsFooter />
    </div>
  );
}

export default Home;
