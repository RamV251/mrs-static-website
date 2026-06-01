import { doctorImages } from './images';

export const doctors = [
  {
    id: 'dr-rajkumar',
    name: 'Dr. M. Rajkumar',
    qualification: 'MBBS, MD Pediatrics',
    role: 'Pediatrician & Child Specialist',
    image: doctorImages['dr-rajkumar'],
    imageAlt:
      'Dr. M. Rajkumar, pediatrician and child specialist at MRS Child & Eye Care Hospital in Puliyangudi',
    education: [
      { degree: 'MBBS', institution: 'Madras Medical College, Chennai' },
      {
        degree: 'MD Pediatrics',
        institution: 'Government Tirunelveli Medical College',
      },
    ],
    registrationNumber: '112508',
    experience: null,
  },
  {
    id: 'dr-priyanka',
    name: 'Dr. S. Priyanka',
    qualification: 'MBBS, DNB Ophthalmology',
    role: 'Eye Specialist & Ophthalmologist',
    image: doctorImages['dr-priyanka'],
    imageAlt:
      'Dr. S. Priyanka, eye specialist and ophthalmologist at MRS Eye Hospital Puliyangudi',
    education: [
      { degree: 'MBBS', institution: 'Madras Medical College, Chennai' },
      {
        degree: 'DNB Ophthalmology',
        institution: 'Dr. Agarwal Eye Institute, Chennai',
      },
    ],
    experience: '2 Years at Dr. Agarwal Eye Institute, Tirunelveli',
    registrationNumber: '125501',
  },
];
