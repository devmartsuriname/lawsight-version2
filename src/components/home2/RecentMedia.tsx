/**
 * Recent Media Component
 * Latest videos and media from YouTube channel (placeholder for YouTube sync)
 */

export default function RecentMedia() {
  const mediaItems = [
    { title: 'Community Forum 2024', role: 'Public Address', image: '/images/resource/team-1.jpg' },
    { title: 'Youth Empowerment Summit', role: 'Keynote Speech', image: '/images/resource/team-2.jpg' },
    { title: 'Agricultural Training Launch', role: 'Program Launch', image: '/images/resource/team-3.jpg' },
    { title: 'Infrastructure Progress Update', role: 'Community Update', image: '/images/resource/team-4.jpg' },
  ];

  return (
    <section className="team-section py-[var(--section-padding)] bg-[color:var(--color-bg-dark)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="section-title light mb-[var(--spacing-2xl)]">
          <div className="clearfix">
            <div className="pull-left">
              <div className="title text-[color:var(--color-text-gold)] text-[length:var(--font-size-sm)] uppercase tracking-wider mb-[var(--spacing-sm)]">Latest Media</div>
              <h3 className="text-[color:var(--color-text-white)] text-[length:var(--font-size-h2)] font-[var(--font-weight-bold)]">Recent videos and <br /> media <span className="text-[color:var(--color-text-gold)]">coverage</span></h3>
            </div>
            <div className="pull-right">
              <div className="text text-[color:var(--color-text-light)] text-[length:var(--font-size-base)] leading-[var(--line-height-relaxed)]">Stay informed with the latest updates, speeches, and community initiatives from the Vice President's office. Watch recent videos and media coverage of our programs.</div>
            </div>
          </div>
        </div>
        
        <div className="clearfix">
          {mediaItems.map((media, index) => (
            <div key={index} className="team-block col-lg-3 col-md-6 col-sm-12 px-[var(--spacing-md)]">
              <div className={`inner-box wow fadeInUp rounded-[var(--border-radius-md)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--transition-base)]`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                <div className="image overflow-hidden">
                  <a href="#"><img src={media.image} alt={media.title} className="w-full h-auto transition-transform duration-[var(--transition-base)] hover:scale-110" /></a>
                </div>
                <div className="lower-content p-[var(--spacing-lg)] bg-[color:var(--color-bg-white)]">
                  <h3 className="mb-[var(--spacing-xs)]"><a href="#" className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h5)] font-[var(--font-weight-bold)] hover:text-[color:var(--color-primary)] transition-colors duration-[var(--transition-base)]">{media.title}</a></h3>
                  <div className="designation text-[color:var(--color-text-secondary)] text-[length:var(--font-size-sm)]">{media.role}</div>
                  <div className="overlay-box absolute inset-0 bg-[color:var(--color-overlay)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-[var(--transition-base)]">
                    <div className="overlay-content text-center">
                      <div className="title text-[color:var(--color-text-white)] text-[length:var(--font-size-base)] mb-[var(--spacing-sm)]">Watch Video</div>
                      <ul className="social-icons flex gap-[var(--spacing-sm)] justify-center">
                        <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-accent)] transition-colors duration-[var(--transition-base)]"><span className="fa fa-play"></span></a></li>
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
