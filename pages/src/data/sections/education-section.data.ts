import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Business and Management (Computing)',
      institution: 'Brunel University',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2004.09'), new Date('2007.07')],
      description: 'Bachelors degree. Specialization in software development.',
      links: [website({ url: '#' })],
    },

  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
