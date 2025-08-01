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

// NEW: Service Details Pages
import WebDevRequestPage from "./pages/Services/WebDevelopment";
import GraphicDesignRequestPage from "./pages/Services/GraphicDesignRequestPage";
import CyberSecurityRequestPage from "./pages/Services/CyberSecurityRequestPage";

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

          {/* Service Request Pages */}
          <Route path="/services/web-development" element={<WebDevRequestPage />} />
          <Route path="/services/graphic-design" element={<GraphicDesignRequestPage />} />
          <Route path="/services/cyber-security" element={<CyberSecurityRequestPage />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
