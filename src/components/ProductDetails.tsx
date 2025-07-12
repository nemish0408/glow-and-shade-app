import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProductDetailsProps {
  product: any;
  category: string;
}

export function ProductDetails({ product, category }: ProductDetailsProps) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.make} {product.model}</h1>
        <p className="text-muted-foreground text-lg">{category}</p>
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
    </div>
  );
}