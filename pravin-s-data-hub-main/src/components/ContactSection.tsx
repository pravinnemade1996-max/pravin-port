import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, PhoneCall, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pravinnemade9@gmail.com",
    href: "mailto:pravinnemade9@gmail.com",
    action: "Email Me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8668735779",
    href: "tel:+918668735779",
    action: "Call Me",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    action: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/pravinnemade",
    action: "View Profile",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in discussing data engineering opportunities or collaborations? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-medium text-foreground mb-4 text-sm break-all">{item.value}</p>

              {item.href && item.action && (
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {item.action}
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:pravinnemade9@gmail.com">
              <Send className="h-5 w-5" />
              Send Email
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:+918668735779">
              <PhoneCall className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/pravinnemade" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
