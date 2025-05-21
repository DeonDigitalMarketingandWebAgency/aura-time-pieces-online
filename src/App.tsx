
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Technology from "./pages/Technology";
import StoreLocator from "./pages/StoreLocator";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import CollectionPage from "./pages/CollectionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:collection" element={<Products />} />
          <Route path="/products/:collection/:productId" element={<ProductDetail />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
