import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LawSight Law HTML Template | Home</title>
        <meta name="description" content="Professional legal services and consultation" />
        <meta property="og:title" content="LawSight - Professional Legal Services" />
        <meta property="og:description" content="Expert legal consultation and representation" />
      </Helmet>

      {/* Main Slider */}
      <section className="main-slider">
        <div className="slider-content">
          <h1>Welcome to LawSight</h1>
          <p>Professional Legal Services</p>
        </div>
      </section>

      {/* Placeholder content - to be replaced with actual sections from index.html */}
      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Home Page Content</h2>
          <p>This page will contain all sections from index.html including hero, services, testimonials, etc.</p>
        </div>
      </section>
    </>
  );
}
