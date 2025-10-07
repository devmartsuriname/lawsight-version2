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
    <section className="feature-section py-[var(--section-padding)] bg-[color:var(--color-bg-white)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="inner-container">
          <div className="clearfix">
            {features.map((feature, index) => (
              <div key={index} className="feature-block col-lg-4 col-md-6 col-sm-12 px-[var(--spacing-md)]">
                <Link to={feature.link} className="inner-box p-[var(--spacing-lg)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--transition-base)] block">
                  <div className={`big-icon ${feature.icon} text-[color:var(--color-primary)] text-[length:var(--icon-size-xl)]`}></div>
                  <div className="content">
                    <div className="icon-box mb-[var(--spacing-sm)]">
                      <span className={`icon ${feature.icon} text-[color:var(--color-primary)] text-[length:var(--icon-size-lg)]`}></span>
                    </div>
                    <div className="title text-[color:var(--color-text-secondary)] text-[length:var(--font-size-sm)] uppercase tracking-wider">{feature.title}</div>
                    <h4 className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h4)] font-[var(--font-weight-bold)] mt-[var(--spacing-xs)]">{feature.subtitle}</h4>
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
