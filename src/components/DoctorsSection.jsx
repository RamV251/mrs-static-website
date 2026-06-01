import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import ResponsiveImage from './ResponsiveImage';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function DoctorsSection() {
  return (
    <section
      className="section doctors-section"
      id="doctors"
      aria-labelledby="doctors-heading"
    >
      <div className="container">
        <SectionHeader
          id="doctors-heading"
          title="Our Doctors"
          subtitle="Experienced child specialist and eye specialist in Puliyangudi, trusted by families from Tenkasi and beyond."
        />

        <ul className="doctors-section__grid">
          {doctors.map(
            ({ id, name, qualification, role, image, imageAlt, experience }) => (
              <li key={id}>
                <article className="doctor-preview">
                  <ResponsiveImage
                    src={image}
                    alt={imageAlt}
                    className="doctor-preview__image"
                  />
                  <div className="doctor-preview__body">
                    <h3>{name}</h3>
                    <p className="doctor-preview__role">{role}</p>
                    <p className="doctor-preview__qual">{qualification}</p>
                    {experience && (
                      <p className="doctor-preview__exp">{experience}</p>
                    )}
                  </div>
                </article>
              </li>
            ),
          )}
        </ul>

        <p className="section-cta">
          <Link to="/doctors" className="btn btn--primary">
            View Full Profiles
          </Link>
        </p>
      </div>
    </section>
  );
}
