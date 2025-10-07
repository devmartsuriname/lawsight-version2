import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { siteInfo } from '@/data/siteInfo';
import { useStickyHeader } from '@/hooks/useStickyHeader';

export default function Header2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isSticky = useStickyHeader();

  const isActive = (href?: string, children?: any[]) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href && href !== '/' && location.pathname === href) return true;
    if (children) {
      return children.some((child) => child.href === location.pathname);
    }
    return false;
  };

  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-two">
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="clearfix">
              {/* Top Left */}
              <div className="top-left pull-left clearfix">
                <ul className="info-list">
                  <li>
                    <span className="icon flaticon-phone-call"></span>
                    <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a>
                  </li>
                  <li>
                    <span className="icon flaticon-email-1"></span>
                    <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                  </li>
                </ul>
              </div>

              {/* Top Right */}
              <div className="top-right pull-right clearfix">
                <ul className="social-box">
                  {siteInfo.social.facebook && (
                    <li>
                      <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </li>
                  )}
                  {siteInfo.social.twitter && (
                    <li>
                      <a href={siteInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-twitter"></span>
                      </a>
                    </li>
                  )}
                  {siteInfo.social.linkedin && (
                    <li>
                      <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </li>
                  )}
                  {siteInfo.social.instagram && (
                    <li>
                      <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-instagram"></span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container clearfix">
              {/* Logo Box */}
              <div className="pull-left logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo.png" alt="LawSight" title="LawSight" />
                  </Link>
                </div>
              </div>

              {/* Nav Outer */}
              <div className="nav-outer pull-left clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className={`navbar-collapse collapse clearfix ${isMobileMenuOpen ? 'show' : ''}`}
                  >
                    <ul className="navigation clearfix">
                      {navigationItems.map((item, index) => (
                        <li
                          key={index}
                          className={`${item.children ? 'dropdown' : ''} ${
                            isActive(item.href, item.children) ? 'current' : ''
                          }`}
                        >
                          {item.href ? (
                            <Link to={item.href}>{item.label}</Link>
                          ) : (
                            <a href="#">{item.label}</a>
                          )}
                          {item.children && (
                            <ul>
                              {item.children.map((child, childIndex) => (
                                <li
                                  key={childIndex}
                                  className={location.pathname === child.href ? 'current' : ''}
                                >
                                  <Link to={child.href || '#'}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Options Box */}
              <div className="options-box pull-right clearfix">
                {/* Search Box */}
                <div className="search-box-btn">
                  <span
                    className="icon flaticon-search"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  ></span>
                </div>

                {/* Nav Toggler */}
                <div
                  className="nav-toggler"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <button className="hidden-bar-opener">
                    <span className="icon flaticon-menu-2"></span>
                  </button>
                </div>

                {/* Button Box */}
                <div className="btn-box">
                  <Link to="/contact" className="theme-btn btn-style-two">
                    <span className="txt">Get Free Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${isSticky ? 'fixed-header animated slideInDown' : ''}`}>
          <div className="auto-container clearfix">
            {/* Logo */}
            <div className="logo pull-left">
              <Link to="/" title="">
                <img src="/images/logo-small.png" alt="" title="" />
              </Link>
            </div>

            {/* Right Col */}
            <div className="pull-right">
              {/* Main Menu */}
              <nav className="main-menu">
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    {navigationItems.map((item, index) => (
                      <li
                        key={index}
                        className={`${item.children ? 'dropdown' : ''} ${
                          isActive(item.href, item.children) ? 'current' : ''
                        }`}
                      >
                        {item.href ? (
                          <Link to={item.href}>{item.label}</Link>
                        ) : (
                          <a href="#">{item.label}</a>
                        )}
                        {item.children && (
                          <ul>
                            {item.children.map((child, childIndex) => (
                              <li
                                key={childIndex}
                                className={location.pathname === child.href ? 'current' : ''}
                              >
                                <Link to={child.href || '#'}>{child.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="icon flaticon-multiply"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="/images/logo-2.png" alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer">
              <ul className="navigation clearfix">
                {navigationItems.map((item, index) => (
                  <li key={index} className={item.children ? 'dropdown' : ''}>
                    {item.href ? (
                      <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ) : (
                      <a href="#">{item.label}</a>
                    )}
                    {item.children && (
                      <ul>
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.href || '#'}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                {siteInfo.social.facebook && (
                  <li>
                    <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.twitter && (
                  <li>
                    <a href={siteInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.linkedin && (
                  <li>
                    <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.instagram && (
                  <li>
                    <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>

        {/* Search Popup */}
        <div className={`search-popup ${isSearchOpen ? 'open' : ''}`}>
          <div className="color-layer"></div>
          <button className="close-search" onClick={() => setIsSearchOpen(false)}>
            <span className="flaticon-multiply"></span>
          </button>
          <form method="post" action="/blog">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search Here"
                required
              />
              <button type="submit">
                <i className="flaticon-search"></i>
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* Hidden Sidebar */}
      <>
        <div
          className={`hidden-bar ${isSidebarOpen ? 'visible-sidebar' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <section className={`hidden-bar right-align ${isSidebarOpen ? 'visible-sidebar' : ''}`}>
          <div className="hidden-bar-closer" onClick={() => setIsSidebarOpen(false)}>
            <button className="btn">
              <i className="fa fa-close"></i>
            </button>
          </div>

          <div className="hidden-bar-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/images/sidebar-logo.png" alt="Logo" />
              </Link>
            </div>

            <div className="side-info">
              <h3>Contact Info</h3>
              <ul className="contact-info-list">
                <li>
                  <span className="icon flaticon-phone-call"></span>
                  <strong>Call Us</strong>
                  <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a>
                </li>
                <li>
                  <span className="icon flaticon-email-1"></span>
                  <strong>Email Address</strong>
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </li>
                <li>
                  <span className="icon flaticon-maps-and-flags"></span>
                  <strong>Address</strong>
                  {siteInfo.address}
                </li>
              </ul>
            </div>

            <div className="social-box">
              <h3>Social Links</h3>
              <ul className="social-links clearfix">
                {siteInfo.social.facebook && (
                  <li>
                    <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.twitter && (
                  <li>
                    <a href={siteInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.linkedin && (
                  <li>
                    <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                )}
                {siteInfo.social.instagram && (
                  <li>
                    <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="appointment-box">
              <h3>Get Appointment</h3>
              <Link to="/contact" className="theme-btn btn-style-two">
                <span className="txt">Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
