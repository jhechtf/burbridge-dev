// tslint:disable:no-bitwise
export enum Level {
  Master = 1,
  Expert = 1 << 1,
  Advanced = 1 << 2,
  Intermediate = 1 <<3
}
export interface Skill {
  name: string;
  level: Level;
  keywords: string[];
}

export default [{
    name: 'Web Development',
    level: Level.Master,
    keywords: [
      'HTML',
      'CSS',
      'Javascript'
    ]
  },
  {
    name: 'Front-End Frameworks',
    level: Level.Expert,
    keywords: [
      'ReactJS',
      'VueJs',
      'Angular'
    ]
  },
  {
    name: 'Back-End Systems',
    level: Level.Expert,
    keywords: [
      'Laravel',
      'Lumen',
      'Express',
      'NodeJs'
    ]
  },
  {
    name: 'Programming Languages',
    level: Level.Intermediate,
    keywords: [
      'Python',
      'Go',
      'TypeScript'
    ]
  },
  {
    name: 'Build Systems',
    level: Level.Advanced,
    keywords: [
      'Jenkins',
      'Gitlab CI'
    ]
  },
  {
    name: 'Containers / Container Deployment Systems',
    level: Level.Advanced,
    keywords: [
      'Docker',
      'Kubernetes',
      'CloudFormation',
      'Elastic Beanstalk (Multi Container setup)'
    ]
  },
  {
    name: 'HTTP Servers',
    level: Level.Expert,
    keywords: [
      'Nginx',
      'Apache2'
    ]
  },
  {
    name: 'Cloud Platforms',
    experience: Level.Advanced,
    keywords: [
      'AWS',
      'Amazon Web Services',
      'GCP',
      'Google Cloud Platform'
    ]
  }
] as Skill[];
