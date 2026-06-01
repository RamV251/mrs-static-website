import { images } from './images';
import { doctorImages } from './images';

export const homeServices = [
  {
    id: 'child-care',
    title: 'Child Care',
    description:
      'Complete pediatric care at our child hospital in Puliyangudi—newborn care, well baby clinic, growth assessment, and adolescent health for families in Tenkasi and nearby areas.',
    image: doctorImages['dr-rajkumar'],
    imageAlt:
      'Child care and pediatric inpatient room at MRS Child Hospital Puliyangudi',
    link: '/services#pediatric',
  },
  {
    id: 'eye-care',
    title: 'Eye Care',
    description:
      'Expert eye specialist services including comprehensive eye examination, refraction, cataract screening, and children\'s eye care at our eye hospital in Puliyangudi.',
    image: images.eyeCare,
    imageAlt:
      'Eye specialist examination at MRS Eye Hospital in Puliyangudi Tamil Nadu',
    link: '/services#ophthalmology',
  },
  {
    id: 'vaccination',
    title: 'Vaccination',
    description:
      'Safe immunization and vaccination services for infants and children, supporting healthy growth for families across Puliyangudi and Tenkasi.',
    image: images.patientRoom,
    imageAlt: 'Vaccination and child immunization services at MRS Hospital',
    link: '/services#pediatric',
  },
];

export const whyChooseUs = [
  {
    title: 'Experienced Doctors',
    description:
      'Qualified pediatrician and eye specialist with proven training from leading medical institutions in Tamil Nadu.',
  },
  {
    title: 'Modern Facilities',
    description:
      'Clean consultation rooms, optical section, vaccination area, and diagnostic equipment for child and eye care.',
  },
  {
    title: 'Friendly Care',
    description:
      'A warm, family-focused environment where children, parents, and elderly patients feel comfortable and cared for.',
  },
  {
    title: 'Affordable Treatment',
    description:
      'Quality healthcare that remains accessible for families in Puliyangudi, Tenkasi, Sankarankovil, and surrounding towns.',
  },
  {
    title: 'Emergency Support',
    description:
      '24×7 emergency services—trusted as a reliable hospital in Puliyangudi when your family needs urgent care.',
  },
];

export const testimonials = [
  {
    quote:
      'We visited MRS Hospital from Tenkasi for our child\'s fever. Dr. Rajkumar was patient, clear, and caring. Truly the best child hospital experience we have had.',
    author: 'Parent from Tenkasi',
    service: 'Pediatric Care',
  },
  {
    quote:
      'Dr. Priyanka explained my mother\'s eye problem very well. The optical section has good frames too. Highly recommend this eye hospital in Puliyangudi.',
    author: 'Family from Puliyangudi',
    service: 'Eye Care',
  },
  {
    quote:
      'Clean waiting area, easy appointment system, and friendly staff at reception. A professional clinic in Puliyangudi we trust for vaccinations.',
    author: 'Parent from Sankarankovil',
    service: 'Vaccination',
  },
];
