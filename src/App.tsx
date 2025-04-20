import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import new routes
import Software from "./pages/products/Software";
import Hardware from "./pages/products/Hardware";
import Consulting from "./pages/services/Consulting";
import Support from "./pages/services/Support";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BiomecicalEquipment from "./pages/products/BiomecicalEquipment";
import SurgicalAccessories from "./pages/products/SurgicalAccessories";
import Calibration from "./pages/services/Calibration";
import Outsourcing from "./pages/services/Outsourcing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Product Routes */}
              <Route path="/products/biomedical-equipment" element={<BiomecicalEquipment />} />
              <Route path="/products/surgical-accessories" element={<SurgicalAccessories />} />
              
              {/* Service Routes */}
              <Route path="/services/calibration" element={<Calibration />} />
              <Route path="/services/outsourcing" element={<Outsourcing />} />
              
              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
