
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Scissors, Settings, Handshake, Shield, Phone, Trophy, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GoToTop } from "@/components/GoToTop";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Advanced Medical Equipment",
      description: "State-of-the-art biomedical devices and equipment for healthcare facilities",
      image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Explore Products",
      buttonLink: "/products/biomedical-equipment"
    },
    {
      title: "Professional Calibration Services",
      description: "Ensure accuracy and reliability with our precision calibration services",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Learn More",
      buttonLink: "/services/calibration"
    },
    {
      title: "Healthcare Solutions",
      description: "Comprehensive medical technology solutions for modern healthcare providers",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Our Services",
      buttonLink: "/services/outsourcing"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

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

  const benefits = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All our products meet the highest standards of quality and reliability"
    },
    {
      icon: Trophy,
      title: "Industry Expertise",
      description: "Over 15 years of experience in the medical equipment industry"
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "24/7 technical support for all our products and services"
    },
    {
      icon: Phone,
      title: "Customer Service",
      description: "Dedicated customer service team ready to assist you"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Sliding Carousel - Fixed color contrast */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/75 z-10" />
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white shadow-text">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto shadow-text">
                  {slide.description}
                </p>
                <Button asChild size="lg" className="mt-4 bg-white text-primary hover:bg-white/90">
                  <Link to={slide.buttonLink}>
                    {slide.buttonText} <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Premium Equipment</h3>
              <p>High-quality medical equipment from trusted manufacturers</p>
            </div>
            <div className="p-4 border-y md:border-y-0 md:border-x border-primary-foreground/20">
              <h3 className="text-xl font-bold mb-2">Expert Service</h3>
              <p>Professional calibration and maintenance by certified technicians</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p>Round-the-clock technical assistance for your medical devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Comprehensive medical equipment solutions to meet the needs of healthcare facilities of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="transition-transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pb-6">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              With years of experience in the medical industry, we provide reliable solutions you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore our selection of high-quality medical equipment and accessories
            </p>
          </div>
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
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>Calibration Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Calibration Equipment" 
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <p className="mt-4 text-muted-foreground">
                      Professional calibration tools for medical device maintenance
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

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Hear from healthcare facilities that trust our products and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <p className="italic">"Their calibration services have significantly improved the accuracy of our diagnostic equipment. Highly professional team."</p>
                <div className="mt-4">
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">City General Hospital</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <p className="italic">"The quality of their surgical instruments is exceptional. Our surgical team has noted improved precision and comfort."</p>
                <div className="mt-4">
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Regional Medical Center</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <p className="italic">"Their customer support is outstanding. Any issues with our equipment are resolved quickly and efficiently."</p>
                <div className="mt-4">
                  <p className="font-semibold">Lisa Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Valley Health Clinic</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Fixed color contrast issues */}
      <section className="py-16 px-6 bg-[#0a0f1d] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Upgrade Your Medical Facility?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss your medical equipment needs and discover how we can help enhance your healthcare services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-[#0a0f1d] hover:bg-white/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/products/biomedical-equipment">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <GoToTop />
    </div>
  );
};

export default Index;
