import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';
import '../styles/pages.css';

const TITLE = 'Our Doctors | Child & Eye Specialist in Puliyangudi | MRS Hospital';
const DESCRIPTION =
  'Meet Dr. M. Rajkumar (child specialist) and Dr. S. Priyanka (eye specialist) at MRS Child & Eye Care Hospital — trusted doctors for pediatric and eye care in Puliyangudi and Tenkasi.';

export default function Doctors() {
  return (
    <>
      <SEO title={TITLE} description={DESCRIPTION} path="/doctors" />
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Doctors in Puliyangudi</h1>
          <p className="page-header__subtitle">
            Experienced child specialist and eye specialist serving families as the
            best hospital in Puliyangudi and a trusted clinic for Tenkasi patients.
          </p>
        </div>
      </div>

      <section className="section" aria-label="Doctor profiles">
        <div className="container doctors-grid">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </section>
    </>
  );
}
