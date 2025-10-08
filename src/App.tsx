import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import ScrollToTop from '@/utils/ScrollToTop';

// Lazy load pages
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

// Auth pages
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword'));

// Admin
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const ProtectedRoute = lazy(() => import('@/components/auth/ProtectedRoute'));

function App() {
  return (
    <HelmetProvider>
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
            </Route>

            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={['admin', 'editor']}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
