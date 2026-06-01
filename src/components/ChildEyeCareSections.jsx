import { Link } from 'react-router-dom';
import { images } from '../data/images';
import ResponsiveImage from './ResponsiveImage';
import '../styles/home-sections.css';

export default function ChildEyeCareSections() {
  return (
    <>
      <section
        className="section specialty specialty--child"
        aria-labelledby="child-care-heading"
      >
        <div className="container specialty__grid">
          <ResponsiveImage
            src={images.patientRoom}
            alt="Pediatric care and child hospital inpatient room at MRS Hospital Puliyangudi"
            className="specialty__image"
          />
          <div className="specialty__content">
            <h2 id="child-care-heading">Child Care &amp; Pediatric Hospital</h2>
            <p>
              Our pediatric hospital in Puliyangudi offers newborn care, well baby
              clinic, vaccination, fever clinic, asthma management, and adolescent
              health. Families from Tenkasi, Sankarankovil, and Kadayanallur choose
              MRS as their trusted child specialist clinic.
            </p>
            <Link to="/services#pediatric" className="btn btn--primary">
              Pediatric Services
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section specialty specialty--eye"
        aria-labelledby="eye-care-heading"
      >
        <div className="container specialty__grid specialty__grid--reverse">
          <ResponsiveImage
            src={images.eyeCare}
            alt="Eye specialist in Puliyangudi performing examination at MRS Eye Hospital"
            className="specialty__image"
          />
          <div className="specialty__content">
            <h2 id="eye-care-heading">Eye Care &amp; Eye Hospital</h2>
            <p>
              Visit our eye hospital in Puliyangudi for comprehensive eye
              examination, refraction, cataract screening, diabetic eye evaluation,
              and children&apos;s eye care. We are a leading eye specialist destination
              for patients from Tenkasi and Vasudevanallur.
            </p>
            <Link to="/services#ophthalmology" className="btn btn--primary">
              Eye Care Services
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section specialty specialty--consult"
        aria-labelledby="consult-heading"
      >
        <div className="container specialty__grid">
          <ResponsiveImage
            src={images.opticalShop}
            alt="Optical section and consultation at eye care hospital in Puliyangudi"
            className="specialty__image"
          />
          <div className="specialty__content">
            <h2 id="consult-heading">Consultation &amp; Optical Section</h2>
            <p>
              Book a general consultation at our clinic in Puliyangudi with
              experienced doctors in a clean, modern environment. Our optical
              section offers spectacles and vision aids after professional eye
              examinations.
            </p>
            <Link to="/doctors" className="btn btn--outline">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
