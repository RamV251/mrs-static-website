import SEO from '../components/SEO';
import FacilityCard from '../components/FacilityCard';
import { facilities } from '../data/facilities';
import '../styles/pages.css';

const TITLE = 'Hospital Facilities | Child & Eye Hospital Puliyangudi';
const DESCRIPTION =
  'Modern hospital facilities in Puliyangudi — consultation rooms, vaccination room, pharmacy, waiting area, optical section, and medical equipment at MRS Child & Eye Care Hospital.';

export default function Facilities() {
  return (
    <>
      <SEO title={TITLE} description={DESCRIPTION} path="/facilities" />
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Hospital Facilities</h1>
          <p className="page-header__subtitle">
            Explore our child hospital and eye care clinic facilities — designed for
            comfort, safety, and professional care in Puliyangudi.
          </p>
        </div>
      </div>

      <section className="section" aria-label="Hospital facilities gallery">
        <div className="container facilities-grid">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} {...facility} />
          ))}
        </div>
      </section>
    </>
  );
}
