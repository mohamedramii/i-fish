import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/home/HeroSection';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import WorkflowSection2 from '@/components/sections/home/WorkflowSection2';
import PricingPlansSection from '@/components/sections/home/PricingPlansSection';
import ContactSection from '@/components/sections/home/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <div className="flex flex-col items-center w-full ">
        <div className="flex justify-center w-full z-50 fixed top-0">
          <div className="w-full flex justify-center items-center md:px-[69px] pt-2">
            <Navbar />
          </div>
        </div>
        
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection2 />
        <PricingPlansSection />
        <ContactSection />
      </div>
    </main>
  );
}