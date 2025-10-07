/**
 * Team Component
 * Team members showcase with social links
 */

export default function Team() {
  const members = [
    { name: 'Jonson Leo', role: 'Civil Lawyer', image: '/images/resource/team-1.jpg' },
    { name: 'Malina Leo', role: 'Terror Lawyer', image: '/images/resource/team-2.jpg' },
    { name: 'Neobir Fro', role: 'Civil Lawyer', image: '/images/resource/team-3.jpg' },
    { name: 'Neobir Fro', role: 'Criminal Lawyer', image: '/images/resource/team-4.jpg' },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title light">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title">Our Team</div>
              <h3>We feel very proud for our <br /> great <span>achievement</span></h3>
            </div>
            <div className="pull-right">
              <div className="text">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div className="clearfix">
          {members.map((member, index) => (
            <div key={index} className="team-block col-lg-3 col-md-6 col-sm-12">
              <div className={`inner-box wow fadeInUp`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                <div className="image">
                  <a href="#"><img src={member.image} alt={member.name} /></a>
                </div>
                <div className="lower-content">
                  <h3><a href="#">{member.name}</a></h3>
                  <div className="designation">{member.role}</div>
                  <div className="overlay-box">
                    <div className="overlay-content">
                      <div className="title">Contact info</div>
                      <ul className="social-icons">
                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                        <li><a href="#"><span className="fa fa-vimeo"></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
