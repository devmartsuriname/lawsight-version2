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
                <div className="title">About the Vice President</div>
                <h3>Dedicated to <span>service</span> and community development</h3>
              </div>
              
              <div className="text">
                <p>Dr. Gregory Allan Rusland currently serves as <span>Vice President of the Republic of Suriname</span> since July 2025, alongside President Jennifer Geerlings-Simons. A dedicated public servant with deep roots in Surinamese politics, Dr. Rusland has served as Chairman of the National Party of Suriname (NPS) since 2012 and has represented the Paramaribo District in the National Assembly since 2015.</p>
                <p>With extensive experience in public policy, natural resources management, and community development, Dr. Rusland champions initiatives that prioritize <span>education, economic opportunity</span>, and social equity for all citizens. His leadership focuses on bridging the gap between government and citizens through transparent, accessible, and responsive programs.</p>
              </div>
              <div className="row clearfix">
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-style-one">
                    <li>Community-centered governance</li>
                    <li>Transparent public service</li>
                  </ul>
                </div>
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-style-one">
                    <li>Youth empowerment programs</li>
                    <li>Economic development initiatives</li>
                  </ul>
                </div>
              </div>
              <div className="question">Contact the office <a href="tel:+1234567890">for inquiries</a> <strong>+1 (234) 567-8900</strong> <span className="or">or</span> <strong>+1 (234) 567-8901</strong></div>
              <div className="signature">
                <div className="signature-img"><img src="/images/icons/signature.png" alt="Signature"/></div>
                <h5>Dr. Gregory Allan Rusland</h5>
                <div className="designation">(Vice President)</div>
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
                      <CounterBox end={15} suffix="+" title="Years of Leadership" delay={0} />
                    </div>
                    
                    <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                      <CounterBox end={6} title="Community Programs" delay={300} />
                    </div>
                    
                    <div className="column counter-column col-lg-4 col-md-12 col-sm-12">
                      <CounterBox end={10} title="Districts Served" delay={600} />
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
