/**
 * Timeline Component
 * Displays company journey milestones
 */

export default function Timeline() {
  const milestones = [
    { year: '2016', title: 'Started Journey', text: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
    { year: '2017', title: 'We employed lawyers', text: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
    { year: '2018', title: 'Winning best awards', text: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
    { year: '2019', title: 'Improved team', text: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
  ];

  return (
    <section className="feature-section-two">
      <div className="container">
        <div className="inner-container">
          <div className="row clearfix">
            {milestones.map((milestone, index) => (
              <div key={index} className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="fill-line"></div>
                <div className="inner-box">
                  <div className="year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <div className="text">{milestone.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
