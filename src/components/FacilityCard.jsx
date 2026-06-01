import '../styles/cards.css';
import ResponsiveImage from './ResponsiveImage';

export default function FacilityCard({ title, description, imageAlt, image }) {
  return (
    <article className="facility-card">
      <ResponsiveImage
        src={image}
        alt={imageAlt}
        className="facility-card__image"
      />
      <div className="facility-card__body">
        <h2 className="facility-card__title">{title}</h2>
        <p className="facility-card__description">{description}</p>
      </div>
    </article>
  );
}
