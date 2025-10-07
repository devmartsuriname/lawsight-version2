import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'flaticon-internet',
    title: 'Agricultural Training Programs',
    description: 'Empowering local farmers with modern agricultural techniques and sustainable practices for food security.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-startup',
    title: 'Digital Social Support Registration',
    description: 'Streamlined online platform for citizens to register and access social welfare programs efficiently.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-museum',
    title: 'Public Policy Data Platform',
    description: 'Transparent access to government data and policy information for informed citizen participation.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-plan',
    title: 'Small Business Development',
    description: 'Support programs and grants to foster entrepreneurship and economic growth in local communities.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-book',
    title: 'Online Permit Applications',
    description: 'Simplified digital processes for obtaining permits and licenses, reducing bureaucratic delays.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-house-outline',
    title: 'Infrastructure Development',
    description: 'Building sustainable infrastructure to connect communities and improve quality of life nationwide.',
    image: '/images/resource/service-1.jpg',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Office of the Vice President | Republic of Suriname</title>
        <meta name="description" content="Government programs and services provided by the Office of the Vice President of Suriname" />
      </Helmet>

      <PageTitle title="Services" breadcrumbs={[{ label: 'Services' }]} />

      {/* Services Section */}
      <section className="services-section-four">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Services</div>
            <h3>Programs and initiatives serving <br /> the people of <span>Suriname</span></h3>
          </div>
          <div className="row clearfix">
            {services.map((service, index) => (
              <div key={index} className="services-block-two style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className={`icon ${service.icon}`}></span>
                  </div>
                  <h3>{service.title}</h3>
                  <div className="text">{service.description}</div>
                  <div className="overlay-box" style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="overlay-inner">
                      <div className="content">
                        <span className={`icon ${service.icon}`}></span>
                        <h4><Link to="/services/detail">{service.title}</Link></h4>
                        <Link to="/services/detail" className="theme-btn btn-style-one">consult now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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
