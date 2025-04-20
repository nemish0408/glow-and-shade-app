
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "@/config/menu";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com", // Replace with your actual Facebook page URL
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://instagram.com", // Replace with your actual Instagram profile URL
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com", // Replace with your actual LinkedIn profile URL
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-muted/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Your trusted partner in biomedical equipment, surgical accessories, and professional healthcare services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Location</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5" />
              <p>
                123 Medical Center Drive<br />
                Healthcare District<br />
                City, State 12345
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
