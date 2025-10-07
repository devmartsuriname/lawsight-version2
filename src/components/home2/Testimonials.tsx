/**
 * Testimonials Component
 * Client testimonials carousel
 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    { name: 'Andrew Rob', role: 'Former Developer', image: '/images/resource/author-3.jpg' },
    { name: 'Nelli Jhonson', role: 'Former Developer', image: '/images/resource/author-4.jpg' },
    { name: 'Andrew Rob', role: 'Former Developer', image: '/images/resource/author-3.jpg' },
    { name: 'Nelli Jhonson', role: 'Former Developer', image: '/images/resource/author-4.jpg' },
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
}
