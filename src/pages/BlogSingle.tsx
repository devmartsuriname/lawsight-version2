import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

const recentPosts = [
  { id: 1, image: '/images/resource/post-thumb-1.jpg', title: 'Business structured nontp frank team', date: 'July 25, 2019' },
  { id: 2, image: '/images/resource/post-thumb-2.jpg', title: 'Meetups and parties at night for every...', date: 'July 26, 2019' },
  { id: 3, image: '/images/resource/post-thumb-3.jpg', title: 'Always found him speakingas many...', date: 'July 25, 2019' },
];

export default function BlogSingle() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Helmet>
        <title>Blog Post | LawSight Law HTML Template</title>
        <meta name="description" content={`Read about ${slug}`} />
      </Helmet>

      <PageTitle
        title="Blog Detail"
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Blog Detail' }]}
      />

      <div className="sidebar-page-container">
        <div className="container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-single">
                <div className="inner-box">
                  <div className="image">
                    <img src="/images/resource/news-10.jpg" alt="Blog post" />
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li><span className="fa fa-calendar"></span>July 25, 2019</li>
                      <li><span className="fa fa-user"></span>By Admin</li>
                      <li><span className="fa fa-list"></span>Uncategorized</li>
                      <li><span className="fa fa-comment"></span>(3) Comment</li>
                    </ul>
                    <h4>Aliquam augue eros, for pulvinar et rutrum non.</h4>
                    <div className="text">
                      <p>The man, who is in a stable condition in hospital, has "potentially life-changing injuries" after the overnight attack in Garvagh, County Londonderry. He was shot in the arms and legs."What sort of men would think it is accepttable to subject a young girl to this level of brutality and violence?</p>
                      <p>"Every child has the right to feel safe and protected in their own home - how is this poor child going to sleep tonight or in coming nights? What are the long term effects on her going to be?"</p>
                      <p>"It&apos;s quite obvious the hypocrites who carried out this dreadful attack don&apos;t care at all about the children in their community. I wonder how they would feel if their own child witnessed such a level of violence?</p>
                      <p>"There is absolutely no justification for an attack like this in our communities and we must all work together to bring those responsible to justice and to stop this from happening to another child."</p>
                      <p>Earlier this month, <a href="#">the PSNI launched a hard-hitting advertisement campaign</a> aimed at changing public attitudes to paramilitary attacks.</p>
                      <div className="news-gallery">
                        <div className="row clearfix">
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img src="/images/resource/news-11.jpg" alt="" />
                            </div>
                          </div>
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img src="/images/resource/news-12.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5>A Kentucky woman who was accused last year.</h5>
                      <p>The intruders chased the girl in the house and threatened her when she hid from them, according to the PSNI Limavady Facebook page.</p>
                      <p>"She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping that the men would take it and leave her dad alone," one outraged officer wrote.</p>
                      <blockquote>
                        <div className="quote-icon flaticon-left-quote"></div>
                        <div className="quote-text">What sort of men would think it is acceptable to subject a young girl to this level of brutality and violence? an attack like this in ourcommunities and we must all work together.</div>
                      </blockquote>
                      <p>The intruders chased the girl in the house and threatened her when she hid from them, according to the PSNI Limavady Facebook page.</p>
                      <p>"She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping that the men would take it and leave her dad alone," one outraged officer wrote.</p>
                    </div>
                  </div>
                </div>
                
                {/* Post Share Options */}
                <div className="post-share-options">
                  <div className="post-share-inner clearfix">
                    <div className="pull-left post-tags"><span>Tags: </span><a href="#">Business</a> <a href="#">Life</a> <a href="#">Applin</a> <a href="#">Techniq</a></div>
                    <ul className="pull-right social-links clearfix">
                      <li className="facebook"><a href="#" className="fa fa-facebook"></a></li>
                      <li className="twitter"><a href="#" className="fa fa-twitter"></a></li>
                      <li className="google-plus"><a href="#" className="fa fa-google-plus"></a></li>
                      <li className="dribble"><a href="#" className="fa fa-dribbble"></a></li>
                    </ul>
                  </div>
                </div>
                
                {/* New Posts Navigation */}
                <div className="new-posts">
                  <div className="clearfix">
                    <a className="prev-post pull-left" href="#"><span className="fa fa-angle-double-left"></span> Previous Post</a>
                    <a className="next-post pull-right" href="#">Next Post <span className="fa fa-angle-double-right"></span></a>
                  </div>
                </div>
                
                {/* Comments Area */}
                <div className="comments-area">
                  <div className="group-title">
                    <h6>Comments</h6>
                  </div>
                  
                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb"><img src="/images/resource/author-7.jpg" alt="" /></div>
                      <div className="comment-inner clearfix">
                        <div className="comment-info clearfix"><strong>Riva Collins</strong><div className="comment-time"> November 19, 2019 at 11:00 am </div></div>
                        <div className="text">It&apos;s no secret that the digital industry is booming. From exciting startups to need ghor global and brands, companies are reaching out.</div>
                        <a className="comment-reply" href="#">Reply <span className="fa fa-angle-right"></span></a>
                      </div>
                    </div>
                  </div>

                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb"><img src="/images/resource/author-8.jpg" alt="" /></div>
                      <div className="comment-inner clearfix">
                        <div className="comment-info clearfix"><strong>Obila Doe</strong><div className="comment-time"> November 22, 2019 at 10:00 pm </div></div>
                        <div className="text">It&apos;s no secret that the digital industry is booming. From exciting startups to need ghor hmiu global and brands, companies are reaching out.</div>
                        <a className="comment-reply" href="#">Reply <span className="fa fa-angle-right"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Comment Form */}
                <div className="comment-form">
                  <div className="group-title">
                    <h6>Post A Comment</h6>
                    <div className="group-text">Your email address will not be published *</div>
                  </div>
                  <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" placeholder="your comment"></textarea>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input type="text" name="username" placeholder="name*" required />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input type="email" name="email" placeholder="email*" required />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input type="text" name="text" placeholder="website*" required />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                        <button className="theme-btn btn-style-one" type="submit" name="submit-form">Post Comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Sidebar Side */}
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar default-sidebar">
                {/* Search */}
                <div className="sidebar-widget search-box">
                  <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input type="search" name="search-field" placeholder="Enter Your Keyword..." required />
                      <button type="submit"><span className="icon fa fa-search"></span></button>
                    </div>
                  </form>
                </div>
                
                {/* Blog Category Widget */}
                <div className="sidebar-widget sidebar-blog-category">
                  <div className="sidebar-title-two">
                    <h4>Categories</h4>
                  </div>
                  <ul className="blog-cat-two">
                    <li><a href="#">Consulting <span>(3)</span></a></li>
                    <li><a href="#">Technology <span>(4)</span></a></li>
                    <li><a href="#">Life style <span>(8)</span></a></li>
                  </ul>
                </div>
                
                {/* Popular Post Widget */}
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title-two">
                    <h4>Recent News</h4>
                  </div>
                  {recentPosts.map((post) => (
                    <article key={post.id} className="post">
                      <figure className="post-thumb">
                        <img src={post.image} alt="" />
                        <Link to={`/blog/${post.id}`} className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </Link>
                      </figure>
                      <div className="text"><Link to={`/blog/${post.id}`}>{post.title}</Link></div>
                      <div className="post-info">{post.date}</div>
                    </article>
                  ))}
                </div>
                
                {/* Archive Widget */}
                <div className="sidebar-widget sidebar-blog-category archive-widget">
                  <div className="sidebar-title-two">
                    <h4>Archives</h4>
                  </div>
                  <ul className="blog-cat-two">
                    <li><a href="#">January 2019 <span>(3)</span></a></li>
                    <li><a href="#">February 2019 <span>(2)</span></a></li>
                    <li><a href="#">May 2019 <span>(6)</span></a></li>
                  </ul>
                </div>
                
                {/* Gallery Widget */}
                <div className="sidebar-widget instagram-widget">
                  <div className="sidebar-title-two">
                    <h4>Gallery</h4>
                  </div>
                  <div className="images-outer clearfix">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <figure key={num} className="image-box">
                        <a href={`/images/gallery/instagram-${num}.jpg`} className="lightbox-image">
                          <img src={`/images/gallery/instagram-${num}.jpg`} alt="" />
                        </a>
                      </figure>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <section className="subscribe-section style-two">
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
    </>
  );
}
