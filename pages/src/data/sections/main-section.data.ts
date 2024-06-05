import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Gurdip Sira',
  role: 'DevOps Lead',
  details: [
    { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'gurdip.sira@gmail.com', url: 'mailto:mark.freeman.dev@gmail.com' },
    { label: 'From', value: 'London, England' },
    { label: 'Salary range', value: '100  000 - 110 000 GBP' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'gurdip.sira@gmail.com' },
    { label: 'LinkedIn', value: '/in/gurdipsira', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/gurdips5', url: 'https://github.com' },
    { label: 'Website', value: 'https://gurdipsira.dev', url: '/', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-GurdipSira.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
