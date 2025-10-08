import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ScrollToTop from '@/utils/ScrollToTop';

// Create QueryClient
const queryClient = new QueryClient();

// Lazy load public pages
const Home2 = lazy(() => import('@/pages/Home2'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const ServicesDetail = lazy(() => import('@/pages/ServicesDetail'));
const PortfolioMasonry = lazy(() => import('@/pages/PortfolioMasonry'));
const PortfolioSingle = lazy(() => import('@/pages/PortfolioSingle'));
const BlogList = lazy(() => import('@/pages/BlogList'));
const BlogSingle = lazy(() => import('@/pages/BlogSingle'));
const Testimonial = lazy(() => import('@/pages/Testimonial'));
const Contact = lazy(() => import('@/pages/Contact'));
const AppointmentBooking = lazy(() => import('@/pages/AppointmentBooking'));
const Community = lazy(() => import('@/pages/Community'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Lazy load auth pages
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));

// Lazy load admin pages
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div className="preloader"></div>}>
              <Routes>
                {/* Public Routes */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Home2 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServicesDetail />} />
                  <Route path="/portfolio/masonry" element={<PortfolioMasonry />} />
                  <Route path="/portfolio/:id" element={<PortfolioSingle />} />
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:slug" element={<BlogSingle />} />
                  <Route path="/testimonial" element={<Testimonial />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/appointments/book" element={<AppointmentBooking />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Auth Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/register" element={<Register />} />

                {/* Protected Admin Routes */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="posts" element={<div className="text-admin-text-primary">Posts - Coming Soon</div>} />
                  <Route path="projects" element={<div className="text-admin-text-primary">Projects - Coming Soon</div>} />
                  <Route path="solutions" element={<div className="text-admin-text-primary">Solutions - Coming Soon</div>} />
                  <Route path="appointments" element={<div className="text-admin-text-primary">Appointments - Coming Soon</div>} />
                  <Route path="contact-submissions" element={<div className="text-admin-text-primary">Contact Submissions - Coming Soon</div>} />
                  <Route path="quotes" element={<div className="text-admin-text-primary">Quotes - Coming Soon</div>} />
                  <Route path="media" element={<div className="text-admin-text-primary">Media Library - Coming Soon</div>} />
                  <Route path="settings" element={<div className="text-admin-text-primary">Settings - Coming Soon</div>} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
