import React, { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Product } from '@/lib/types';

interface ProductDetailsProps {
  product: Product;
  category: string;
}

export function ProductDetails({ product, category }: ProductDetailsProps) {
  const inquiryRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const scrollToInquiry = () => {
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = "template_wmdzpzi";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !publicKey) {
      toast.error("Email service not configured. Please contact support.");
      setLoading(false);
      return;
    }

    const now = new Date();
    const time = now.toLocaleString('en-IN', { 
      dateStyle: 'medium', 
      timeStyle: 'short' 
    });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          title: `${product.make} ${product.model}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          product_name: `${product.make} ${product.model}`,
          product_type: "refurbished",
          message: formData.message,
          time: time,
        },
        publicKey
      );
      
      toast.success("Inquiry sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', purpose: '', message: '' });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send inquiry. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.make} {product.model}</h1>
          <p className="text-muted-foreground text-lg">{category}</p>
        </div>
        <Button onClick={scrollToInquiry} className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Send Inquiry
        </Button>
      </div>

      <Card>
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={`${product.make} ${product.model}`}
            className="w-[400px] mx-auto object-cover "
          />
        </div>
        <CardHeader>
          <CardTitle>Product Description</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {product.desc}
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Features & Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {product.points.map((point: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Product Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-muted-foreground">Manufacturer</span>
              <p className="font-medium">{product.make}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground">Model</span>
              <p className="font-medium">{product.model}</p>
            </div>
          </div>
          <Separator />
          <div>
            <span className="text-sm font-medium text-muted-foreground">Category</span>
            <p className="font-medium">{category}</p>
          </div>
          <div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Refurbished & Certified
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Inquiry Form */}
      <Card ref={inquiryRef} className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Product Inquiry
          </CardTitle>
          <CardDescription>
            Interested in {product.make} {product.model}? Fill out the form below and we'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product_name">Product Name</Label>
                <Input 
                  id="product_name" 
                  value={`${product.make} ${product.model}`} 
                  disabled 
                  className="bg-muted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product_type">Product Type</Label>
                <Input 
                  id="product_type" 
                  value="Refurbished" 
                  disabled 
                  className="bg-muted"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of Purchase *</Label>
                <Input 
                  id="purpose" 
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="So we can provide better options"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your requirements..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}