export default function SectionHeader({ id, title, subtitle, align = 'center' }) {
  return (
    <header
      className={`section-header section-header--${align}`}
      {...(id ? { id } : {})}
    >
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  );
}
