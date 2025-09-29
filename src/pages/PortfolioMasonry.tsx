import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function PortfolioMasonry() {
  return (
    <>
      <Helmet>
        <title>Portfolio Masonry | LawSight Law HTML Template</title>
        <meta name="description" content="Our portfolio in masonry layout" />
      </Helmet>

      <PageTitle title="Portfolio Masonry" breadcrumbs={[{ label: 'Portfolio' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Portfolio Masonry</h2>
          <p>Content from portfolio-masonry.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
