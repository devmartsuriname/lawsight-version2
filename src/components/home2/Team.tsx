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
    <section className="team-section py-[var(--section-padding)] bg-[color:var(--color-bg-dark)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="section-title light mb-[var(--spacing-2xl)]">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title text-[color:var(--color-text-gold)] text-[length:var(--font-size-sm)] uppercase tracking-wider mb-[var(--spacing-sm)]">Our Team</div>
              <h3 className="text-[color:var(--color-text-white)] text-[length:var(--font-size-h2)] font-[var(--font-weight-bold)]">We feel very proud for our <br /> great <span className="text-[color:var(--color-text-gold)]">achievement</span></h3>
            </div>
            <div className="pull-right">
              <div className="text text-[color:var(--color-text-light)] text-[length:var(--font-size-base)] leading-[var(--line-height-relaxed)]">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
            </div>
          </div>
        </div>
        
        <div className="clearfix">
          {members.map((member, index) => (
            <div key={index} className="team-block col-lg-3 col-md-6 col-sm-12 px-[var(--spacing-md)]">
              <div className={`inner-box wow fadeInUp rounded-[var(--border-radius-md)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--transition-base)]`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                <div className="image overflow-hidden">
                  <a href="#"><img src={member.image} alt={member.name} className="w-full h-auto transition-transform duration-[var(--transition-base)] hover:scale-110" /></a>
                </div>
                <div className="lower-content p-[var(--spacing-lg)] bg-[color:var(--color-bg-white)]">
                  <h3 className="mb-[var(--spacing-xs)]"><a href="#" className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h5)] font-[var(--font-weight-bold)] hover:text-[color:var(--color-primary)] transition-colors duration-[var(--transition-base)]">{member.name}</a></h3>
                  <div className="designation text-[color:var(--color-text-secondary)] text-[length:var(--font-size-sm)]">{member.role}</div>
                  <div className="overlay-box absolute inset-0 bg-[color:var(--color-overlay)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-[var(--transition-base)]">
                    <div className="overlay-content text-center">
                      <div className="title text-[color:var(--color-text-white)] text-[length:var(--font-size-base)] mb-[var(--spacing-sm)]">Contact info</div>
                      <ul className="social-icons flex gap-[var(--spacing-sm)] justify-center">
                        <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]"><span className="fa fa-twitter"></span></a></li>
                        <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]"><span className="fa fa-pinterest-p"></span></a></li>
                        <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]"><span className="fa fa-vimeo"></span></a></li>
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
