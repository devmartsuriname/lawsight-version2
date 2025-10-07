/**
 * Services Grid Component
 * Displays service offerings with experience badge
 */

import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  const services = [
    { icon: 'fa fa-bullhorn', title: 'Market Law' },
    { icon: 'fa fa-suitcase', title: 'Business Planning' },
    { icon: 'fa fa-area-chart', title: 'Investment Trade' },
    { icon: 'fa fa-coffee', title: 'Fund Law' },
    { icon: 'fa fa-building', title: 'Home Law' },
    { icon: 'fa fa-pie-chart', title: 'Insurance Law' },
  ];

  return (
    <section className="services-section-three">
      <div className="icon-one wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(/images/icons/icon-6.png)' }}></div>
      <div className="icon-two wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(/images/icons/icon-7.png)' }}></div>
      <div className="container">
        <div className="row clearfix">
          <div className="blocks-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="row clearfix">
                {services.map((service, index) => (
                  <div key={index} className="services-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className={`inner-box wow fadeInUp`} data-wow-delay={`${(index % 2) * 300}ms`} data-wow-duration="1500ms">
                      <div className="border-one"></div>
                      <div className="border-two"></div>
                      <div className="content">
                        <div className="icon-box">
                          <span className={`icon ${service.icon}`}></span>
                        </div>
                        <h6><Link to="/services/detail">{service.title}</Link></h6>
                        <div className="text">Lorem ipsum dolor sit amet, con sectetu adipiscing elit, sed do eius mod tempor incididunt.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="image-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-column clearfix">
              <div className="image">
                <img src="/images/resource/about-2.jpg" alt="Experience"/>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <h2>35 <span>years of experience</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
