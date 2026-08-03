import HeroSlider from '@/components/home/HeroSlider';
import FeatureCards from '@/components/home/FeatureCards';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WorkProcess from '@/components/home/WorkProcess';
import FleetProducts from '@/components/home/FleetProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <div className="relative">
      <HeroSlider />
      {/* Slides over the sticky hero on scroll */}
      <div className="relative z-10 bg-white">
        <FeatureCards />
        <AboutSection />
        <ServicesSection />
        <WorkProcess />
        <FleetProducts />
        <TestimonialsSection />
        <CTABanner />
      </div>
    </div>
  );
}
