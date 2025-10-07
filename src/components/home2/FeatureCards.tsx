/**
 * Feature Cards Component
 * Displays three feature blocks with icons
 */

export default function FeatureCards() {
  const features = [
    { icon: 'flaticon-calendar', title: 'Book an', subtitle: 'Appointment' },
    { icon: 'flaticon-link-symbol', title: 'Join our', subtitle: 'Team member' },
    { icon: 'flaticon-calendar', title: 'Book an', subtitle: 'Appointment' },
  ];

  return (
    <section className="feature-section">
      <div className="container">
        <div className="inner-container">
          <div className="clearfix">
            {features.map((feature, index) => (
              <div key={index} className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className={`big-icon ${feature.icon}`}></div>
                  <div className="content">
                    <div className="icon-box">
                      <span className={`icon ${feature.icon}`}></span>
                    </div>
                    <div className="title">{feature.title}</div>
                    <h4>{feature.subtitle}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
