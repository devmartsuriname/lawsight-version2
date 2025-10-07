import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home2/Hero';
import FeatureCards from '@/components/home2/FeatureCards';
import AboutSection from '@/components/home2/AboutSection';
import Timeline from '@/components/home2/Timeline';
import ServicesGrid from '@/components/home2/ServicesGrid';
import Testimonials from '@/components/home2/Testimonials';
import Team from '@/components/home2/Team';
import NewsSection from '@/components/home2/NewsSection';
import CounterStats from '@/components/home2/CounterStats';
import Newsletter from '@/components/home2/Newsletter';

export default function Home2() {
  return (
    <>
      <Helmet>
        <title>LawSight Law HTML Template | Home 02</title>
        <meta name="description" content="Professional legal services and consultation - Alternative homepage" />
      </Helmet>

      <Hero />
      <FeatureCards />
      <AboutSection />
      <Timeline />
      <ServicesGrid />
      <Testimonials />
      <Team />
      <NewsSection />
      <CounterStats />
      <Newsletter />
    </>
  );
}
