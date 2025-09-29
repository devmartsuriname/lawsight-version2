import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function ServicesDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Helmet>
        <title>Service Detail | LawSight Law HTML Template</title>
        <meta name="description" content={`Details about ${slug} service`} />
      </Helmet>

      <PageTitle
        title="Service Detail"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: slug || 'Detail' }]}
      />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Service: {slug}</h2>
          <p>Content from services-detail.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
