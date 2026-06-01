import { Helmet } from 'react-helmet-async';
import {
  HOSPITAL_NAME,
  SITE_URL,
  PHONE,
  ADDRESS,
  MAPS_URL,
  DEFAULT_DESCRIPTION,
} from '../data/site';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Hospital', 'MedicalClinic', 'LocalBusiness'],
        '@id': `${SITE_URL}/#hospital`,
        name: HOSPITAL_NAME,
        alternateName: 'MRS Hospital Puliyangudi',
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        image: `${SITE_URL}/og-image.jpg`,
        description: DEFAULT_DESCRIPTION,
        telephone: `+91-${PHONE}`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.line1,
          addressLocality: 'Puliyangudi',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 9.1749,
          longitude: 77.3984,
        },
        areaServed: [
          { '@type': 'City', name: 'Puliyangudi' },
          { '@type': 'City', name: 'Tenkasi' },
          { '@type': 'City', name: 'Sankarankovil' },
          { '@type': 'City', name: 'Kadayanallur' },
          { '@type': 'City', name: 'Vasudevanallur' },
          { '@type': 'City', name: 'Sivagiri' },
        ],
        medicalSpecialty: ['Pediatrics', 'Ophthalmology'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '07:00',
            closes: '21:00',
          },
        ],
        hasMap: MAPS_URL,
        sameAs: [MAPS_URL],
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: HOSPITAL_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+91-${PHONE}`,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Tamil'],
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
