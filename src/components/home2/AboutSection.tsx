/**
 * About Section Component
 * Company information with video and counter statistics
 */

import { CounterBox } from '@/components/CounterBox';
import { Lightbox } from '@/components/Lightbox';

export default function AboutSection() {
  return (
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
  );
}
