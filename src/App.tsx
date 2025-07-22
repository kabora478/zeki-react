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

// Programs
import Programs from "./pages/Programs";
import CaseManagement from "./pages/CaseManagement";
import CampusAmbassador from "./pages/CampusAmbassador";
import SwahiliTechWomen from "./pages/SwahiliTechWomen";
import TourismInnovationLab from "./pages/TourismInnovationLab";

// NEW: Tech Programs
import WebDevelopment from "./pages/programs/WebDevelopment";
import CyberSecurity from "./pages/programs/CyberSecurity";
import MachineLearning from "./pages/programs/MachineLearning";
import GraphicDesign from "./pages/programs/GraphicDesign";
import MobileDevelopment from "./pages/programs/MobileDevelopment";
import CloudComputing from "./pages/programs/CloudComputing";
import UIUX from "./pages/programs/UIUX";
import DataScience from "./pages/programs/DataScience";
import Mentorship from "./pages/programs/Mentorship";

// Departments
import Departments from "./pages/Departments";
import Communication from "./pages/Communication";
import TechEngineering from "./pages/TechEngineering";
import Creatives from "./pages/Creatives";
import CommunityEntrepreneurship from "./pages/CommunityEntrepreneurship";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* General */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/impact" element={<Impact />} />

          {/* Programs */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/case-management" element={<CaseManagement />} />
          <Route path="/programs/tourism-innovation-lab" element={<TourismInnovationLab />} />
          <Route path="/programs/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/programs/swahili-tech-women" element={<SwahiliTechWomen />} />

          {/* NEW Tech Programs */}
          <Route path="/programs/web-development" element={<WebDevelopment />} />
          <Route path="/programs/cyber-security" element={<CyberSecurity />} />
          <Route path="/programs/machine-learning" element={<MachineLearning />} />
          <Route path="/programs/graphic-design" element={<GraphicDesign />} />
          <Route path="/programs/mobile-development" element={<MobileDevelopment />} />
          <Route path="/programs/cloud" element={<CloudComputing />} />
          <Route path="/programs/ui-ux" element={<UIUX />} />
          <Route path="/programs/data-science" element={<DataScience />} />
          <Route path="/programs/mentorship" element={<Mentorship />} />

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
