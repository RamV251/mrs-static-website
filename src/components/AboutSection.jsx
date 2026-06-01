import { INTRO, MISSION, VISION, SERVICE_AREAS } from '../data/site';
import { images , doctorImages , galleryImages } from '../data/images';
import ResponsiveImage from './ResponsiveImage';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          id="about-heading"
          title="About MRS Hospital, Puliyangudi"
          subtitle="A trusted pediatric hospital and eye hospital for families across Tirunelveli district."
        />

        <div className="about__grid">
          <div className="about__text">
            <p className="about__lead">{INTRO}</p>
            <p>
              As one of the best hospitals in Puliyangudi, we combine child
              specialist expertise with advanced eye care under one roof—making us
              the preferred clinic in Puliyangudi for parents who also need a
              reliable eye specialist in Tenkasi and surrounding areas.
            </p>

            <div className="about__mv">
              <article>
                <h3>Our Mission</h3>
                <p>{MISSION}</p>
              </article>
              <article>
                <h3>Our Vision</h3>
                <p>{VISION}</p>
              </article>
            </div>

            <p className="about__areas">
              <strong>Areas we serve:</strong>{' '}
              {SERVICE_AREAS.join(' • ')}
            </p>
          </div>

          <ResponsiveImage
            src={galleryImages[0].src}
            alt="MRS Child and Eye Care Hospital sign with OPD and appointment details in Puliyangudi"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}
