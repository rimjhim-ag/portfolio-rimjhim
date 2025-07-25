import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background sm:pt-20 pt-16">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />

      {/* Main Container */}
     <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left lg:pl-20">


        {/* Content */}
        <div className="space-y-8 flex flex-col items-center lg:items-start">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Web
              </span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Crafting exceptional digital experiences through innovative web development and design solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary/20 hover:border-primary/40"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </Button>
          </div>

          <div className="flex gap-6 pt-4 justify-center lg:justify-start">
            <a href="https://github.com/rimjhim-ag" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/rimjhim-agrawal23000/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
            <a href="mailto:arimjhim250@gmail.com">
              <Mail className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Image */}
<div className="relative flex justify-center  -translate-y-10 sm:mt-17 mt-10">
  <img 
    src={heroImage} 
    alt="Professional workspace" 
    className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-contain rounded-full shadow-xl"
  />
</div>


      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <div className="hidden md:flex absolute bottom-20 left-1/2 transform -translate-x-1/2 gap-12 px-6 sm:px-10">
        <button
          onClick={() => scrollToSection('services')}
          className="text-base md:text-xl text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-base md:text-xl text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-base md:text-xl text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
        >
          Contact
        </button>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
<div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <ArrowDown className="w-6 h-6 text-muted-foreground" />
</div>

    </section>
  );
};

export default Hero;
