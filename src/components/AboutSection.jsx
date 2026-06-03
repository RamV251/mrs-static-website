import { ABOUT_TEXT, MISSION, VISION, SERVICE_AREAS } from '../data/site';
import { galleryImages } from '../data/images';
import ResponsiveImage from './ResponsiveImage';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          id="about-heading"
          title="About MRS Hospital"
          subtitle="Paediatric and eye care for families in Puliyangudi and Tirunelveli district."
        />

        <div className="about__grid">
          <div className="about__text">
            <p className="about__intro">{ABOUT_TEXT}</p>

            <div className="about__mv">
              <article className="about__mv-card">
                <h3>Our Mission</h3>
                <p>{MISSION}</p>
              </article>
              <article className="about__mv-card">
                <h3>Our Vision</h3>
                <p>{VISION}</p>
              </article>
            </div>

            <p className="about__areas">
              <span className="about__areas-label">We also welcome patients from</span>
              {SERVICE_AREAS.filter((area) => area !== 'Puliyangudi').join(', ')}.
            </p>
          </div>

          <figure className="about__media">
            <ResponsiveImage
              src={galleryImages[0].src}
              alt="MRS Child and Eye Care Hospital sign with OPD and appointment details in Puliyangudi"
              className="about__image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
