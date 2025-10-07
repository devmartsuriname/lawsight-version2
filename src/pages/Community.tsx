import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';
import { Link } from 'react-router-dom';

export default function Community() {
  const programs = [
    {
      icon: 'fa fa-graduation-cap',
      title: 'Youth Training Programs',
      description: 'Free agricultural and vocational training programs designed to equip young Surinamese with practical skills for sustainable employment and entrepreneurship.',
      features: ['Agricultural Skills', 'Technical Training', 'Entrepreneurship', 'Job Placement']
    },
    {
      icon: 'fa fa-users',
      title: 'Social Support Services',
      description: 'Digital registration platform providing accessible social assistance programs, healthcare support, and family welfare services to vulnerable communities.',
      features: ['Healthcare Access', 'Family Welfare', 'Emergency Aid', 'Counseling Services']
    },
    {
      icon: 'fa fa-database',
      title: 'Open Data Platform',
      description: 'Transparent public data portal enabling citizens to access government information, budgets, and community resources for informed civic participation.',
      features: ['Budget Transparency', 'Government Data', 'Community Resources', 'Public Records']
    },
    {
      icon: 'fa fa-money',
      title: 'Small Business Grants',
      description: 'Financial assistance programs supporting local entrepreneurs and small businesses to drive economic growth and job creation across all districts.',
      features: ['Startup Funding', 'Business Mentorship', 'Grant Applications', 'Success Stories']
    },
    {
      icon: 'fa fa-file-text',
      title: 'Online Permits',
      description: 'Streamlined digital permit system allowing citizens to request business licenses, construction permits, and official documentation efficiently online.',
      features: ['Business Licenses', 'Construction Permits', 'Document Requests', 'Status Tracking']
    },
    {
      icon: 'fa fa-road',
      title: 'Infrastructure Projects',
      description: 'Community-driven infrastructure initiatives improving roads, utilities, and public facilities to enhance quality of life for all Surinamese citizens.',
      features: ['Road Improvements', 'Utility Upgrades', 'Public Facilities', 'Project Updates']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community Programs | Office of the Vice President</title>
        <meta name="description" content="Explore community programs and initiatives by the Office of the Vice President - Youth training, social support, infrastructure projects, and more." />
      </Helmet>

      <PageTitle 
        title="Community Programs" 
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Community' }
        ]} 
      />

      <section className="services-page-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Empowering Communities Through <span>Action</span></h2>
            <div className="text">The Office of the Vice President is committed to building stronger, more resilient communities through innovative programs that prioritize accessibility, transparency, and citizen empowerment.</div>
          </div>

          <div className="row clearfix">
            {programs.map((program, index) => (
              <div key={index} className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="icon-box">
                    <span className={`icon ${program.icon}`}></span>
                  </div>
                  <h5><Link to="/services/detail">{program.title}</Link></h5>
                  <div className="text">{program.description}</div>
                  <ul className="list-style-one">
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/services/detail" className="read-more">Learn More <span className="fa fa-angle-right"></span></Link>
                </div>
              </div>
            ))}
          </div>

          <div className="lower-section" style={{ marginTop: '60px' }}>
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="section-title">
                    <h3>Get Involved in Your <span>Community</span></h3>
                  </div>
                  <div className="text">
                    <p>Whether you're looking to access services, participate in programs, or contribute to community development, we invite you to engage with the initiatives that matter most to you.</p>
                    <p>Our programs are designed to be accessible, transparent, and responsive to the needs of all Surinamese citizens. Together, we can build a stronger, more prosperous future.</p>
                  </div>
                  <div className="btns-box">
                    <Link to="/appointments/book" className="theme-btn btn-style-three">
                      <span className="txt">Schedule a Meeting</span>
                    </Link>
                    <Link to="/contact" className="theme-btn btn-style-four">
                      <span className="txt">Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image">
                    <img src="/images/resource/about-1.jpg" alt="Community" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
