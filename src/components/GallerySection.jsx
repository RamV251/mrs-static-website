import { Link } from 'react-router-dom';
import { galleryImages } from '../data/images';
import ResponsiveImage from './ResponsiveImage';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function GallerySection() {
  return (
    <section
      className="section gallery-section"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <SectionHeader
          id="gallery-heading"
          title="Hospital & Clinic Gallery"
          subtitle="Explore our child hospital and eye care facilities in Puliyangudi."
        />

        <ul className="gallery-section__grid">
          {galleryImages.map(({ src, alt, caption }) => (
            <li key={caption}>
              <figure className="gallery-figure">
                <ResponsiveImage src={src} alt={alt} className="gallery-figure__img" />
                <figcaption>{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="section-cta">
          <Link to="/facilities" className="btn btn--outline">
            View All Facilities
          </Link>
        </p>
      </div>
    </section>
  );
}
