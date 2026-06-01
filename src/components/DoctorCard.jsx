import '../styles/cards.css';
import ResponsiveImage from './ResponsiveImage';

export default function DoctorCard({
  name,
  qualification,
  role,
  image,
  imageAlt,
  education,
  experience,
  registrationNumber,
}) {
  return (
    <article className="doctor-card">
      <ResponsiveImage
        src={image}
        alt={imageAlt}
        className="doctor-card__image"
      />
      <div className="doctor-card__body">
        <h2 className="doctor-card__name">{name}</h2>
        {role && <p className="doctor-card__role">{role}</p>}
        <p className="doctor-card__qualification">{qualification}</p>

        <h3 className="doctor-card__subheading">Education</h3>
        <ul className="doctor-card__education">
          {education.map(({ degree, institution }) => (
            <li key={degree}>
              <strong>{degree}:</strong> {institution}
            </li>
          ))}
        </ul>

        {experience && (
          <>
            <h3 className="doctor-card__subheading">Experience</h3>
            <p>{experience}</p>
          </>
        )}

        <p className="doctor-card__registration">
          <strong>Registration Number:</strong> {registrationNumber}
        </p>
      </div>
    </article>
  );
}
