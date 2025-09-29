import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | LawSight Law HTML Template</title>
        <meta name="description" content="Learn more about LawSight legal professionals" />
      </Helmet>

      <PageTitle title="About Us" breadcrumbs={[{ label: 'About' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>About LawSight</h2>
          <p>Content from about.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
