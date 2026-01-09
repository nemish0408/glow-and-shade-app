import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { 
  Users, 
  Wrench, 
  Clock, 
  Shield, 
  HeartPulse, 
  Building2, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  BadgeCheck
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  organization: z.string().min(2, "Organization name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Outsourcing = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: "",
    },
  });

  const outsourcingServices = [
    {
      title: "Equipment Maintenance",
      description: "Comprehensive maintenance contracts for all your biomedical equipment with scheduled preventive maintenance and emergency repairs.",
      icon: Wrench,
    },
    {
      title: "Staffing Solutions",
      description: "Qualified biomedical engineers and technicians available for temporary or permanent placement at your healthcare facility.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency response services to minimize equipment downtime.",
      icon: Clock,
    },
    {
      title: "Compliance Management",
      description: "Complete regulatory compliance management including documentation, audits, and certification assistance.",
      icon: Shield,
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 30%",
    "Access to certified biomedical engineers",
    "Improved equipment uptime and reliability",
    "Comprehensive documentation and reporting",
    "Flexible contract options",
    "Single point of contact for all equipment needs",
  ];

  const industries = [
    { name: "Hospitals", icon: Building2 },
    { name: "Clinics", icon: HeartPulse },
    { name: "Diagnostic Centers", icon: BadgeCheck },
    { name: "Research Labs", icon: Shield },
  ];

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured. Please contact us directly.");
        setLoading(false);
        return;
      }

      // Format current date and time
      const now = new Date();
      const time = now.toLocaleString('en-IN', { 
        dateStyle: 'medium', 
        timeStyle: 'short' 
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          title: data.service,
          name: data.name,
          email: data.email,
          phone_number: data.phone,
          required_service: data.service,
          message: data.message,
          time: time,
        },
        publicKey
      );

      toast.success("Your inquiry has been sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Biomedical Equipment Outsourcing Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete equipment management services tailored for healthcare facilities - from maintenance to staffing
            </p>
            <Button size="lg" asChild>
              <a href="#contact-form">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Outsourcing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end biomedical equipment management solutions designed to optimize your healthcare operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outsourcingServices.map((service) => (
              <Card key={service.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Outsourcing Solutions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with Dabhi Meditech Solutions for reliable, cost-effective biomedical equipment management. 
                Our experienced team ensures your equipment operates at peak performance while you focus on patient care.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <Card key={industry.name} className="text-center p-6">
                  <industry.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg">{industry.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, streamlined process to get started with our outsourcing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Free assessment of your equipment and requirements" },
              { step: "2", title: "Custom Proposal", description: "Tailored service plan based on your needs" },
              { step: "3", title: "Agreement", description: "Flexible contract terms with transparent pricing" },
              { step: "4", title: "Implementation", description: "Seamless transition and ongoing support" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:px-6 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Your phone number" type="tel" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Hospital/Clinic name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="equipment-maintenance">Equipment Maintenance</SelectItem>
                            <SelectItem value="staffing">Staffing Solutions</SelectItem>
                            <SelectItem value="support">24/7 Support Services</SelectItem>
                            <SelectItem value="compliance">Compliance Management</SelectItem>
                            <SelectItem value="complete">Complete Outsourcing Package</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Equipment Management?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our outsourcing solutions can benefit your healthcare facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/calibration">View Calibration Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outsourcing;
