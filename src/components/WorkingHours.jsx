import '../styles/working-hours.css';

const eyeOpd = [
  { label: 'Daily', value: '10:00 AM – 1:30 PM' },
  { label: 'Saturday', value: '10:00 AM – 1:30 PM, 5:30 PM – 8:30 PM' },
  { label: 'Sunday', value: 'Closed' },
];

const pediatricOpd = [
  { label: 'Morning', value: '7:00 AM – 8:00 AM' },
  { label: 'Evening', value: '6:00 PM – 9:00 PM' },
  { label: 'Sunday', value: 'Closed' },
];

function HoursCard({ title, accent, children }) {
  return (
    <article className={`hours-card hours-card--${accent}`}>
      <h3 className="hours-card__title">{title}</h3>
      {children}
    </article>
  );
}

function HoursList({ items }) {
  return (
    <dl className="hours-list">
      {items.map(({ label, value }) => (
        <div key={label} className="hours-list__row">
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function WorkingHours() {
  return (
    <section className="working-hours section" aria-labelledby="hours-heading">
      <div className="container">
        <header className="section__header">
          <h2 id="hours-heading" className="section__title">
            Working Hours
          </h2>
          <p className="section__subtitle">
            Plan your visit with our OPD schedules and round-the-clock emergency
            support.
          </p>
        </header>

        <div className="working-hours__grid">
          <HoursCard title="Emergency Services" accent="emergency">
            <p className="hours-card__highlight">24 × 7</p>
            <p className="hours-card__note">
              Emergency care available at all times. Call our emergency line for
              immediate assistance.
            </p>
          </HoursCard>

          <HoursCard title="Eye OPD" accent="eye">
            <HoursList items={eyeOpd} />
          </HoursCard>

          <HoursCard title="Pediatric OPD" accent="pediatric">
            <HoursList items={pediatricOpd} />
          </HoursCard>
        </div>
      </div>
    </section>
  );
}
