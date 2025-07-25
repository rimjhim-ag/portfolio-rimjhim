import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="bg-text-gradient bg-clip-text text-transparent">
               Rimjhim Agrawal
              </span>
            </div>
            <p className="text-muted-foreground">
                          A passionate web developer building modern, scalable websites with a focus on performance, usability, and design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:arimjhim250@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                arimjhim250@gmail.com
              </a>
              <a 
                href="tel:+918279493395"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                +91 8279493395
              </a>
              <p className="text-muted-foreground">Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} </span>
           
            <span>Rimjhim Agrawal</span>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/rimjhim-ag" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/rimjhim-agrawal23000/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
            <a href="mailto:arimjhim250@gmail.com">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;