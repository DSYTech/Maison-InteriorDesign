import {
  Home,
  Building2,
  Hammer,
  LayoutGrid,
  Sofa,
  Box,
} from 'lucide-react';

export const services = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    description:
      'Bespoke home designs that reflect your lifestyle, from intimate apartments to expansive estates.',
    icon: Home,
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description:
      'Elevated workspaces and retail environments that embody your brand and enhance productivity.',
    icon: Building2,
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description:
      'Complete transformations that honor architectural heritage while introducing modern luxury.',
    icon: Hammer,
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description:
      'Intelligent layouts that maximize flow, function, and the natural character of every room.',
    icon: LayoutGrid,
  },
  {
    id: 'furniture',
    title: 'Furniture Selection',
    description:
      'Curated pieces from global artisans and premium brands, tailored to your aesthetic vision.',
    icon: Sofa,
  },
  {
    id: 'visualization',
    title: '3D Visualization',
    description:
      'Photorealistic renderings that bring your design to life before a single wall is touched.',
    icon: Box,
  },
];

export default services;
