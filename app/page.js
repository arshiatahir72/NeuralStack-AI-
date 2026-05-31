import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ProductOverview from "@/components/ProductOverview";
import DashboardPreview from "@/components/DashboardPreview";
import ScrollStory from "@/components/ScrollStory";
import FeatureGrid from "@/components/FeatureGrid";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Metrics />
      <ProductOverview />
      <DashboardPreview />
      <ScrollStory />
      <FeatureGrid />
      <Integrations />
      <Security />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}