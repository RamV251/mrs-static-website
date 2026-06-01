import { Link } from 'react-router-dom';
import {
  HOSPITAL_NAME,
  TAGLINE,
  PHONE_LINK,
  WHATSAPP_LINK,
  SERVICE_AREAS,
} from '../data/site';
import { images } from '../data/images';
import ResponsiveImage from './ResponsiveImage';
import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <img
          src={images.hero}
          alt=""
          className="hero__bg-image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content-wrap">
        <div className="hero__card">
          <ResponsiveImage
            src={images.logo}
            alt={`${HOSPITAL_NAME} logo`}
            className="hero__logo"
            priority
          />
          <p className="hero__badge">Best Child &amp; Eye Care Hospital in Puliyangudi</p>
          <h1 id="hero-heading" className="hero__title">
            {HOSPITAL_NAME}
          </h1>
          <p className="hero__tagline">{TAGLINE}</p>
          <p className="hero__areas">
            Serving families in {SERVICE_AREAS.slice(0, 4).join(', ')}, and nearby
            towns including Tenkasi.
          </p>

          <div className="hero__actions">
            <a href={PHONE_LINK} className="btn btn--primary">
              Call Now
            </a>
            <Link to="/services" className="btn btn--outline btn--on-dark">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
