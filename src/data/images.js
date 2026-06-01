import logo from '../assets/mrs-logo.jpeg';
import hospitalExterior from '../assets/unnamed.webp';
import hospitalBuilding from '../assets/hero.png';
import consultationRoom from '../assets/unnamed (1).webp';
import waitingArea from '../assets/unnamed (2).webp';
import patientRoom from '../assets/2024-12-31.webp';
import eyeCare from '../assets/eye.jpeg';
import opticalShop from '../assets/opticals.jpeg';
import drRajkumar from '../assets/WhatsApp Image 2026-06-01 at 13.17.05.jpeg';
import hospitalSign from '../assets/WhatsApp Image 2026-06-01 at 13.17.06.jpeg';
import drPriyanka from '../assets/WhatsApp Image 2026-06-01 at 13.17.07.jpeg';
import receptionDesk from '../assets/WhatsApp Imarecege 2026-06-01 at 13.17.07.jpeg';

export const images = {
  logo,
  hero: hospitalExterior,
  heroAlt: hospitalBuilding,
  hospitalSign,
  reception: receptionDesk,
  consultation: consultationRoom,
  waiting: waitingArea,
  patientRoom,
  eyeCare,
  opticalShop,
};

export const doctorImages = {
  'dr-rajkumar': drRajkumar,
  'dr-priyanka': drPriyanka,
};

export const galleryImages = [
  {
    src: hospitalExterior,
    alt: 'MRS Child & Eye Care Hospital building in Puliyangudi, Tamil Nadu',
    caption: 'Our Hospital',
  },

  {
    src: consultationRoom,
    alt: 'Pediatric and eye consultation room at MRS Hospital Puliyangudi',
    caption: 'Consultation Room',
  },
  {
    src: waitingArea,
    alt: 'Spacious patient waiting area at child hospital in Puliyangudi',
    caption: 'Waiting Area',
  },
  {
    src: patientRoom,
    alt: 'Clean inpatient and vaccination care room at MRS Hospital',
    caption: 'Patient Care Room',
  },
  {
    src: receptionDesk,
    alt: 'Reception desk with registration and baby weighing scale at MRS Hospital',
    caption: 'Reception',
  },
  {
    src: eyeCare,
    alt: 'Eye specialist performing examination with slit lamp at eye hospital Puliyangudi',
    caption: 'Eye Examination',
  },
  {
    src: opticalShop,
    alt: 'Optical section with spectacles display at MRS Eye Care Hospital',
    caption: 'Optical Section',
  },
];

export const facilityImages = {
  reception: receptionDesk,
  consultation: consultationRoom,
  vaccination: patientRoom,
  pharmacy: hospitalSign,
  waiting: waitingArea,
  optical: opticalShop,
  equipment: eyeCare,
};
