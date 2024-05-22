import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  azure,
  csharp,
  eslint,
 kubernetes,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'DevOps Lead',
      company: 'Virgin Money',
      image: import('@/assets/logos/google-logo.jpg'),
      dates: [new Date('2020-02'), null],
      description: `
        - Architected and deployed RPA to automate cash ISAs, saving the company
        - Improved build times by deploying A
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [azure(), kubernetes(), typescript(), nx(), firebase()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Senior DevOps Engineerr',
      company: 'Maritech',
      image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2019-04'), new Date('2020-02')],
      description: `
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), kubernetes(), chakraUi(), eslint()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Junior front-end developer',
      company: 'GitLab',
      image: import('@/assets/logos/gitlab-logo.png'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
