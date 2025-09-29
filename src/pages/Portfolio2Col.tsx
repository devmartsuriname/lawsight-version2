import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function Portfolio2Col() {
  return (
    <>
      <Helmet>
        <title>Portfolio Two Column | LawSight Law HTML Template</title>
        <meta name="description" content="Our portfolio in two column layout" />
      </Helmet>

      <PageTitle title="Portfolio Two Column" breadcrumbs={[{ label: 'Portfolio' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Portfolio Two Column</h2>
          <p>Content from portfolio-2-column.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
