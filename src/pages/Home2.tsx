import { Helmet } from 'react-helmet-async';

export default function Home2() {
  return (
    <>
      <Helmet>
        <title>LawSight Law HTML Template | Home 02</title>
        <meta name="description" content="Professional legal services and consultation - Alternative homepage" />
      </Helmet>

      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Home Page 02</h2>
          <p>Alternative homepage layout from index-2.html</p>
        </div>
      </section>
    </>
  );
}
