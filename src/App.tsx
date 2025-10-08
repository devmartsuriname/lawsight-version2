import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import AuthLayout from '@/layouts/AuthLayout';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
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

// Admin pages
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));

// Auth pages
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Suspense fallback={<div className="preloader"></div>}>
            <Routes>
              {/* Public routes */}
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

              {/* Auth routes */}
              <Route path="/auth/*" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>

              {/* Admin routes - Protected */}
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <LayoutProvider>
                    <AdminLayout>
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                      </Routes>
                    </AdminLayout>
                  </LayoutProvider>
                </ProtectedRoute>
              } />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
