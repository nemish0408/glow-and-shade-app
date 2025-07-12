import React, { useState } from 'react';
import { Products } from '@/config/Products';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface ProductSidebarProps {
  onProductSelect: (product: any, category: string) => void;
  selectedProduct?: any;
}

export function ProductSidebar({ onProductSelect, selectedProduct }: ProductSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['heartLung']);

  const categories = [
    { key: 'heartLung', label: 'Heart-Lung Machines', products: Products.refurbished.heartLung },
    { key: 'heaterCooler', label: 'Heater-Cooler Systems', products: Products.refurbished.heaterCooler },
    { key: 'act', label: 'ACT Systems', products: Products.refurbished.act },
    { key: 'anesthesia', label: 'Anesthesia Machines', products: Products.refurbished.anesthesia },
    { key: 'cautery', label: 'Electrosurgical Units', products: Products.refurbished.cautery },
    { key: 'laproscopy', label: 'Laparoscopy Equipment', products: Products.refurbished.laproscopy },
    { key: 'ventilators', label: 'Ventilators', products: Products.refurbished.ventilators },
    { key: 'patientMonitor', label: 'Patient Monitors', products: Products.refurbished.patientMonitor },
    { key: 'ecgMachines', label: 'ECG Machines', products: Products.refurbished.ecgMachines },
    { key: 'defibrillators', label: 'Defibrillators', products: Products.refurbished.defibrillators },
    { key: 'iabpMachine', label: 'IABP Machines', products: Products.refurbished.iabpMachine },
  ];

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryKey)
        ? prev.filter(key => key !== categoryKey)
        : [...prev, categoryKey]
    );
  };

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-80"} bg-muted/50 border-r h-full`}>
      <SidebarContent className="overflow-y-auto bg-muted/50 h-full">
        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.key);
          
          return (
            <SidebarGroup key={category.key}>
              <SidebarGroupLabel 
                className="cursor-pointer flex items-center justify-between hover:bg-muted/50 px-2 py-1 rounded"
                onClick={() => toggleCategory(category.key)}
              >
                <span className="text-sm font-medium">{collapsed ? category.label.slice(0, 2) : category.label}</span>
                {!collapsed && (
                  isExpanded ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                )}
              </SidebarGroupLabel>
              
              {isExpanded && !collapsed && (
                <SidebarGroupContent>
                  <SidebarMenu>
                    {category.products.map((product) => (
                      <SidebarMenuItem key={product.id}>
                        <SidebarMenuButton
                          onClick={() => onProductSelect(product, category.label)}
                          className={`text-left justify-start ${
                            selectedProduct?.id === product.id 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <span className="text-sm truncate">
                            {product.make} {product.model}
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}