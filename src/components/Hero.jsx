import CTA from "./CTA";
import Features from "./Features";
import MusicBox from "./MusicBox";

const Hero = () => {
  return (
    <div className="bg-[#160016] w-full min-h-screen">
      <CTA />
      <MusicBox />
      <Features />
    </div>
  );
};

export default Hero;