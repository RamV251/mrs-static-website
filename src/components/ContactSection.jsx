import {
  HOSPITAL_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  OPTICAL_PHONE_DISPLAY,
  OPTICAL_PHONE_LINK,
  WHATSAPP_LINK,
  MAPS_URL,
  MAPS_EMBED,
  ADDRESS,
} from '../data/site';
import SectionHeader from './SectionHeader';
import '../styles/contact.css';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionHeader
          id="contact-heading"
          title="Contact Our Hospital in Puliyangudi"
          subtitle="Call, WhatsApp, or visit MRS Child & Eye Care Hospital. We welcome patients from Tenkasi and surrounding areas."
        />

        <div className="contact__grid">
          <article className="contact__card">
            <h3 className="contact__card-title">Hospital</h3>
            <p className="contact__hospital-name">{HOSPITAL_NAME}</p>
            <address className="contact__address">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
              <br />
              {ADDRESS.state}
            </address>
          </article>

          <article className="contact__card">
            <h3 className="contact__card-title">Optical Section</h3>
            <p>
              <a href={OPTICAL_PHONE_LINK} className="contact__phone contact__phone--sm">
                {OPTICAL_PHONE_DISPLAY}
              </a>
            </p>
            <p className="contact__note">Spectacles and optical enquiries</p>
            <a href={OPTICAL_PHONE_LINK} className="btn btn--outline">
              Call Optical
            </a>
          </article>

          <article className="contact__card">
            <h3 className="contact__card-title">Phone &amp; Emergency</h3>
            <p>
              <a href={PHONE_LINK} className="contact__phone">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="contact__note">24/7 emergency hospital support</p>
            <div className="contact__actions">
              <a href={PHONE_LINK} className="btn btn--primary">
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </article>

          <article className="contact__card contact__card--wide">
            <h3 className="contact__card-title">Working Hours Summary</h3>
            <ul className="contact__hours-summary">
              <li>
                <strong>Emergency:</strong> 24 × 7
              </li>
              <li>
                <strong>Eye OPD:</strong> Daily 10:00 AM – 1:30 PM; Saturday
                evening 5:30 PM – 8:30 PM
              </li>
              <li>
                <strong>Pediatric OPD:</strong> Morning 7:00 AM – 8:00 AM;
                Evening 6:00 PM – 9:00 PM
              </li>
              <li>
                <strong>Sunday:</strong> OPD closed (emergency available)
              </li>
            </ul>
          </article>
        </div>

        <div className="contact__map-wrap">
          <h3 className="contact__map-title">Find Us on Google Maps</h3>
          <div className="contact__map">
            <iframe
              title={`${HOSPITAL_NAME} location on Google Maps, Puliyangudi`}
              src={MAPS_EMBED}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={MAPS_URL}
            className="btn btn--outline contact__directions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
