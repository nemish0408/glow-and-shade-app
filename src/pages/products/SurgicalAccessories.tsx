
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ProductSidebar } from '@/components/ProductSidebar';
import { ProductDetails } from '@/components/ProductDetails';
import { Products } from '@/config/Products';
import { Product } from '@/lib/types';

const SurgicalAccessories = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleProductSelect = (product: Product, category: string) => {
    setSelectedProduct(product);
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col flex-1">
      <SidebarProvider>
        <div className="flex flex-1 bg-background">
          <ProductSidebar
            onProductSelect={handleProductSelect}
            selectedProduct={selectedProduct}
          />

          <div className="flex-1 flex flex-col mix-w-5xl">
            <header className="h-12 flex items-center border-b bg-background">
              <SidebarTrigger className="ml-4" />
              <h1 className="ml-4 text-lg font-semibold">Surgical Accessories</h1>
            </header>

            <main className="flex-1 overflow-y-auto">
              {selectedProduct ? (
                <ProductDetails
                  product={selectedProduct}
                  category={selectedCategory}
                />
              ) : (
                <div className="p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome to Our Surgical Accessories Catalog</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Browse through our comprehensive collection of surgical accessories.
                      Select any product from the sidebar to view detailed specifications and features.
                    </p>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default SurgicalAccessories;
