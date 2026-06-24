import { images } from '../utils/images';

export const projects = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    location: 'Beverly Hills, CA',
    category: 'Residential',
    area: '8,500 sq ft',
    image: images.projects.villa,
    description:
      'A serene contemporary villa blending indoor-outdoor living with warm natural materials and curated art pieces.',
  },
  {
    id: 'luxury-penthouse',
    title: 'Luxury Penthouse',
    location: 'Manhattan, NY',
    category: 'Residential',
    area: '4,200 sq ft',
    image: images.projects.penthouse,
    description:
      'Skyline views meet refined minimalism in this penthouse featuring bespoke millwork and a muted luxury palette.',
  },
  {
    id: 'executive-office',
    title: 'Executive Office',
    location: 'London, UK',
    category: 'Commercial',
    area: '12,000 sq ft',
    image: images.projects.office,
    description:
      'A sophisticated corporate headquarters designed to inspire collaboration while maintaining executive elegance.',
  },
  {
    id: 'boutique-hotel',
    title: 'Boutique Hotel',
    location: 'Amalfi Coast, Italy',
    category: 'Hospitality',
    area: '28 rooms',
    image: images.projects.hotel,
    description:
      'Mediterranean charm reimagined through a lens of understated luxury and locally sourced artisan finishes.',
  },
];

export default projects;
