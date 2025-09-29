import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: '/images/resource/news-4.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'Strategy for Norway's Peion Fund Global.',
  },
  {
    id: 2,
    image: '/images/resource/news-5.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'What we are capable of usually gets discovered.',
  },
  {
    id: 3,
    image: '/images/resource/news-6.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'Food industry leaders often change their promoters.',
  },
  {
    id: 4,
    image: '/images/resource/news-7.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'DiGENOVA: Chief judge state ment blatantly political.',
  },
  {
    id: 5,
    image: '/images/resource/news-8.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'Thanksgiving-inspired cocktails that your guests.',
  },
  {
    id: 6,
    image: '/images/resource/news-9.jpg',
    date: 'September 12, 2019',
    author: 'Admin',
    title: 'Dior call Jennifer campaign backlash 'not all justified'.',
  },
];

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog | LawSight Law HTML Template</title>
        <meta name="description" content="Latest news and insights from LawSight" />
      </Helmet>

      <PageTitle title="Blog" breadcrumbs={[{ label: 'Blog' }]} />

      {/* Blog Page Section */}
      <section className="blog-page-section">
        <div className="container">
          <div className="row clearfix">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className={`inner-box wow fadeInLeft`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                  <div className="image">
                    <img src={post.image} alt={post.title} />
                    <div className="overlay-box">
                      <a href={post.image} data-fancybox="news" data-caption="" className="plus flaticon-plus"></a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li><span className="fa fa-calendar"></span>{post.date}</li>
                      <li><span className="fa fa-user"></span>{post.author}</li>
                    </ul>
                    <h5><Link to={`/blog/${post.id}`}>{post.title}</Link></h5>
                    <Link to={`/blog/${post.id}`} className="theme-btn btn-style-three">View more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section style-two">
        <div className="container">
          <div className="inner-container" style={{ backgroundImage: 'url(/images/background/3.jpg)' }}>
            <h2>Subscribe Your Email for Newsletter <br /> & Promotion</h2>
            <div className="subscribe-form">
              <form method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email address.." required />
                  <button type="submit" className="theme-btn subscribe-btn">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
