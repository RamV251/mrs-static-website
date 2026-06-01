import { Link } from 'react-router-dom';
import { homeServices } from '../data/homeServices';
import ResponsiveImage from './ResponsiveImage';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function ServicesOverview() {
  return (
    <section
      className="section services-overview"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <SectionHeader
          id="services-heading"
          title="Healthcare Services in Puliyangudi"
          subtitle="Child hospital, eye hospital, and family clinic services for Puliyangudi, Tenkasi, and nearby communities."
        />

        <ul className="services-overview__grid">
          {homeServices.map(
            ({ id, title, description, image, imageAlt, link }) => (
              <li key={id}>
                <article className="service-highlight">
                  <ResponsiveImage
                    src={image}
                    alt={imageAlt}
                    className="service-highlight__image"
                  />
                  <div className="service-highlight__body">
                    <h3 className="service-highlight__title">{title}</h3>
                    <p>{description}</p>
                    <Link to={link} className="service-highlight__link">
                      Learn more
                    </Link>
                  </div>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
