import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const portfolioItems = [
  { id: 1, image: '/images/gallery/6.jpg', title: 'Domestic Violence', category: 'Personal Law', filters: ['civil'] },
  { id: 2, image: '/images/gallery/7.jpg', title: 'Marriage & Divorce', category: 'Personal Law', filters: ['criminal', 'others'] },
  { id: 3, image: '/images/gallery/8.jpg', title: 'Physical Violence', category: 'Personal Law', filters: ['civil', 'business'] },
  { id: 4, image: '/images/gallery/9.jpg', title: 'Mental Tourcher', category: 'Personal Law', filters: ['criminal', 'personal'] },
  { id: 5, image: '/images/gallery/10.jpg', title: 'Plan Management', category: 'Personal Law', filters: ['business', 'criminal'] },
  { id: 6, image: '/images/gallery/11.jpg', title: 'Business Management', category: 'Personal Law', filters: ['civil', 'personal', 'business'] },
];

export default function Portfolio2Col() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filters.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Portfolio Two Column | LawSight Law HTML Template</title>
        <meta name="description" content="Our portfolio in two column layout" />
      </Helmet>

      <PageTitle title="Project" breadcrumbs={[{ label: 'Project Col 2' }]} />

      <section className="portfolio-section-two">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Projects</div>
            <h3>We are here to fight against any <br /> violance with Project <span>experience</span></h3>
          </div>
          
          <div className="mixitup-gallery">
            <div className="filters clearfix">
              <ul className="filter-tabs filter-btns text-center clearfix">
                <li className={`filter ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</li>
                <li className={`filter ${activeFilter === 'business' ? 'active' : ''}`} onClick={() => setActiveFilter('business')}>Business</li>
                <li className={`filter ${activeFilter === 'criminal' ? 'active' : ''}`} onClick={() => setActiveFilter('criminal')}>Criminal</li>
                <li className={`filter ${activeFilter === 'civil' ? 'active' : ''}`} onClick={() => setActiveFilter('civil')}>Civil</li>
                <li className={`filter ${activeFilter === 'personal' ? 'active' : ''}`} onClick={() => setActiveFilter('personal')}>Personal</li>
                <li className={`filter ${activeFilter === 'others' ? 'active' : ''}`} onClick={() => setActiveFilter('others')}>Others</li>
              </ul>
            </div>
            
            <div className="filter-list row clearfix">
              {filteredItems.map((item) => (
                <div key={item.id} className="portfolio-block-two col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                      <div className="overlay-box">
                        <a href={item.image} data-fancybox="gallery-1" className="plus flaticon-plus"></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h5><Link to={`/portfolio/${item.id}`}>{item.title}</Link></h5>
                      <div className="designation">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section">
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
