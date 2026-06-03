import { Link } from 'react-router-dom';
import {
  HOSPITAL_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
  MAPS_URL,
  ADDRESS,
  SERVICE_AREAS,
} from '../data/site';
import { images } from '../data/images';
import '../styles/footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__block" aria-labelledby="footer-about">
          <img
            src={images.logo}
            alt=""
            className="site-footer__logo"
            width={72}
            height={72}
            loading="lazy"
            decoding="async"
          />
          <h2 id="footer-about" className="site-footer__heading">
            {HOSPITAL_NAME}
          </h2>
          <p className="site-footer__text">
            Best child hospital and eye hospital in Puliyangudi. Pediatric care,
            eye specialist consultation, vaccination, optical services, and 24/7
            emergency support for families in Tenkasi, Sankarankovil, Kadayanallur,
            Vasudevanallur, and Sivagiri.
          </p>
        </section>

        <section className="site-footer__block" aria-labelledby="footer-links">
          <h2 id="footer-links" className="site-footer__heading">
            Quick Links
          </h2>
          <ul className="site-footer__list">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-footer__block" aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="site-footer__heading">
            Contact
          </h2>
          <address className="site-footer__address">
            {ADDRESS.full}
          </address>
          <p>
            <a href={PHONE_LINK} className="site-footer__phone">
              {PHONE_DISPLAY}
            </a>
          </p>
          <div className="site-footer__buttons">
            <a href={PHONE_LINK} className="btn btn--primary btn--sm">
              Call
            </a>
            <a
              href={WHATSAPP_LINK}
              className="btn btn--whatsapp btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={MAPS_URL}
              className="btn btn--outline btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maps
            </a>
          </div>
        </section>
      </div>

      <div className="site-footer__seo">
        <div className="container">
          <p>
            <strong>Keywords:</strong> Hospital in Puliyangudi, Best Hospital in
            Puliyangudi, Child Hospital in Puliyangudi, Eye Hospital in Puliyangudi,
            Clinic in Puliyangudi, 24/7 Hospital in Puliyangudi, Pediatric Hospital
            in Puliyangudi, Eye Specialist in Puliyangudi, Hospital in Tenkasi,
            Child Specialist in Tenkasi, Eye Specialist in Tenkasi, Pediatric Care
            in Tenkasi, Eye Care Hospital in Tenkasi.
          </p>
          <p>
            <strong>Service areas:</strong> {SERVICE_AREAS.join(', ')}.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            &copy; {year} {HOSPITAL_NAME}. All rights reserved.
          </p>
          <p>
  Website designed & developed by
  <a href="https://avryon.com"> Avryon Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
