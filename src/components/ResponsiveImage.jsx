export default function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
}) {
  if (!src) {
    return (
      <div
        className={`image-placeholder ${className}`.trim()}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' } : {})}
    />
  );
}
