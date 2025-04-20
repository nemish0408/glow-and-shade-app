
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import new routes
import Software from "./pages/products/Software";
import Hardware from "./pages/products/Hardware";
import Consulting from "./pages/services/Consulting";
import Support from "./pages/services/Support";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product Routes */}
          <Route path="/products/software" element={<Software />} />
          <Route path="/products/hardware" element={<Hardware />} />
          
          {/* Service Routes */}
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/support" element={<Support />} />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
