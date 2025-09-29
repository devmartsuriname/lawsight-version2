import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function Testimonial() {
  return (
    <>
      <Helmet>
        <title>Testimonials | LawSight Law HTML Template</title>
        <meta name="description" content="What our clients say about LawSight" />
      </Helmet>

      <PageTitle title="Testimonials" breadcrumbs={[{ label: 'Testimonials' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Client Testimonials</h2>
          <p>Content from testimonial.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
