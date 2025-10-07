/**
 * News Section Component
 * Latest blog posts with lightbox gallery
 */

import { Link } from 'react-router-dom';
import { Lightbox } from '@/components/Lightbox';

export default function NewsSection() {
  const posts = [
    { id: 1, image: '/images/resource/news-1.jpg', date: 'September 12, 2019', title: "Strategy for Norway's Peion Fund Global." },
    { id: 2, image: '/images/resource/news-2.jpg', date: 'September 12, 2019', title: 'What we are capable of usually gets discovered.' },
    { id: 3, image: '/images/resource/news-3.jpg', date: 'September 12, 2019', title: 'Food industry leaders often change their promoters.' },
  ];

  return (
    <section className="news-section style-two">
      <div className="container">
        <div className="section-title">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title">News</div>
              <h3>Learn something more from <br /> our latest <span>news</span></h3>
            </div>
            <div className="pull-right">
              <div className="text">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div className="row clearfix">
          {posts.map((post, index) => (
            <div key={post.id} className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className={`inner-box wow fadeInLeft`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                <div className="image">
                  <img src={post.image} alt={post.title} />
                  <Lightbox images={[post.image]}>
                    {({ open }) => (
                      <div className="overlay-box">
                        <a onClick={() => open(0)} className="plus flaticon-plus" style={{ cursor: 'pointer' }}></a>
                      </div>
                    )}
                  </Lightbox>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li><span className="fa fa-calendar"></span>{post.date}</li>
                    <li><span className="fa fa-user"></span>Admin</li>
                  </ul>
                  <h5><Link to={`/blog/${post.id}`}>{post.title}</Link></h5>
                  <Link to={`/blog/${post.id}`} className="theme-btn btn-style-two">View more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
