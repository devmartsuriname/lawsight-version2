import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'flaticon-internet',
    title: 'Business Law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-museum',
    title: 'Civil Law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-gun',
    title: 'Criminal Law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-plan',
    title: 'Business Law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-book',
    title: 'Education Law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
  {
    icon: 'flaticon-house-outline',
    title: 'Real Estate law',
    description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.',
    image: '/images/resource/service-1.jpg',
  },
];

const pricingPlans = [
  {
    icon: 'flaticon-startup-1',
    title: 'Basic Plan',
    price: 29,
    features: [
      'Perspiciatis unde omnis iste natus',
      'error sit volupta tem accusantium',
      'doloremque laudantium, totam rem',
      'aperiam, eaque ipsa quae ab illo',
      'inventore veritatis.',
    ],
  },
  {
    icon: 'flaticon-startup',
    title: 'Standard Plan',
    price: 49,
    features: [
      'Perspiciatis unde omnis iste natus',
      'error sit volupta tem accusantium',
      'doloremque laudantium, totam rem',
      'aperiam, eaque ipsa quae ab illo',
      'inventore veritatis.',
    ],
  },
  {
    icon: 'flaticon-startup-2',
    title: 'Extended Plan',
    price: 59,
    features: [
      'Perspiciatis unde omnis iste natus',
      'error sit volupta tem accusantium',
      'doloremque laudantium, totam rem',
      'aperiam, eaque ipsa quae ab illo',
      'inventore veritatis.',
    ],
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | LawSight Law HTML Template</title>
        <meta name="description" content="Our comprehensive legal services" />
      </Helmet>

      <PageTitle title="Services" breadcrumbs={[{ label: 'Services' }]} />

      {/* Services Section */}
      <section className="services-section-four">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Services</div>
            <h3>We are here to fight against any <br /> violance with <span>experience</span></h3>
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

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Pricing</div>
            <h3>Choose the best pricing <br /> to start <span> consulting </span></h3>
          </div>
          
          <div className="pricing-info-tabs">
            <div className="pricing-tabs tabs-box">
              <ul className="tab-btns tab-buttons clearfix">
                <li className="tab-btn active-btn"><span className="circle"></span> Monthly</li>
                <li className="tab-btn"><span className="circle"></span> Yearly <span className="save">Save 20%</span></li>
              </ul>
              
              <div className="tabs-content">
                <div className="tab active-tab">
                  <div className="content">
                    <div className="row clearfix">
                      {pricingPlans.map((plan, index) => (
                        <div key={index} className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title-box">
                              <div className={`icon ${plan.icon}`}></div>
                              <h5>{plan.title}</h5>
                            </div>
                            <div className="price">${plan.price} <span>/ monthly</span></div>
                            <div className="lower-box">
                              <ul className="price-list">
                                {plan.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                              <a href="#" className="theme-btn btn-style-two">Get Started</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
