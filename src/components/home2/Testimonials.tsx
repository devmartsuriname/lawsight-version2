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
    <section className="testimonial-section py-[var(--section-padding)] bg-[color:var(--color-bg-white)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="section-title text-center mb-[var(--spacing-2xl)]">
          <div className="title text-[color:var(--color-primary)] text-[length:var(--font-size-sm)] uppercase tracking-wider mb-[var(--spacing-sm)]">Testimonial</div>
          <h3 className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h2)] font-[var(--font-weight-bold)]">Clients are very satisfied <br /> to work with <span className="text-[color:var(--color-primary)]">us</span></h3>
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
                <div className="inner-box p-[var(--spacing-xl)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)] bg-[color:var(--color-bg-white)]">
                  <div className="text text-[color:var(--color-text-secondary)] text-[length:var(--font-size-base)] leading-[var(--line-height-relaxed)] mb-[var(--spacing-lg)]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean tor massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                  <div className="author-post">
                    <div className="author-inner flex items-center gap-[var(--spacing-md)]">
                      <div className="image w-16 h-16 rounded-full overflow-hidden border-2 border-[color:var(--color-border)]"><img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" /></div>
                      <div>
                        <h3 className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-lg)] font-[var(--font-weight-bold)]">{testimonial.name}</h3>
                        <div className="designation text-[color:var(--color-text-secondary)] text-[length:var(--font-size-sm)]">{testimonial.role}</div>
                      </div>
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
