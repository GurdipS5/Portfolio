import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0078D4',
  url: 'https://azure.com/',
});

export const blazor = createSkillFactory({
  name: 'Blazor',
  icon: 'simple-icons:blazor',
  iconColor: '#0078D4',
  url: 'https://azure.com/',
});

export const csharp = createSkillFactory({
  name: 'CSharp',
  icon: 'simple-icons:csharp',
  iconColor: '#512BD4',
  url: 'https://azure.com/',
});

export const dotnet = createSkillFactory({
  name: 'Dot NET',
  icon: 'simple-icons:dotnet',
  iconColor: '#512BD4',
  url: 'https://azure.com/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const Git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#4B32C3',
  url: 'https://git-scm.com/',
});


export const helm = createSkillFactory({
  name: 'Helm',
  icon: 'simple-icons:helm',
  iconColor: '#0F1689',
  url: 'https://helm.com/',
});


export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '##326CE5',
  url: 'https://eslint.org/',
});
export const octopusdeploy = createSkillFactory({
  name: 'Octopus Deploy',
  icon: 'simple-icons:octopusdeploy',
  iconColor: '#143055',
  url: 'https://octopusdeploy.com',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const pulumi = createSkillFactory({
  name: 'Pulumi',
  icon: 'simple-icons:pulumi',
  iconColor: '#8A3391',
  url: 'https://pulumi.com',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const teamcity = createSkillFactory({
  name: 'Teamcity',
  icon: 'simple-icons:teamcity',
  iconColor: '#000000',
  url: 'https://jetbrains.com/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#844FBA',
  url: 'https://tailwindcss.com/',
});


export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});