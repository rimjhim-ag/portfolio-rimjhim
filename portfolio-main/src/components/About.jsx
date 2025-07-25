import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript",  "React",  "Node.js", "Express.js",
    "MySQL", "MongoDB", "Git", "VsCode","HTML","CSS"
  ];

  const achievements = [
    "Completed and hosted websites for startups and clients as a freelancer",
  "Hands-on internship experience in full-stack web development (MERN stack)",
  "Delivered production-ready projects with real-world features and UI/UX design",
  "Contributed to both frontend and backend systems with API integration",
  "Built secure, responsive, and SEO-friendly websites from scratch",

  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                 I'm a motivated full-stack developer passionate about building clean, scalable web applications. I’ve worked extensively with the MERN stack, creating real-world projects that are both functional and user-friendly.
              </p>
              
              <p className="text-lg leading-relaxed">
                With hands-on experience from internships and freelance work, I specialize in crafting seamless user experiences and maintainable backend systems. I bring strong attention to detail, responsiveness, and commitment to every project.
              </p>
            </div>
            
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-card-gradient border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold">What I Bring to Your Project:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clean, maintainable code following best practices</li>
                  <li>• Responsive design that works on all devices</li>
                  <li>• Performance optimization for faster load times</li>
                  <li>• Clear communication throughout the development process</li>
                  <li>• On-time delivery and ongoing support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;