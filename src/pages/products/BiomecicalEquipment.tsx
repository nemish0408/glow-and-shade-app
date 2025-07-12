
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ProductSidebar } from '@/components/ProductSidebar';
import { ProductDetails } from '@/components/ProductDetails';
import { Products } from '@/config/Products';

const BiomecicalEquipment = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleProductSelect = (product: any, category: string) => {
    setSelectedProduct(product);
    setSelectedCategory(category);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <ProductSidebar 
          onProductSelect={handleProductSelect} 
          selectedProduct={selectedProduct}
        />
        
        <div className="flex-1 flex flex-col ml-0">
          <header className="h-12 flex items-center border-b bg-background sticky top-0 z-10">
            <SidebarTrigger className="ml-4" />
            <h1 className="ml-4 text-lg font-semibold">Refurbished Biomedical Equipment</h1>
          </header>

          <main className="flex-1 overflow-y-auto p-0">
            {selectedProduct ? (
              <ProductDetails 
                product={selectedProduct} 
                category={selectedCategory}
              />
            ) : (
              <div className="p-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Welcome to Our Equipment Catalog</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Browse through our comprehensive collection of refurbished biomedical equipment. 
                    Select any product from the sidebar to view detailed specifications and features.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BiomecicalEquipment;
