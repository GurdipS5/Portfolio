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
    { label: 'Email', value: 'gurdip.sira@gmail.com' },
    { label: 'LinkedIn', value: '/in/gurdipsira', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/gurdips5', url: 'https://github.com' },
    { label: 'Website', value: 'https://gurdipsira.dev', url: '/', fullRow: true },
  ],
  description:
    'I am a dedicated and passionate DevOps Lead with a track record of driving seamless integration between development and operations. With over ten years of experience in the field, I specialize in implementing robust CI/CD pipelines, automating infrastructure, and fostering a collaborative DevOps culture within teams.',
  tags: [{ name: 'Not o pen for work' }, { name: 'Available for mentoring' }, { name: 'Working on side projects and certs.' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-GurdipSira.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
