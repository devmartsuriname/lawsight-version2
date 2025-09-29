import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function PortfolioSingle() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Portfolio Detail | LawSight Law HTML Template</title>
        <meta name="description" content={`Portfolio project ${id}`} />
      </Helmet>

      <PageTitle
        title="Portfolio Detail"
        breadcrumbs={[{ label: 'Portfolio', href: '/portfolio/masonry' }, { label: `Project ${id}` }]}
      />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Portfolio Project: {id}</h2>
          <p>Content from portfolio-single.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
