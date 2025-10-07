/**
 * Counter Stats Component
 * Animated statistics display
 */

import { CounterBox } from '@/components/CounterBox';

export default function CounterStats() {
  const stats = [
    { icon: 'fa fa-briefcase', count: 1825, title: 'Completed works' },
    { icon: 'flaticon-teamwork', count: 532, title: 'Satisfied clients' },
    { icon: 'flaticon-ribbon-badge-award', count: 69, title: 'Winning awards' },
    { icon: 'flaticon-multiple-users-silhouette', count: 32, title: 'Team members' },
  ];

  return (
    <section className="counter-section">
      <div className="container">
        <div className="fact-counter style-three">
          <div className="row clearfix">
            {stats.map((stat, index) => (
              <div key={index} className="column counter-column col-lg-3 col-md-6 col-sm-12">
                <CounterBox end={stat.count} suffix="+" title={stat.title} delay={index * 300} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
