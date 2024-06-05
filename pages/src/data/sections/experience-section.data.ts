import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  azure,
  azuredevops,
  aws,
  csharp,
  helm,
  kubernetes,
  openai,
  octopusdeploy,
  proget,
  sonarqube,
  teamcity,
 terraform

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
      image: import('@/assets/logos/virginmoney.jpg'),
      dates: [new Date('2020-02'), null],
      description: `
        - Led a seamless migration of 50+ applications to AWS/Azure, resulting in a 30% reduction in infrastructure costs and improved scalability.
        - Manage a fleet of Kubernetes clusters, running AI and Machine Learning models, to detect fraud. This has led to earlier detection and prevention of customer fraud.
        - Developed common Terraform modules, reducing code duplication and time to release and leading to an increase in developer productivity and code standardisation, reducing bugs and time to deployment.
        - Worked as a DevOps Lead for the Dynamics 365 team, to improve their release management processes, automate TOIL and instil a DevOps culture.
        - Built a Research and Development function to look at innovation and improving our digital products. This includes using AI, Machine Learning and Data Engineering in Azure.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [azure(), kubernetes(), helm(), openai(), terraform(), ],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Senior DevOps Engineerr',
      company: 'Maritech',
      image: import('@/assets/logos/sea.jpg'),
      dates: [new Date('2019-04'), new Date('2020-02')],
      description: `
        - Integrated Veracode into Azure DevOps CICD pipelines, thereby improving our security posture, compliance and ability to win new customers
        - Championed an AppSec program with developers, to implement secure development practices, resulting in less CI failures.
        - Created Terraform modules for an Akamai CDN/DDOS deployment, to protect against bot attacks
        - Deployed a comprehensive monitoring and alerting system using Prometheus and Grafana, reducing system downtime by 40% through proactive incident management.
        - Implemented a robust CI/CD pipeline using Azure DevOps, which reduced the deployment frequency from monthly to daily, enhancing product delivery speed and reliability.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), kubernetes(), helm(), azuredevops(), octopusdeploy(), proget(), teamcity() ]
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Senior DevOps Engineer',
      company: 'Reed Technology',
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
        tags: [aws(), azuredevops() ]
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
