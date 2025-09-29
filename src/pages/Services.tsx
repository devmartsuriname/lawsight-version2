import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | LawSight Law HTML Template</title>
        <meta name="description" content="Our comprehensive legal services" />
      </Helmet>

      <PageTitle title="Services" breadcrumbs={[{ label: 'Services' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Our Services</h2>
          <p>Content from services.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
