import { Helmet } from 'react-helmet-async';
import {
  HOSPITAL_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from '../data/site';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = `${SITE_URL}/og-image.jpg`,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  noindex = false,
}) {
  const canonical = `${SITE_URL}${path}`;
  const robotsContent = noindex ? 'noindex, nofollow' : robots;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Hospital in Puliyangudi, Best Hospital in Puliyangudi, Child Hospital in Puliyangudi, Eye Hospital in Puliyangudi, Clinic in Puliyangudi, 24/7 Hospital in Puliyangudi, Pediatric Hospital in Puliyangudi, Eye Specialist in Puliyangudi, Hospital in Tenkasi, Child Specialist in Tenkasi, Eye Specialist in Tenkasi"
      />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={HOSPITAL_NAME} />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Puliyangudi" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${HOSPITAL_NAME} - Puliyangudi`} />
      <meta property="og:site_name" content={HOSPITAL_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${HOSPITAL_NAME} - Puliyangudi`} />
    </Helmet>
  );
}
