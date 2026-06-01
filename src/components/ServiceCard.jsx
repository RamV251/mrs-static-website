import '../styles/cards.css';

export default function ServiceCard({ title, items }) {
  return (
    <article className="service-card">
      <h2 className="service-card__title">{title}</h2>
      <ul className="service-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
