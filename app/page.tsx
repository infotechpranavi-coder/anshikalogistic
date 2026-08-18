import HeroSlider from '@/components/home/HeroSlider';
import FeatureCards from '@/components/home/FeatureCards';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import CategoriesWeServe from '@/components/home/CategoriesWeServe';
import CTABanner from '@/components/home/CTABanner';
import FleetProducts from '@/components/home/FleetProducts';
import WorkProcess from '@/components/home/WorkProcess';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <div className="relative">
      <HeroSlider />

      <div className="relative z-10 bg-white">
        <FeatureCards />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <CategoriesWeServe />
        <CTABanner
          eyebrow="Warehousing & dedicated units"
          heading="Need cold storage or a dedicated reefer on a fixed lane? We’ll size the right solution."
          buttonLabel="Enquire Now"
          imageSrc="/images/stock/cta-warehouse.jpg"
        />
        <FleetProducts />
        <WorkProcess />
        <CTABanner
          eyebrow="Start a shipment"
          heading="Ready to move temperature-sensitive cargo? Enquire with our dispatch team."
          buttonLabel="Enquire Now"
          imageSrc="/images/stock/cta-truck.jpg"
        />
        <TestimonialsSection />
      </div>
    </div>
  );
}
