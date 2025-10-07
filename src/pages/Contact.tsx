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
        <title>Contact | Office of the Vice President | Republic of Suriname</title>
        <meta name="description" content="Contact the Office of the Vice President of the Republic of Suriname" />
        <meta property="og:title" content="Contact | Office of the Vice President" />
        <meta property="og:description" content="Contact the Office of the Vice President of the Republic of Suriname" />
      </Helmet>

      <PageTitle title="Contact" breadcrumbs={[{ label: 'Contact' }]} />

      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="map-section">
          <div className="map-outer">
            <div
              className="map-canvas"
              data-zoom="12"
              data-lat="5.8520"
              data-lng="-55.2038"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Office of the Vice President"
              data-icon-path="/images/icons/map-marker.png"
              data-content="Presidential Palace, Onafhankelijkheidsplein, Paramaribo, Suriname<br><a href='mailto:office@president.gov.sr'>office@president.gov.sr</a>"
            ></div>
          </div>
        </div>

        <div className="container">
          <div className="inner-container">
            <h2>
              Contact the Office of the Vice President <br /> of the <span>Republic of Suriname</span>
            </h2>
            <div className="row clearfix">
              {/* Info Column */}
              <div className="info-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="text">
                    Office of the Vice President of the Republic of Suriname. Serving the nation with
                    integrity, vision, and commitment to progress for all citizens.
                  </div>
                  <ul className="list-style-six">
                    <li>
                      <span className="icon fa fa-building"></span> Presidential Palace <br />{' '}
                      Onafhankelijkheidsplein <br /> Paramaribo, Suriname
                    </li>
                    <li>
                      <span className="icon fa fa-fax"></span> +597 472-000
                    </li>
                    <li>
                      <span className="icon fa fa-envelope-o"></span>office@president.gov.sr
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
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Appointment Request">Appointment Request</option>
                          <option value="Community Program">Community Program</option>
                          <option value="Press Inquiry">Press Inquiry</option>
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

    </>
  );
}
