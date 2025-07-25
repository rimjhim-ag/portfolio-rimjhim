import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "arimjhim250@gmail.com",
    link: "mailto:arimjhim250@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 8279493395",
    link: "tel:+918279493395"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Remote (India-based)",
    link: null
  },
  {
    icon: Clock,
    title: "Availability",
    details: "Mon to Sat, until 8 PM IST",
    link: null
  }
];


  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-text-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full shadow-glow hover:shadow-glow-lg transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to take on new challenges and help businesses 
                achieve their goals through innovative digital solutions. Whether 
                you have a specific project in mind or just want to explore 
                possibilities, I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent 
                  projects, don't hesitate to mention it in your message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;