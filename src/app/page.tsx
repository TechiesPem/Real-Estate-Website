import { ContactSection } from "@/components/home/ContactSection";
import { FounderSection } from "@/components/home/FounderSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PropertiesSection } from "@/components/home/PropertiesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PropertiesSection />
        <ProcessSection />
        <ServicesSection />
        <FounderSection />
        <StoriesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
