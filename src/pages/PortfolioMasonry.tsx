import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const portfolioItems = [
  { id: 1, image: '/images/gallery/12.jpg', title: 'Business Management', category: 'Sustainability', filters: ['criminal', 'personal'], size: 'col-lg-6' },
  { id: 2, image: '/images/gallery/13.jpg', title: 'Business Management', category: 'Sustainability', filters: ['civil', 'others', 'business'], size: 'col-lg-3' },
  { id: 3, image: '/images/gallery/14.jpg', title: 'Business Management', category: 'Sustainability', filters: ['business', 'insurance'], size: 'col-lg-3' },
  { id: 4, image: '/images/gallery/15.jpg', title: 'Business Management', category: 'Sustainability', filters: ['criminal', 'others', 'personal', 'civil'], size: 'col-lg-3' },
  { id: 5, image: '/images/gallery/16.jpg', title: 'Business Management', category: 'Sustainability', filters: ['personal', 'others', 'criminal', 'civil'], size: 'col-lg-3' },
];

export default function PortfolioMasonry() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filters.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Portfolio Masonry | LawSight Law HTML Template</title>
        <meta name="description" content="Our portfolio in masonry layout" />
      </Helmet>

      <PageTitle title="Project Masonry" breadcrumbs={[{ label: 'Project Masonry' }]} />

      <section className="portfolio-section-two masonry-section">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Projects</div>
            <h3>We are here to fight against any <br /> violance with Project <span>experience</span></h3>
          </div>
          
          <div className="sortable-masonry">
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
            
            <div className="items-container row clearfix">
              {filteredItems.map((item) => (
                <div key={item.id} className={`project-block-three masonry-item ${item.size} col-md-12 col-sm-12`}>
                  <div className="inner-box">
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="title">{item.category}</div>
                          <h5><Link to={`/portfolio/${item.id}`}>{item.title}</Link></h5>
                          <a href={item.image} data-fancybox="gallery-4" className="plus flaticon-plus"></a>
                        </div>
                      </div>
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
