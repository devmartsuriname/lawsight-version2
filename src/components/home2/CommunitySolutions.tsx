/**
 * Community Solutions Component
 * Displays community programs and initiatives with experience badge
 */

import { Link } from 'react-router-dom';

export default function CommunitySolutions() {
  const solutions = [
    { icon: 'fa fa-graduation-cap', title: 'Youth Training', description: 'Free agricultural and vocational training programs designed to equip young Surinamese with practical skills for sustainable employment and entrepreneurship.' },
    { icon: 'fa fa-users', title: 'Social Support', description: 'Digital registration platform providing accessible social assistance programs, healthcare support, and family welfare services to vulnerable communities.' },
    { icon: 'fa fa-database', title: 'Open Data Platform', description: 'Transparent public data portal enabling citizens to access government information, budgets, and community resources for informed civic participation.' },
    { icon: 'fa fa-money', title: 'Small Business Grants', description: 'Financial assistance programs supporting local entrepreneurs and small businesses to drive economic growth and job creation across all districts.' },
    { icon: 'fa fa-file-text', title: 'Online Permits', description: 'Streamlined digital permit system allowing citizens to request business licenses, construction permits, and official documentation efficiently online.' },
    { icon: 'fa fa-road', title: 'Infrastructure Projects', description: 'Community-driven infrastructure initiatives improving roads, utilities, and public facilities to enhance quality of life for all Surinamese citizens.' },
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
                {solutions.map((solution, index) => (
                  <div key={index} className="services-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className={`inner-box wow fadeInUp`} data-wow-delay={`${(index % 2) * 300}ms`} data-wow-duration="1500ms">
                      <div className="border-one"></div>
                      <div className="border-two"></div>
                      <div className="content">
                        <div className="icon-box">
                          <span className={`icon ${solution.icon}`}></span>
                        </div>
                        <h6><Link to="/services/detail">{solution.title}</Link></h6>
                        <div className="text">{solution.description}</div>
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
