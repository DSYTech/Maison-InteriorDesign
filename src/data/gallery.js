import { images } from '../utils/images';

export const galleryCategories = [
  'All',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Office',
  'Luxury Villas',
];

export const galleryItems = [
  {
    id: 1,
    title: 'Serene Living',
    category: 'Living Room',
    image: images.gallery.livingRoom,
    height: 'tall',
  },
  {
    id: 2,
    title: 'Master Retreat',
    category: 'Bedroom',
    image: images.gallery.bedroom,
    height: 'medium',
  },
  {
    id: 3,
    title: 'Chef\'s Kitchen',
    category: 'Kitchen',
    image: images.gallery.kitchen,
    height: 'short',
  },
  {
    id: 4,
    title: 'Executive Suite',
    category: 'Office',
    image: images.gallery.office,
    height: 'medium',
  },
  {
    id: 5,
    title: 'Coastal Villa',
    category: 'Luxury Villas',
    image: images.gallery.villa,
    height: 'tall',
  },
  {
    id: 6,
    title: 'Formal Dining',
    category: 'Living Room',
    image: images.gallery.dining,
    height: 'short',
  },
  {
    id: 7,
    title: 'Spa Bathroom',
    category: 'Bedroom',
    image: images.gallery.bathroom,
    height: 'medium',
  },
  {
    id: 8,
    title: 'Private Lounge',
    category: 'Living Room',
    image: images.gallery.lounge,
    height: 'tall',
  },
  {
    id: 9,
    title: 'Rooftop Terrace',
    category: 'Luxury Villas',
    image: images.gallery.terrace,
    height: 'short',
  },
];

export default galleryItems;
