import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import ScrollToTop from '@/utils/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const Home2 = lazy(() => import('@/pages/Home2'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const ServicesDetail = lazy(() => import('@/pages/ServicesDetail'));
const PortfolioMasonry = lazy(() => import('@/pages/PortfolioMasonry'));
const Portfolio2Col = lazy(() => import('@/pages/Portfolio2Col'));
const PortfolioSingle = lazy(() => import('@/pages/PortfolioSingle'));
const BlogList = lazy(() => import('@/pages/BlogList'));
const BlogSingle = lazy(() => import('@/pages/BlogSingle'));
const Testimonial = lazy(() => import('@/pages/Testimonial'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="preloader"></div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home2 />} />
              <Route path="/home-alternate" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServicesDetail />} />
              <Route path="/portfolio/masonry" element={<PortfolioMasonry />} />
              <Route path="/portfolio/2-col" element={<Portfolio2Col />} />
              <Route path="/portfolio/:id" element={<PortfolioSingle />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogSingle />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
