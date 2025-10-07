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
    <section className="feature-section-two py-[var(--section-padding)] bg-[color:var(--color-bg-light)]">
      <div className="container max-w-[var(--container-lg)]">
        <div className="inner-container">
          <div className="row clearfix">
            {milestones.map((milestone, index) => (
              <div key={index} className="feature-block-two col-lg-3 col-md-6 col-sm-12 px-[var(--spacing-md)]">
                <div className="fill-line border-l-2 border-[color:var(--color-border)] absolute h-full left-0"></div>
                <div className="inner-box pl-[var(--spacing-lg)]">
                  <div className="year text-[color:var(--color-primary)] text-[length:var(--font-size-h2)] font-[var(--font-weight-bold)] mb-[var(--spacing-sm)]">{milestone.year}</div>
                  <h3 className="text-[color:var(--color-text-primary)] text-[length:var(--font-size-h4)] font-[var(--font-weight-bold)] mb-[var(--spacing-sm)]">{milestone.title}</h3>
                  <div className="text text-[color:var(--color-text-secondary)] text-[length:var(--font-size-base)] leading-[var(--line-height-relaxed)]">{milestone.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
