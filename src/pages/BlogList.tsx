import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog | LawSight Law HTML Template</title>
        <meta name="description" content="Latest news and insights from LawSight" />
      </Helmet>

      <PageTitle title="Blog" breadcrumbs={[{ label: 'Blog' }]} />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>Latest News</h2>
          <p>Content from blog-list.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
