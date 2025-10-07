/**
 * Feature Cards Component
 * Displays three feature blocks with icons
 */

import { Link } from 'react-router-dom';

export default function FeatureCards() {
  const features = [
    { icon: 'flaticon-calendar', title: 'Book an', subtitle: 'Appointment', link: '/appointments/book' },
    { icon: 'flaticon-link-symbol', title: 'Join our', subtitle: 'Community', link: '/community' },
    { icon: 'flaticon-envelope', title: 'Contact the', subtitle: 'Office', link: '/contact' },
  ];

  return (
    <section className="feature-section">
      <div className="auto-container">
        <div className="inner-container">
          <div className="clearfix">
            {features.map((feature, index) => (
              <div key={index} className="feature-block col-lg-4 col-md-6 col-sm-12">
                <Link to={feature.link} className="inner-box">
                  <div className={`big-icon ${feature.icon}`}></div>
                  <div className="content">
                    <div className="icon-box">
                      <span className={`icon ${feature.icon}`}></span>
                    </div>
                    <div className="title">{feature.title}</div>
                    <h4>{feature.subtitle}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
