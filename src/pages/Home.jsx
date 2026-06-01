import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import ChildEyeCareSections from '../components/ChildEyeCareSections';
import DoctorsSection from '../components/DoctorsSection';
import GallerySection from '../components/GallerySection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import WorkingHours from '../components/WorkingHours';
import ContactSection from '../components/ContactSection';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../data/site';

export default function Home() {
  return (
    <>
      <SEO title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} path="/" />
      <StructuredData />
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <ChildEyeCareSections />
      <DoctorsSection />
      <GallerySection />
      <WhyChooseUs />
      <WorkingHours />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
