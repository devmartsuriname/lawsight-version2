/**
 * Hero Section Component
 * Homepage banner with background image and content slider
 */

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  return (
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
                    <img src="/images/main-slider/content-image-1.png" alt="Vice President Dr. Gregory Allan Rusland" loading="lazy" />
                  </div>
                </div>
                <div className="content-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="wow fadeInUp" data-wow-delay="0ms">Committed to <br /> Suriname's <br /> Prosperity</h2>
                    <div className="text wow fadeInUp" data-wow-delay="300ms">The Office of the Vice President is dedicated to transparent governance, economic development, and building a brighter future for all citizens of Suriname.</div>
                    <Link to="/contact" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="600ms" aria-label="Contact the Vice President's Office">Contact us today</Link>
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
                    <img src="/images/main-slider/2.jpg" alt="Office of the Vice President of Suriname" loading="lazy" />
                  </div>
                </div>
                <div className="content-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="wow fadeInUp" data-wow-delay="0ms">Serving <br /> the People <br /> of Suriname</h2>
                    <div className="text wow fadeInUp" data-wow-delay="300ms">Through inclusive policies, community engagement, and strategic initiatives, we work together to strengthen democracy and create opportunities for every Surinamese citizen.</div>
                    <Link to="/contact" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="600ms" aria-label="Contact the Vice President's Office">Contact us today</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
