import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Microscope, TestTube, TestTubes, FlaskConical, Download } from "lucide-react";

const Calibration = () => {
  const calibrationServices = [
    {
      title: "Patient Monitors",
      description: "ECG, blood pressure, pulse oximetry, and vital signs monitors calibration",
      icon: TestTube,
      image: "/lovable-uploads/maxresdefault (1).jpg",
    },
    {
      title: "Imaging Equipment",
      description: "Ultrasound, X-ray, CT scanners calibration and performance testing",
      icon: Microscope,
      image: "/lovable-uploads/F-tis75plus_22a_c.webp",
    },
    {
      title: "Laboratory Equipment",
      description: "Centrifuges, spectrophotometers, and analyzers calibration",
      icon: TestTubes,
      image: "/lovable-uploads/cegroup_2271a_fluke2.jpg",
    },
    {
      title: "Therapeutic Equipment",
      description: "Defibrillators, infusion pumps, ventilators calibration",
      icon: FlaskConical,
      image: "/lovable-uploads/maxresdefault (2).jpg",
    }
  ];

  const faqItems = [
    {
      question: "How often should medical equipment be calibrated?",
      answer: "Most medical equipment requires calibration every 6-12 months, depending on manufacturer recommendations, usage frequency, and regulatory requirements. Critical care equipment may need more frequent calibration."
    },
    {
      question: "What standards do you follow for calibration?",
      answer: "We follow international standards including ISO 17025, ISO 13485, and manufacturer specifications. Our calibration processes adhere to FDA, JCAHO, and other healthcare regulatory requirements."
    },
    {
      question: "Do you provide on-site calibration services?",
      answer: "Yes, we offer both on-site calibration at your facility and off-site calibration at our specialized laboratory, depending on the equipment type and your specific needs."
    },
    {
      question: "What documentation do you provide after calibration?",
      answer: "We provide comprehensive calibration certificates, detailed reports showing before and after measurements, traceability to national standards, and calibration stickers for the equipment."
    }
  ];

  const handleDownloadBrochure = () => {
    // Create a link to download the file
    const link = document.createElement('a');
    link.href = 'https://www.flukebiomedical.com/sites/default/files/fluke-biomedical-product-catalog-w_0.pdf';
    link.target = '_blank';
    link.download = 'fluke-biomedical-product-catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img 
          src="/lovable-uploads/F-714b_04b_2_1500x1000_0.webp" 
          alt="Fluke Calibrator in Use" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white shadow-text">
              Medical Equipment Calibration Services
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto shadow-text">
              Precision calibration for all types of medical equipment to ensure accuracy and patient safety
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Precision Calibration Services for Healthcare Facilities</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We specialize in calibrating all types of medical equipment using industry-leading Fluke Biomedical calibrators. Our calibration services ensure your medical devices meet regulatory requirements and provide accurate readings for patient safety.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Our team of certified technicians provides comprehensive calibration services for hospitals, clinics, laboratories, and other healthcare facilities across the country.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Request Calibration</Link>
                </Button>
                <Button variant="outline" size="lg" onClick={handleDownloadBrochure} className="gap-2">
                  <Download size={18} />
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/Fc-5560a_27a_c.webp" 
                  alt="Fluke Process Calibrator" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Our Calibration Equipment */}
      <section className="py-12 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Industry-Leading Calibration Equipment</h2>
            <p className="text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
              We use Fluke Biomedical calibrators, the gold standard in medical equipment calibration
            </p>
          </div>
          
          <Tabs defaultValue="patient" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="patient">Patient Monitors</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="laboratory">Laboratory</TabsTrigger>
              <TabsTrigger value="therapeutic">Therapeutic</TabsTrigger>
            </TabsList>
            <TabsContent value="patient" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/09cf9294-1f8f-4e40-aade-ab0ee2c8fe16.png" 
                    alt="Fluke Imaging Calibrator" 
                    className="w-full h-64 object-cover"
                  />
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Patient Monitor Calibration</h3>
                  <p className="mb-4">
                    Our Fluke Prosim patient monitor simulators provide comprehensive testing and calibration for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ECG monitors and telemetry systems</li>
                    <li>Blood pressure monitors</li>
                    <li>Pulse oximeters (SpO2)</li>
                    <li>Cardiac output monitors</li>
                    <li>Temperature sensors and monitors</li>
                    <li>Defibrillator analyzers and testers</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="imaging" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                      <img 
                    src="/lovable-uploads/469bc209-7388-4a64-924f-685f90017724.png" 
                    alt="Fluke Therapeutic Equipment Calibrator" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Imaging Equipment Calibration</h3>
                  <p className="mb-4">
                    We calibrate and test the performance of a wide range of imaging equipment:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>X-ray equipment and generators</li>
                    <li>CT scanners</li>
                    <li>Ultrasound systems</li>
                    <li>MRI systems</li>
                    <li>DICOM display monitors</li>
                    <li>Radiography quality assurance equipment</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="laboratory" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/4d439193-e6be-4033-a1dc-d82fcb409144.png" 
                    alt="Laboratory Equipment Calibration" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Laboratory Equipment Calibration</h3>
                  <p className="mb-4">
                    Our calibration services for laboratory equipment include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Centrifuges and rotational equipment</li>
                    <li>Spectrophotometers and colorimeters</li>
                    <li>Analytical balances and scales</li>
                    <li>Blood analyzers and gas analyzers</li>
                    <li>Temperature-controlled equipment (incubators, refrigerators)</li>
                    <li>Pipettes and volumetric instruments</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="therapeutic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
              
                  <img 
                    src="/lovable-uploads/fb-impulse7000dp_12a_c.jpg" 
                    alt="Fluke Patient Monitor Calibrator" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Therapeutic Equipment Calibration</h3>
                  <p className="mb-4">
                    We provide precise calibration for critical therapeutic devices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Defibrillators and AEDs</li>
                    <li>Infusion and syringe pumps</li>
                    <li>Ventilators and respiratory equipment</li>
                    <li>Electrosurgical units</li>
                    <li>Physical therapy equipment</li>
                    <li>Process calibration instruments</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Calibration Services */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Calibration Services</h2>
            <p className="text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services for all your medical equipment calibration needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calibrationServices.map((service) => (
              <Card key={service.title} className="transition-transform hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-48 overflow-hidden rounded-md">
                    <img 
                      src={service.image} 
                      alt={`${service.title} Calibration`} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Request Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Validation Section */}
      <section className="py-12 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/toc-ptools-content-f-754-31a-1500x1000.jpg"
                  alt="Process Calibration" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fluke-calibration.jpg"
                  alt="Medical Equipment Calibration" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fb-impulse7000dp-esa620_02a_c_0.jpg"
                  alt="Patient Monitor Calibration" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/calibration-of-medical-equipment.jpg"
                  alt="Laboratory Equipment Calibration" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Fluke Biomedical Certification</h2>
              <p className="text-lg mb-4">
                Our technicians are certified by Fluke Biomedical, the global leader in medical device calibration equipment. 
                This ensures that all calibration procedures meet the highest standards in the industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">NIST-traceable calibration equipment</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">ISO 17025 accredited calibration laboratory</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Certified to calibrate all major brands of medical equipment</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Compliance with FDA, JCAHO, and other regulatory standards</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Calibration Process</h2>
            <p className="text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure accurate and reliable calibration services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                <p className="text-muted-foreground">We evaluate your equipment and determine the calibration requirements based on manufacturer specifications and regulatory standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pre-Calibration Testing</h3>
                <p className="text-muted-foreground">We perform initial tests to document the current condition and performance of the equipment before calibration.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Calibration Procedure</h3>
                <p className="text-muted-foreground">Our certified technicians calibrate the equipment using Fluke calibrators and traceable standards following established protocols.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Post-Calibration Verification</h3>
                <p className="text-muted-foreground">We verify that the equipment meets all specifications and performance requirements after calibration.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">5</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground">We provide detailed calibration certificates and reports with before and after measurements and traceability information.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">6</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Calibration Management</h3>
                <p className="text-muted-foreground">We help you establish a calibration schedule and reminder system to ensure ongoing compliance with regulatory requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg mt-2 text-muted-foreground max-w-2xl mx-auto">
              Common questions about our medical equipment calibration services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-muted/50 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 ">Ensure Accuracy and Safety with Professional Calibration</h2>
          <p className="mb-8 max-w-2xl mx-auto ">
            Contact us today to schedule a calibration service for your medical equipment and ensure compliance with regulatory standards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-black dark:bg-white text-white dark:text-black dark:hover:bg-white/50 hover:text-white hover:bg-gray-700">
              <Link to="/contact">Schedule Calibration</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-black dark:border-white  hover:bg-black/50 hover:text-white dark:hover:bg-white/10" asChild>
              <Link to="/services/outsourcing">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calibration;
