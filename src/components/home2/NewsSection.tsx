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
    <section className="news-section style-two py-[var(--section-padding)] bg-[color:var(--color-bg-light)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="section-title mb-[var(--spacing-2xl)]">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title text-[color:var(--color-primary)] text-[length:var(--font-size-sm)] uppercase tracking-wider mb-[var(--spacing-sm)]">News</div>
              <h3 className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h2)] font-[var(--font-weight-bold)]">Learn something more from <br /> our latest <span className="text-[color:var(--color-primary)]">news</span></h3>
            </div>
            <div className="pull-right">
              <div className="text text-[color:var(--color-text-secondary)] text-[length:var(--font-size-base)] leading-[var(--line-height-relaxed)]">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div className="row clearfix">
          {posts.map((post, index) => (
            <div key={post.id} className="news-block col-lg-4 col-md-6 col-sm-12 px-[var(--spacing-md)]">
              <div className={`inner-box wow fadeInLeft rounded-[var(--border-radius-md)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--transition-base)] bg-[color:var(--color-bg-white)]`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                <div className="image relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-auto transition-transform duration-[var(--transition-base)] hover:scale-110" />
                  <Lightbox images={[post.image]}>
                    {({ open }) => (
                      <div className="overlay-box absolute inset-0 bg-[color:var(--color-overlay)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-[var(--transition-base)]">
                        <a onClick={() => open(0)} className="plus flaticon-plus text-[color:var(--color-text-white)] text-[length:var(--icon-size-lg)] cursor-pointer"></a>
                      </div>
                    )}
                  </Lightbox>
                </div>
                <div className="lower-content p-[var(--spacing-lg)]">
                  <ul className="post-meta flex gap-[var(--spacing-md)] mb-[var(--spacing-md)] text-[color:var(--color-text-secondary)] text-[length:var(--font-size-sm)]">
                    <li className="flex items-center gap-[var(--spacing-xs)]"><span className="fa fa-calendar text-[color:var(--color-primary)]"></span>{post.date}</li>
                    <li className="flex items-center gap-[var(--spacing-xs)]"><span className="fa fa-user text-[color:var(--color-primary)]"></span>Admin</li>
                  </ul>
                  <h5 className="mb-[var(--spacing-md)]"><Link to={`/blog/${post.id}`} className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h5)] font-[var(--font-weight-bold)] hover:text-[color:var(--color-primary)] transition-colors duration-[var(--transition-base)]">{post.title}</Link></h5>
                  <Link to={`/blog/${post.id}`} className="theme-btn btn-style-two inline-block px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] rounded-[var(--btn-border-radius)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]">View more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
