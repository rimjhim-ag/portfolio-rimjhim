import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import stackstreamImage from "@/assets/stackstream.png";
import portfolioImage from "@/assets/portfolio.png";
import mecroxImage from "@/assets/mecrox.png";


const Portfolio = () => {
  const projects = [
  {
    title: "StackStream",
    description: "A Stack Overflow clone built using the MERN stack with features like question posting, voting, and dynamic theming based on time of day.",
    image: stackstreamImage, // replace with actual image import
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    liveUrl: "https://stackstream-mauve.vercel.app/", // your deployed link
    
  },
  {
    title: "Portfolio Website",
    description: "A responsive and interactive personal portfolio website showcasing my projects, skills, and services using modern UI/UX design principles.",
    image: portfolioImage, // replace with actual image import
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide", "Vite", "NodeMailer"],
    liveUrl: "https://portfolio-rimjhim.vercel.app/",
   
  },
 {
  title: "Company Landing Page",
  description: "A full-stack company website developed for Mecrox Tech using React for frontend and Node.js with Express.js for backend. Deployed on GoDaddy with SSL certificate integration for secure and professional web presence.",
  image: mecroxImage, // replace with actual image import
  technologies: ["React", "Node.js", "Express.js", "GoDaddy", "SSL"],
  liveUrl: "https://mecrox.in", // replace with actual live URL if hosted
  
}

];


  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the innovative solutions I've created for clients
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                   
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
