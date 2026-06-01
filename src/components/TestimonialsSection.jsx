import { testimonials } from '../data/homeServices';
import SectionHeader from './SectionHeader';
import '../styles/home-sections.css';

export default function TestimonialsSection() {
  return (
    <section
      className="section testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <SectionHeader
          id="testimonials-heading"
          title="What Families Say"
          subtitle="Trusted as a leading child hospital in Puliyangudi and eye care clinic for Tenkasi patients."
        />

        <ul className="testimonials__grid">
          {testimonials.map(({ quote, author, service }) => (
            <li key={author}>
              <blockquote className="testimonial-card">
                <p>&ldquo;{quote}&rdquo;</p>
                <footer>
                  <cite>{author}</cite>
                  <span>{service}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
