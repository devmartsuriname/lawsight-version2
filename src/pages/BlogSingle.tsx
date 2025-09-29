import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function BlogSingle() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Helmet>
        <title>Blog Post | LawSight Law HTML Template</title>
        <meta name="description" content={`Read about ${slug}`} />
      </Helmet>

      <PageTitle
        title="Blog Post"
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: slug || 'Post' }]}
      />

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2>{slug?.replace(/-/g, ' ')}</h2>
          <p>Content from blog-single.html will be migrated here</p>
        </div>
      </section>
    </>
  );
}
