import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Impact from "./pages/Impact";
import NotFound from "./pages/NotFound";

// Programs (based on current folder)
import Programs from "./pages/Programs";
import CaseManagement from "./pages/CaseManagement";
import CampusAmbassador from "./pages/CampusAmbassador";
import SwahiliTechWomen from "./pages/SwahiliTechWomen";
import TourismInnovationLab from "./pages/TourismInnovationLab";

// Departments
import Departments from "./pages/Departments";
import Communication from "./pages/Communication";
import TechEngineering from "./pages/TechEngineering";
import Creatives from "./pages/Creatives";
import CommunityEntrepreneurship from "./pages/CommunityEntrepreneurship";

// Projects (your custom renamed section)
//import programs from "./pages/Programs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/programs" element={<Programs />} />

          {/* Programs */}
          <Route path="/programs/case-management" element={<CaseManagement />} />
          <Route path="/programs/tourism-innovation-lab" element={<TourismInnovationLab />} />
          <Route path="/programs/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/programs/swahili-tech-women" element={<SwahiliTechWomen />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/communication" element={<Communication />} />
          <Route path="/departments/tech-engineering" element={<TechEngineering />} />
          <Route path="/departments/creatives" element={<Creatives />} />
          <Route path="/departments/community-entrepreneurship" element={<CommunityEntrepreneurship />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
