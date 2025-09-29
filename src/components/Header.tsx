import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { useStickyHeader } from '@/hooks/useStickyHeader';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isSticky = useStickyHeader();
  const location = useLocation();

  const isActive = (href?: string) => {
    if (!href) return false;
    return location.pathname === href;
  };

  return (
    <>
      {/* Main Header */}
      <header className="main-header">
        <div className="header-upper">
          <div className="container">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo.png" alt="LawSight" title="LawSight" />
                  </Link>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      aria-expanded={isMobileMenuOpen}
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className={`navbar-collapse collapse clearfix ${isMobileMenuOpen ? 'show' : ''}`}
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      {navigationItems.map((item, index) => (
                        <li
                          key={index}
                          className={`${item.children ? 'dropdown' : ''} ${isActive(item.href) ? 'current' : ''}`}
                        >
                          {item.href ? (
                            <Link to={item.href}>{item.label}</Link>
                          ) : (
                            <a href="#">{item.label}</a>
                          )}
                          {item.children && (
                            <ul>
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link to={child.href!}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>

                <div className="outer-box">
                  <div className="search-box-outer">
                    <div className="dropdown">
                      <button
                        className="search-box-btn dropdown-toggle"
                        type="button"
                        onClick={() => setSearchOpen(!searchOpen)}
                        aria-haspopup="true"
                        aria-expanded={searchOpen}
                      >
                        <span className="fa fa-search"></span>
                      </button>
                      {searchOpen && (
                        <ul className="dropdown-menu pull-right search-panel show">
                          <li className="panel-outer">
                            <div className="form-container">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                  <input
                                    type="search"
                                    name="field-name"
                                    placeholder="Search Here"
                                    required
                                  />
                                  <button type="submit" className="search-btn">
                                    <span className="fa fa-search"></span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="nav-toggler">
                    <div
                      className="nav-btn hidden-bar-opener"
                      onClick={() => setIsSidebarOpen(true)}
                    >
                      <span className="flaticon-menu"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${isSticky ? 'fixed-header animated slideInDown' : ''}`}>
          <div className="container clearfix">
            <div className="logo pull-left">
              <Link to="/" className="img-responsive">
                <img src="/images/logo-small.png" alt="LawSight" title="LawSight" />
              </Link>
            </div>

            <div className="right-col pull-right">
              <nav className="main-menu navbar-expand-md">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <div
                  className={`navbar-collapse collapse clearfix ${isMobileMenuOpen ? 'show' : ''}`}
                >
                  <ul className="navigation clearfix">
                    {navigationItems.map((item, index) => (
                      <li
                        key={index}
                        className={`${item.children ? 'dropdown' : ''} ${isActive(item.href) ? 'current' : ''}`}
                      >
                        {item.href ? (
                          <Link to={item.href}>{item.label}</Link>
                        ) : (
                          <a href="#">{item.label}</a>
                        )}
                        {item.children && (
                          <ul>
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link to={child.href!}>{child.label}</Link>
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
      </header>

      {/* Form Back Drop */}
      {isSidebarOpen && (
        <div className="form-back-drop" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Hidden Sidebar */}
      <section className={`hidden-bar right-align ${isSidebarOpen ? 'visible-sidebar' : ''}`}>
        <div className="hidden-bar-closer">
          <button onClick={() => setIsSidebarOpen(false)}>
            <span className="fa fa-remove"></span>
          </button>
        </div>

        <div className="hidden-bar-wrapper">
          <div className="inner-box">
            <div className="logo">
              <Link to="/">
                <img src="/images/sidebar-logo.png" alt="LawSight" />
              </Link>
            </div>
            <div className="text">
              Lorem ipsum, or lipsum as it is sometimes the known, is dummy text used in laying
              out print, graphic or web designs. The passage
            </div>
            <ul className="list-style-four">
              <li>
                <span className="icon flaticon-house"></span> <strong>Collins Street</strong>West
                Victoria 8007 Australia
              </li>
              <li>
                <span className="icon flaticon-phone-call"></span> <strong>Call us!</strong>
                124-3254-325
              </li>
              <li>
                <span className="icon flaticon-talk"></span>
                <strong>Mail address</strong>info@domain.com
              </li>
            </ul>
            <div className="lower-box">
              <ul className="social-icons">
                <li className="facebook">
                  <a href="#">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li className="pinterest">
                  <a href="#">
                    <span className="fa fa-pinterest-p"></span>
                  </a>
                </li>
                <li className="vimeo">
                  <a href="#">
                    <span className="fa fa-vimeo"></span>
                  </a>
                </li>
              </ul>
              <a href="#" className="theme-btn buy-btn">
                Buy LawSight today!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
