import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function AppointmentBooking() {
  return (
    <>
      <Helmet>
        <title>Book an Appointment | Office of the Vice President</title>
        <meta name="description" content="Schedule a meeting with the Office of the Vice President. Request appointments for consultations, community events, and official meetings." />
      </Helmet>

      <PageTitle 
        title="Book an Appointment" 
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Book Appointment' }
        ]} 
      />

      <section className="contact-page-section">
        <div className="container">
          <div className="row clearfix">
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="section-title">
                  <h2>Schedule Your <span>Appointment</span></h2>
                  <div className="text">Please fill out the form below to request an appointment with the Office of the Vice President. Our team will review your request and contact you within 48 hours to confirm availability.</div>
                </div>

                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="appointment-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="username" placeholder="Your Name *" required />
                      </div>
                      
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Email Address *" required />
                      </div>
                      
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="tel" name="phone" placeholder="Phone Number *" required />
                      </div>
                      
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="organization" placeholder="Organization (Optional)" />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select name="appointment_type" className="custom-select-box" required>
                          <option value="">Select Appointment Type *</option>
                          <option value="consultation">General Consultation</option>
                          <option value="community">Community Initiative</option>
                          <option value="business">Business Matter</option>
                          <option value="policy">Policy Discussion</option>
                          <option value="media">Media Interview</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="date" name="preferred_date" placeholder="Preferred Date *" required />
                      </div>
                      
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" placeholder="Please describe the purpose of your appointment *" required></textarea>
                      </div>
                      
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                          <span className="txt">Submit Request</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="section-title">
                  <h4>Appointment <span>Guidelines</span></h4>
                </div>
                
                <ul className="list-style-two">
                  <li><span className="icon flaticon-signs"></span>
                    <strong>Response Time</strong>
                    We typically respond within 48 hours
                  </li>
                  <li><span className="icon flaticon-clock-1"></span>
                    <strong>Office Hours</strong>
                    Monday - Friday, 9:00 AM - 5:00 PM
                  </li>
                  <li><span className="icon flaticon-pin-1"></span>
                    <strong>Location</strong>
                    Office of the Vice President, Paramaribo
                  </li>
                  <li><span className="icon flaticon-envelope"></span>
                    <strong>Email</strong>
                    appointments@vicepresidentoffice.sr
                  </li>
                  <li><span className="icon flaticon-technology"></span>
                    <strong>Phone</strong>
                    +597 XXX-XXXX
                  </li>
                </ul>

                <div className="text" style={{ marginTop: '30px' }}>
                  <strong>Important Note:</strong> For urgent matters, please contact our office directly by phone. Standard appointments are scheduled on a first-come, first-served basis based on availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
