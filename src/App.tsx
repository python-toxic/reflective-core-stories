import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import JournalPage from "./pages/JournalPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import CompanionPage from "./pages/CompanionPage";
import ReflectPage from "./pages/ReflectPage"; 


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reflect" element={<ReflectPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/companion" element={<CompanionPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
