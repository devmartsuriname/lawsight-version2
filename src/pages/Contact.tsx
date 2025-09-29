import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

interface FormData {
  firstname: string;
  email: string;
  topic: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    email: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // TODO: Replace with actual API endpoint (e.g., Resend, EmailJS, or custom backend)
      // For now, this is a mock submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ firstname: '', email: '', topic: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | LawSight Law HTML Template</title>
        <meta name="description" content="Get in touch with LawSight legal professionals" />
        <meta property="og:title" content="Contact | LawSight" />
        <meta property="og:description" content="Get in touch with LawSight legal professionals" />
      </Helmet>

      <PageTitle title="Contact" breadcrumbs={[{ label: 'Contact' }]} />

      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="map-section">
          <div className="map-outer">
            <div
              className="map-canvas"
              data-zoom="12"
              data-lat="-37.817085"
              data-lng="144.955631"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Envato"
              data-icon-path="/images/icons/map-marker.png"
              data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
            ></div>
          </div>
        </div>

        <div className="container">
          <div className="inner-container">
            <h2>
              Contact our support guys or make appointment <br /> with <span>our consultan</span>
            </h2>
            <div className="row clearfix">
              {/* Info Column */}
              <div className="info-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="text">
                    Please contact us using the information below. For additional information on
                    our management consulting services, please visit the appropriate page on our
                    site.
                  </div>
                  <ul className="list-style-six">
                    <li>
                      <span className="icon fa fa-building"></span> 131 Dartmouth Street <br />{' '}
                      Boston, Massachusetts 02116 <br /> United States
                    </li>
                    <li>
                      <span className="icon fa fa-fax"></span> +1 617 572 2000
                    </li>
                    <li>
                      <span className="icon fa fa-envelope-o"></span>support@lawsight.com
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form Column */}
              <div className="form-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="contact-form">
                    <form onSubmit={handleSubmit} id="contact-form">
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          placeholder="Full name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <select
                          className="custom-select-box"
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                        >
                          <option value="">Select topic</option>
                          <option value="Topic One">Topic One</option>
                          <option value="Topic Two">Topic Two</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="write.."
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <button type="submit" className="theme-btn btn-style-one" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>

                      {submitMessage && (
                        <div className={`alert ${submitMessage.includes('error') ? 'alert-danger' : 'alert-success'}`}>
                          {submitMessage}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        className="contact-info-section"
        style={{ backgroundImage: 'url(/images/background/5.jpg)' }}
      >
        <div className="container">
          <div className="row clearfix">
            <div className="column col-lg-4 col-md-6 col-sm-12">
              <h4>United Kingdom</h4>
              <ul className="list-style-seven">
                <li>
                  <span className="icon flaticon-map-1"></span> 49488 Avenida Obregon, <br /> La
                  Quinta, CA 92253
                </li>
                <li>
                  <span className="icon flaticon-call-answer"></span> +1-(281)-813 926 <br />{' '}
                  +1-(281)-813 612
                </li>
                <li>
                  <span className="icon fa fa-envelope-o"></span>support@lawsight.com.uk
                </li>
              </ul>
            </div>
            <div className="column col-lg-4 col-md-6 col-sm-12">
              <h4>Australia</h4>
              <ul className="list-style-seven">
                <li>
                  <span className="icon flaticon-map-1"></span> 13/1 Dixon Street, Sydney <br />{' '}
                  NSW 2000
                </li>
                <li>
                  <span className="icon flaticon-call-answer"></span> +1-(281)-813 926 <br />{' '}
                  +1-(281)-813 612
                </li>
                <li>
                  <span className="icon fa fa-envelope-o"></span>support@lawsight.com.uk
                </li>
              </ul>
            </div>
            <div className="column col-lg-4 col-md-6 col-sm-12">
              <h4>Netherlands</h4>
              <ul className="list-style-seven">
                <li>
                  <span className="icon flaticon-map-1"></span> Nieuwe Leliestraat 27-HS <br />{' '}
                  101J Amsterdam
                </li>
                <li>
                  <span className="icon flaticon-call-answer"></span> +1-(281)-813 926 <br />{' '}
                  +1-(281)-813 612
                </li>
                <li>
                  <span className="icon fa fa-envelope-o"></span>support@lawsight.com.uk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
