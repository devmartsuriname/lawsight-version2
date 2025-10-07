import { Link } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageTitle({
  title,
  backgroundImage = '/images/background/page-title-bg.jpg',
  breadcrumbs = [],
}: PageTitleProps) {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="content">
          <h1>{title}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : crumb.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
