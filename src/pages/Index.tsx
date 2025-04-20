import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Scissors, Settings, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Microscope,
      title: "Biomedical Equipment",
      description: "State-of-the-art biomedical devices and equipment for healthcare facilities",
      link: "/products/biomedical-equipment"
    },
    {
      icon: Scissors,
      title: "Surgical Accessories",
      description: "High-quality surgical accessories and instruments",
      link: "/products/surgical-accessories"
    },
    {
      icon: Settings,
      title: "Calibration Services",
      description: "Professional calibration and maintenance services for medical equipment",
      link: "/services/calibration"
    },
    {
      icon: Handshake,
      title: "Outsourcing Solutions",
      description: "Comprehensive biomedical engineering outsourcing solutions",
      link: "/services/outsourcing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Medical Equipment Solutions
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted partner in biomedical equipment, surgical accessories, and professional healthcare services.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/products/biomedical-equipment">Explore Products</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Imaging Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                      alt="Medical Equipment" 
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Advanced imaging solutions for accurate diagnostics
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Surgical Instruments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                      alt="Surgical Instruments" 
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Precision surgical instruments for healthcare professionals
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Medical Facility?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your medical equipment needs and discover how we can help enhance your healthcare services.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
