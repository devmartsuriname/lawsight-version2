import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Office of the Vice President | Republic of Suriname</title>
        <meta name="description" content="Learn about Vice President Dr. Gregory Allan Rusland and his vision for Suriname" />
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
                  <h3>Leading Suriname with vision, <br /> integrity, and <span>commitment</span></h3>
                </div>
                
                <div className="text">
                  <p>Dr. Gregory Allan Rusland serves as the Vice President of the Republic of Suriname, bringing decades of <span>leadership experience</span> and a deep commitment to national development and prosperity.</p>
                  <p>His administration focuses on sustainable economic growth, social development, and building a brighter future for all citizens of Suriname.</p>
                </div>
                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Economic development & growth</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Infrastructure modernization</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Social welfare programs</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Transparent governance</li>
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
                        <h2>Dedicated <span>public service</span></h2>
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
                  <div className="year">2020</div>
                  <h3>Vice President Elected</h3>
                  <div className="text">Inaugurated as Vice President of the Republic of Suriname, beginning a new chapter in national leadership.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2021</div>
                  <h3>Economic Reform Initiative</h3>
                  <div className="text">Launched comprehensive economic development programs focused on sustainable growth and job creation.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2022</div>
                  <h3>Infrastructure Development</h3>
                  <div className="text">Major infrastructure projects initiated to modernize transportation and connectivity across all districts.</div>
                </div>
              </div>
              
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">2024</div>
                  <h3>Digital Transformation</h3>
                  <div className="text">Implementing digital government services to improve accessibility and efficiency for all citizens.</div>
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
                  <div className="title">Impact</div>
                  <h3>Building a stronger Suriname <br /> through dedicated <span>service</span></h3>
                </div>
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Our administration is committed to transparency, accountability, and measurable results in serving the people of Suriname.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Through collaborative governance and community engagement, we continue to build a prosperous future for all citizens.</p>
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
                    <span className="count-text" data-speed="3000ms" data-stop="50">50</span>+
                    <div className="counter-title">Community programs</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="2000" data-stop="10">10</span>
                    <div className="counter-title">Districts served</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="2000" data-stop="25">25</span>+
                    <div className="counter-title">Infrastructure projects</div>
                  </div>
                </div>
              </div>
              
              <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500" data-stop="4">4</span>+
                    <div className="counter-title">Years of service</div>
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
                <div className="title">Leadership</div>
                <h3>Dedicated team members <br /> serving <span>Suriname</span></h3>
              </div>
              <div className="pull-right">
                <div className="text">Our leadership team brings together diverse expertise and a shared commitment to serving the people of Suriname with integrity, transparency, and dedication to national progress.</div>
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
                  <h3><a href="#">Dr. Gregory Allan Rusland</a></h3>
                  <div className="designation">Vice President</div>
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
                  <h3><a href="#">Chief of Staff</a></h3>
                  <div className="designation">Executive Office</div>
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
                  <h3><a href="#">Policy Director</a></h3>
                  <div className="designation">Policy & Planning</div>
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
                  <h3><a href="#">Communications Director</a></h3>
                  <div className="designation">Public Affairs</div>
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
