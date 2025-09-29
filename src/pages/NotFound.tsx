import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LawSight</title>
        <meta name="description" content="The page you are looking for does not exist" />
      </Helmet>

      <PageTitle title="404 - Page Not Found" breadcrumbs={[{ label: '404' }]} />

      <section className="error-section">
        <div className="container">
          <div className="error-content text-center" style={{ padding: '100px 0' }}>
            <h1 style={{ fontSize: '120px', fontWeight: 'bold', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '18px', marginBottom: '30px' }}>
              The page you are looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </p>
            <Link to="/" className="theme-btn btn-style-one">
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
