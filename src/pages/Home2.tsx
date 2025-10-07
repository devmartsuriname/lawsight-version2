import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CounterBox } from '@/components/CounterBox';
import { Lightbox } from '@/components/Lightbox';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home2() {
  return (
    <>
      <Helmet>
        <title>LawSight Law HTML Template | Home 02</title>
        <meta name="description" content="Professional legal services and consultation - Alternative homepage" />
      </Helmet>

      {/* Banner Section Two */}
      <section className="banner-section-two" style={{ backgroundImage: 'url(/images/main-slider/2.jpg)' }}>
        <div className="left-side">
          <div className="icon-image"></div>
        </div>
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="main-slider-carousel"
          >
            <SwiperSlide>
              <div className="slide">
                <div className="row clearfix">
                  <div className="image-column col-lg-7 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="/images/main-slider/content-image-1.png" alt="LawSight" />
                    </div>
                  </div>
                  <div className="content-column col-lg-5 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Assign <br /> lawsight <br /> for Satisfaction</h2>
                      <div className="text">Introduce with LawSight, Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor.</div>
                      <Link to="/contact" className="theme-btn btn-style-one">Contact us today</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="slide">
                <div className="row clearfix">
                  <div className="image-column col-lg-7 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="/images/main-slider/2.jpg" alt="LawSight" />
                    </div>
                  </div>
                  <div className="content-column col-lg-5 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Assign <br /> lawsight <br /> for Satisfaction</h2>
                      <div className="text">Introduce with LawSight, Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor.</div>
                      <Link to="/contact" className="theme-btn btn-style-one">Contact us today</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="container">
          <div className="inner-container">
            <div className="clearfix">
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="big-icon flaticon-calendar"></div>
                  <div className="content">
                    <div className="icon-box">
                      <span className="icon flaticon-calendar"></span>
                    </div>
                    <div className="title">Book an</div>
                    <h4>Appointment</h4>
                  </div>
                </div>
              </div>
              
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="big-icon flaticon-link-symbol"></div>
                  <div className="content">
                    <div className="icon-box">
                      <span className="icon flaticon-link-symbol"></span>
                    </div>
                    <div className="title">Join our</div>
                    <h4>Team member</h4>
                  </div>
                </div>
              </div>
              
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="big-icon flaticon-calendar"></div>
                  <div className="content">
                    <div className="icon-box">
                      <span className="icon flaticon-calendar"></span>
                    </div>
                    <div className="title">Book an</div>
                    <h4>Appointment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section style-two">
        <div className="container">
          <div className="row clearfix">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="section-title">
                  <div className="title">about us</div>
                  <h3>We are here to fight against any violance with <span>experience</span></h3>
                </div>
                
                <div className="text">
                  <p>The argument in favor of using filler text goes something like this: If you use real content in the <span>design process,</span> anytime you reach a review point you&apos;ll end up reviewing and negotiating the content itself and not the design.</p>
                  <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
                </div>
                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>Praesent feugiat sem mattis.</li>
                      <li>Premium services beyond you.</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-one">
                      <li>A wonderful serenity.</li>
                      <li>Set a link back to this photo.</li>
                    </ul>
                  </div>
                </div>
                <div className="question">Call to ask <a href="#">any question</a> <strong>540-325-1523</strong> <span className="or">or</span> <strong>540-328-1265</strong></div>
                <div className="signature">
                  <div className="signature-img"><img src="/images/icons/signature.png" alt="Signature"/></div>
                  <h5>Natalia Duke</h5>
                  <div className="designation">(Chairman and founder)</div>
                </div>
              </div>
            </div>
            
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="video-box">
                  <figure className="video-image">
                    <img src="/images/resource/video-img.jpg" alt="Video" />
                  </figure>
                  <Lightbox images={['https://www.youtube.com/watch?v=kxPCFljwJws']}>
                    {({ open }) => (
                      <a onClick={() => open(0)} className="overlay-box" style={{ cursor: 'pointer' }}>
                        <span className="flaticon-play-button"></span>
                      </a>
                    )}
                  </Lightbox>
                </div>
                
                <div className="fact-counter style-two">
                  <div className="container">
                    <div className="row clearfix">
                      <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                        <CounterBox end={1235} title="Satisfied Clients" delay={0} />
                      </div>
                      
                      <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                        <CounterBox end={1402} suffix="+" title="Completed works" delay={300} />
                      </div>
                      
                      <div className="column counter-column col-lg-4 col-md-12 col-sm-12">
                        <CounterBox end={35} title="Winning Awards" delay={600} />
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

      {/* Services Section Three */}
      <section className="services-section-three">
        <div className="icon-one wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(/images/icons/icon-6.png)' }}></div>
        <div className="icon-two wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(/images/icons/icon-7.png)' }}></div>
        <div className="container">
          <div className="row clearfix">
            <div className="blocks-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="row clearfix">
                  {[
                    { icon: 'fa fa-bullhorn', title: 'Market Law' },
                    { icon: 'fa fa-suitcase', title: 'Business Planning' },
                    { icon: 'fa fa-area-chart', title: 'Investment Trade' },
                    { icon: 'fa fa-coffee', title: 'Fund Law' },
                    { icon: 'fa fa-building', title: 'Home Law' },
                    { icon: 'fa fa-pie-chart', title: 'Insurance Law' },
                  ].map((service, index) => (
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

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-title">
            <div className="title">Testimonial</div>
            <h3>Clients are very satisfied <br /> to work with <span>us</span></h3>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonial-carousel"
          >
            {[
              { name: 'Andrew Rob', role: 'Former Developer', image: '/images/resource/author-3.jpg' },
              { name: 'Nelli Jhonson', role: 'Former Developer', image: '/images/resource/author-4.jpg' },
              { name: 'Andrew Rob', role: 'Former Developer', image: '/images/resource/author-3.jpg' },
              { name: 'Nelli Jhonson', role: 'Former Developer', image: '/images/resource/author-4.jpg' },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean tor massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                    <div className="author-post">
                      <div className="author-inner">
                        <div className="image"><img src={testimonial.image} alt={testimonial.name} /></div>
                        <h3>{testimonial.name}</h3>
                        <div className="designation">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            {[
              { name: 'Jonson Leo', role: 'Civil Lawyer', image: '/images/resource/team-1.jpg' },
              { name: 'Malina Leo', role: 'Terror Lawyer', image: '/images/resource/team-2.jpg' },
              { name: 'Neobir Fro', role: 'Civil Lawyer', image: '/images/resource/team-3.jpg' },
              { name: 'Neobir Fro', role: 'Criminal Lawyer', image: '/images/resource/team-4.jpg' },
            ].map((member, index) => (
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

      {/* News Section */}
      <section className="news-section style-two">
        <div className="container">
          <div className="section-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">News</div>
                <h3>Learn something more from <br /> our latest <span>news</span></h3>
              </div>
              <div className="pull-right">
                <div className="text">Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched his lawyer in the face in court Tuesday upon finding out he was sentenced.</div>
              </div>
            </div>
          </div>
          
          <div className="row clearfix">
            {[
              { id: 1, image: '/images/resource/news-1.jpg', date: 'September 12, 2019', title: "Strategy for Norway's Peion Fund Global." },
              { id: 2, image: '/images/resource/news-2.jpg', date: 'September 12, 2019', title: 'What we are capable of usually gets discovered.' },
              { id: 3, image: '/images/resource/news-3.jpg', date: 'September 12, 2019', title: 'Food industry leaders often change their promoters.' },
            ].map((post, index) => (
              <div key={post.id} className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className={`inner-box wow fadeInLeft`} data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                  <div className="image">
                    <img src={post.image} alt={post.title} />
                    <Lightbox images={[post.image]}>
                      {({ open }) => (
                        <div className="overlay-box">
                          <a onClick={() => open(0)} className="plus flaticon-plus" style={{ cursor: 'pointer' }}></a>
                        </div>
                      )}
                    </Lightbox>
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li><span className="fa fa-calendar"></span>{post.date}</li>
                      <li><span className="fa fa-user"></span>Admin</li>
                    </ul>
                    <h5><Link to={`/blog/${post.id}`}>{post.title}</Link></h5>
                    <Link to={`/blog/${post.id}`} className="theme-btn btn-style-two">View more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="container">
          <div className="fact-counter style-three">
            <div className="row clearfix">
              {[
                { icon: 'fa fa-briefcase', count: 1825, title: 'Completed works' },
                { icon: 'flaticon-teamwork', count: 532, title: 'Satisfied clients' },
                { icon: 'flaticon-ribbon-badge-award', count: 69, title: 'Winning awards' },
                { icon: 'flaticon-multiple-users-silhouette', count: 32, title: 'Team members' },
              ].map((stat, index) => (
                <div key={index} className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <CounterBox end={stat.count} suffix="+" title={stat.title} delay={index * 300} />
                </div>
              ))}
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
