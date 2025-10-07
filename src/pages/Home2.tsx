import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home2/Hero';
import FeatureCards from '@/components/home2/FeatureCards';
import AboutSection from '@/components/home2/AboutSection';
import Timeline from '@/components/home2/Timeline';
import CommunitySolutions from '@/components/home2/CommunitySolutions';
import QuotesSection from '@/components/home2/QuotesSection';
import RecentMedia from '@/components/home2/RecentMedia';
import NewsSection from '@/components/home2/NewsSection';
import CounterStats from '@/components/home2/CounterStats';
import Newsletter from '@/components/home2/Newsletter';

export default function Home2() {
  return (
    <>
      <Helmet>
        <title>Office of the Vice President | Dr. Gregory Allan Rusland</title>
        <meta name="description" content="Official website of the Vice President's Office - Dedicated to community empowerment, transparent governance, and accessible public services." />
      </Helmet>

      <Hero />
      <FeatureCards />
      <AboutSection />
      <Timeline />
      <CommunitySolutions />
      <QuotesSection />
      <RecentMedia />
      <NewsSection />
      <CounterStats />
      <Newsletter />
    </>
  );
}
