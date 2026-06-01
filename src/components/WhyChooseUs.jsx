import { whyChooseUs } from '../data/homeServices';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function WhyChooseUs() {
  return (
    <section
      className="section why-choose"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <SectionHeader
          id="why-heading"
          title="Why Choose MRS Hospital?"
          subtitle="The preferred 24/7 hospital in Puliyangudi for pediatric and eye care."
        />

        <ul className="why-choose__grid">
          {whyChooseUs.map(({ title, description }) => (
            <li key={title}>
              <article className="why-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
