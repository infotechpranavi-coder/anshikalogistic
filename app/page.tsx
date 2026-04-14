import HeroSlider from '@/components/home/HeroSlider';
import FeatureCards from '@/components/home/FeatureCards';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WorkProcess from '@/components/home/WorkProcess';
import FleetProducts from '@/components/home/FleetProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogPreview from '@/components/home/BlogPreview';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeatureCards />
      <AboutSection />
      <ServicesSection />
      <WorkProcess />
      <FleetProducts />
      <TestimonialsSection />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
