import { StaticImageData } from 'next/image';
import photo1 from './photos/apples.jpg';
import photo2 from './photos/grapes.jpg';
import photo3 from './photos/guava.jpg';
import photo4 from './photos/orange.jpeg';
import photo5 from './photos/pineapple.jpg';
import photo6 from './photos/pomegranate.jpg';
import photo7 from './photos/watermelon.jpg';

export type FruitsImage = {
  photoId: string;
  name: string;
  src: StaticImageData;
  location: string;
};

const fruitsImages: FruitsImage[] = [
  {
    photoId: '1',
    name: 'Apple',
    src: photo1,
    location: 'Kashmir',
  },
  {
    photoId: '2',
    name: 'Grapes',
    src: photo2,
    location: 'Pune',
  },
  {
    photoId: '3',
    name: 'Guava',
    src: photo3,
    location: 'Nagpur',
  },
  {
    photoId: '4',
    name: 'Orange',
    src: photo4,
    location: 'Nagpur',
  },
  {
    photoId: '5',
    name: 'Pineapple',
    src: photo5,
    location: 'Banaglore',
  },
  {
    photoId: '6',
    name: 'Pomegranate',
    src: photo6,
    location: 'Odisha',
  },
  {
    photoId: '7',
    name: 'Watermelon',
    src: photo7,
    location: 'Tamil Nadu',
  },
];

export default fruitsImages;
