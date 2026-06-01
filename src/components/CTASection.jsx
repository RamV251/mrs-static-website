import { Link } from 'react-router-dom';
import { PHONE_LINK } from '../data/site';
import '../styles/cta.css';

export default function CTASection() {
  return (
    <section className="cta section" aria-labelledby="cta-heading">
      <div className="container cta__inner">
        <h2 id="cta-heading" className="cta__title">
          Quality Care for Your Child&apos;s Health and Vision
        </h2>
        <p className="cta__text">
          Book a consultation with our pediatric and eye care specialists today.
        </p>
        <div className="cta__actions">
          <a href={PHONE_LINK} className="btn btn--primary">
            Call Now
          </a>
          <Link to="/doctors" className="btn btn--secondary">
            Meet Our Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}
