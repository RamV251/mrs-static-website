import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { serviceSections } from '../data/services';
import '../styles/pages.css';

const TITLE = 'Pediatric & Eye Care Services | Hospital in Puliyangudi';
const DESCRIPTION =
  'Child hospital and eye hospital services in Puliyangudi — vaccination, newborn care, eye examination, cataract screening, cataract surgery and pediatric care for Tenkasi and nearby areas.';

export default function Services() {
  return (
    <>
      <SEO title={TITLE} description={DESCRIPTION} path="/services" />
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Healthcare Services</h1>
          <p className="page-header__subtitle">
            Comprehensive pediatric and eye care services at our hospital in Puliyangudi, providing trusted healthcare for families across Tenkasi, Sankarankovil, Kadayanallur, Vasudevanallur, Sivagiri, and nearby towns.
          </p>
        </div>
      </div>

      <section className="section" aria-label="Hospital services">
        <div className="container services-grid">
          {serviceSections.map((section) => (
            <div key={section.id} id={section.id}>
              <ServiceCard title={section.title} items={section.services} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
