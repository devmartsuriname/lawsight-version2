import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { usePreloader } from '@/hooks/usePreloader';

export default function MainLayout() {
  const isLoading = usePreloader(800);

  return (
    <div className="page-wrapper">
      <Preloader isLoading={isLoading} />
      <Header />
      <Outlet />
      <Footer />
      
      {/* Scroll to top button */}
      <div
        className="scroll-to-top scroll-to-target"
        data-target="html"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="fa fa-arrow-circle-up"></span>
      </div>
    </div>
  );
}
