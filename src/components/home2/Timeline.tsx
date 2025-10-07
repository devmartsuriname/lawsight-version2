/**
 * Timeline Component
 * Displays company journey milestones
 */

export default function Timeline() {
  const milestones = [
    { year: '2012', title: 'Elected Chairman of NPS', text: 'Dr. Rusland became the leader of the National Party of Suriname, guiding the party through critical political transitions and building a strong foundation for community-centered governance.' },
    { year: '2015', title: 'National Assembly Member', text: 'Elected to represent Paramaribo District in the National Assembly, championing transparent governance and advocating for economic development and social programs.' },
    { year: '2020', title: 'Re-elected NPS Chairman', text: 'Continued leadership of the National Party with renewed focus on youth empowerment, infrastructure development, and strengthening democratic institutions.' },
    { year: '2025', title: 'Vice President of Suriname', text: 'Assumed office alongside President Jennifer Geerlings-Simons, committed to inclusive governance, economic opportunity, and building a prosperous future for all Surinamese citizens.' },
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
