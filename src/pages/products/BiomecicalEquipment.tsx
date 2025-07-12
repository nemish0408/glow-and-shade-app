
import React from 'react';
import { Products } from '@/config/Products';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BiomecicalEquipment = () => {
  const renderProductSection = (title: string, products: any[]) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={product.image} 
                alt={`${product.make} ${product.model}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{product.make} {product.model}</CardTitle>
              <CardDescription className="text-sm">{product.desc.substring(0, 120)}...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.points.slice(0, 3).map((point: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {point.length > 30 ? point.substring(0, 30) + '...' : point}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Refurbished Biomedical Equipment</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of high-quality refurbished medical equipment, 
            professionally restored and certified for optimal performance.
          </p>
        </div>

        {renderProductSection('Heart-Lung Machines', Products.refurbished.heartLung)}
        {renderProductSection('Heater-Cooler Systems', Products.refurbished.heaterCooler)}
        {renderProductSection('ACT Systems', Products.refurbished.act)}
        {renderProductSection('Anesthesia Machines', Products.refurbished.anesthesia)}
        {renderProductSection('Electrosurgical Units', Products.refurbished.cautery)}
        {renderProductSection('Laparoscopy Equipment', Products.refurbished.laproscopy)}
      </div>
    </div>
  );
};

export default BiomecicalEquipment;
