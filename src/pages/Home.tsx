import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  { icon: 'flaticon-internet', title: 'Business Law', description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.' },
  { icon: 'flaticon-museum', title: 'Civil Law', description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.' },
  { icon: 'flaticon-gun', title: 'Criminal Law', description: 'It is a long established fact that areader will be distracted by the readable content of a page when looking.' },
];

const testimonials = [
  { name: 'John Smith', role: 'CEO & Founder', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.' },
  { name: 'Sarah Johnson', role: 'Business Owner', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.' },
];

const blogPosts = [
  { id: 1, image: '/images/resource/news-1.jpg', date: 'September 12, 2019', title: "Strategy for Norway's Pension Fund Global." },
  { id: 2, image: '/images/resource/news-2.jpg', date: 'September 12, 2019', title: 'What we are capable of usually gets discovered.' },
  { id: 3, image: '/images/resource/news-3.jpg', date: 'September 12, 2019', title: 'Food industry leaders often change their promoters.' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LawSight Law HTML Template | Home</title>
        <meta name="description" content="Professional legal services and consultation" />
        <meta property="og:title" content="LawSight - Professional Legal Services" />
        <meta property="og:description" content="Expert legal consultation and representation" />
      </Helmet>

      {/* Main Slider */}
      <section className="banner-section" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}>
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="banner-carousel"
          >
            <SwiperSlide>
              <div className="slide">
                <div className="content">
                  <h2>Professional Legal <br /> Services & Consultation</h2>
                  <div className="text">Expert legal representation when you need it most</div>
                  <div className="btns-box">
                    <Link to="/contact" className="theme-btn btn-style-one">Contact us</Link>
                    <Link to="/about" className="theme-btn btn-style-two">Learn more</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="slide">
                <div className="content">
                  <h2>Fighting for Your <br /> Rights & Justice</h2>
                  <div className="text">Experienced legal professionals ready to help</div>
                  <div className="btns-box">
                    <Link to="/contact" className="theme-btn btn-style-one">Contact us</Link>
                    <Link to="/about" className="theme-btn btn-style-two">Learn more</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-title centered">
            <div className="title">Our Services</div>
            <h3>We are here to fight against any <br /> violance with <span>experience</span></h3>
          </div>
          
          <div className="row clearfix">
            {services.map((service, index) => (
              <div key={index} className="services-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className={`icon ${service.icon}`}></span>
                  </div>
                  <h4><Link to="/services">{service.title}</Link></h4>
                  <div className="text">{service.description}</div>
                  <Link to="/services" className="read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="image-layer" style={{ backgroundImage: 'url(/images/resource/about-1.jpg)' }}></div>
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
              </div>
            </div>
            
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
                  <p>Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dignissimmi quis neque interdum.</p>
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
              768: { slidesPerView: 2 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="text">{testimonial.text}</div>
                    <div className="author-info">
                      <h5>{testimonial.name}</h5>
                      <div className="designation">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-title">
            <div className="title">Latest News</div>
            <h3>Learn something more from <br /> our latest <span>news</span></h3>
          </div>
          
          <div className="row clearfix">
            {blogPosts.map((post) => (
              <div key={post.id} className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li><span className="fa fa-calendar"></span>{post.date}</li>
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
