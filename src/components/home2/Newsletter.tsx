/**
 * Newsletter Component
 * Email subscription form
 */

export default function Newsletter() {
  return (
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
  );
}
