import { ArrowDown } from "lucide-react";
import ProfileImage from "@/assets/self-photo.jpg"
import Orb from "@/components/ui/Orb";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 pt-5"
    >
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 z-10">
        {/* LEFT: Text Section */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nadifah
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Aulia Rahmani
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            A cybersecurity enthusiast with a growing passion for securing the digital world, 
            especially in the realm of Web Development, Security, and Operations. 
            Driven by the mission to build systems that are not only functional, but also resilient and secure.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-8 md:mt-0">
  {/* Orb Wrapper - slightly bigger than image */}
  <div className="absolute z-0 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={280}
              forceHoverState={false}
            />
          </div>

  {/* Profile Image Wrapper */}
  <div className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
    <img
      src={ProfileImage}
      alt="Profile"
      className="rounded-full w-full h-full object-cover border-2 border-background"
    />
  </div>
</div>
</div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs md:text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </div>
    </section>
  );
};
