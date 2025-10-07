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
  );
}
