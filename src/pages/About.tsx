import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | LawSight Law HTML Template</title>
        <meta name="description" content="Learn more about LawSight legal professionals" />
      </Helmet>

      <PageTitle title="About Us" breadcrumbs={[{ label: 'About' }]} />

      {/* About Section */}
      <section className="about-section">
        <div className="image-layer" style={{ backgroundImage: 'url(/images/resource/about-1.jpg)' }}></div>
        <div className="container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="section-title">
                  <div className="title">about us</div>
                  <h3>We are here to fight against any violance with <span>experience</span></h3>
                </div>
                
                <div className="text">
                  <p>The argument in favor of using filler text goes something like this: If you use real content in the <span>design process,</span> anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.</p>
                  <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
                </div>
                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Praesent feugiat sem mattis.</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>A wonderful serenity.</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Premium services beyond you.</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Set a link back to this photo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-8 col-sm-12">
              <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <img src="/images/resource/about-2.jpg" alt="About LawSight" />
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

      {/* Feature Section Two */}
      <section className="feature-section-two">
        <div className="container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2016</div>
                  <h3>Started Journey</h3>
                  <div className="text">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2017</div>
                  <h3>We employed lawyers</h3>
                  <div className="text">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2018</div>
                  <h3>Winning best awards</h3>
                  <div className="text">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2019</div>
                  <h3>Improved team</h3>
                  <div className="text">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section style-two">
        <div className="container">
          <div className="title-box">
            <div className="section-title">
              <div className="row clearfix">
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  <div className="title">Fun fact</div>
                  <h3>We feel very proud for our <br /> great <span>achievement</span></h3>
                </div>
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dignissimmi quis neque interdum.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dignissimmi quis neque interdum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fact-counter">
            <div className="row clearfix">
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="3000ms" data-stop="1825">1825</span>+
                    <div className="counter-title">Completed works</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="2000" data-stop="532">532</span>+
                    <div className="counter-title">Satisfied clients</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="2000" data-stop="69">69</span>+
                    <div className="counter-title">Winning awards</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500" data-stop="32">32</span>+
                    <div className="counter-title">Team members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            <div className="team-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="#"><img src="/images/resource/team-1.jpg" alt="Jonson Leo" /></a>
                </div>
                <div className="lower-content">
                  <h3><a href="#">Jonson Leo</a></h3>
                  <div className="designation">Civil Lawyer</div>
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
            
            <div className="team-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="#"><img src="/images/resource/team-2.jpg" alt="Malina Leo" /></a>
                </div>
                <div className="lower-content">
                  <h3><a href="#">Malina Leo</a></h3>
                  <div className="designation">Terror Lawyer</div>
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
            
            <div className="team-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="#"><img src="/images/resource/team-3.jpg" alt="Neobir Fro" /></a>
                </div>
                <div className="lower-content">
                  <h3><a href="#">Neobir Fro</a></h3>
                  <div className="designation">Civil Lawyer</div>
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
            
            <div className="team-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="#"><img src="/images/resource/team-4.jpg" alt="Neobir Fro" /></a>
                </div>
                <div className="lower-content">
                  <h3><a href="#">Neobir Fro</a></h3>
                  <div className="designation">Criminal Lawyer</div>
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
