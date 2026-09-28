export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  minSalary: number;
  posted: string;
  skills: string[];
  match: number;
  about: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  companyDescription: string;
}

const STANDARD_BENEFITS = [
  'Flexible work environment',
  'Learning and development budget',
  'Health insurance',
  'Paid time off'
];

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Senior level',
    salary: '₹15 LPA - ₹20 LPA',
    minSalary: 15,
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'Design systems'],
    match: 95,
    about: 'We are looking for a Senior Frontend Engineer to build modern, scalable and engaging web experiences.',
    responsibilities: [
      'Lead frontend architecture for the product',
      'Build and maintain reusable UI components',
      'Develop accessible and responsive interfaces',
      'Work closely with designers and backend engineers'
    ],
    requirements: [
      'Strong experience with frontend development',
      'Good knowledge of Angular and TypeScript',
      'Experience building scalable web applications',
      'Strong understanding of HTML and CSS'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Northwind Labs builds modern software experiences for teams that work with data and technology. The company focuses on creating scalable products with a strong emphasis on design, accessibility, and user experience.'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Vertex Labs',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid level',
    salary: '₹10 LPA - ₹16 LPA',
    minSalary: 10,
    posted: '4 days ago',
    skills: ['Figma', 'Prototyping', 'UI/UX'],
    match: 87,
    about: 'We are looking for a Product Designer to create intuitive and engaging experiences for our users.',
    responsibilities: [
      'Create user flows, wireframes and prototypes',
      'Collaborate with product managers and engineers',
      'Design intuitive and accessible user interfaces',
      'Contribute to the product design system'
    ],
    requirements: [
      'Strong understanding of UI/UX design',
      'Good knowledge of Figma and prototyping',
      'Experience with user-centered design',
      'Strong visual and communication skills'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Vertex Labs creates digital products with a focus on user experience, thoughtful design and scalable product solutions.'
  },
  {
    id: 3,
    title: 'Staff Design Engineer',
    company: 'Cloud Co.',
    location: 'London',
    type: 'Full-time',
    experience: 'Senior level',
    salary: '₹18 LPA - ₹25 LPA',
    minSalary: 18,
    posted: '1 week ago',
    skills: ['CSS', 'Design', 'Leadership'],
    match: 82,
    about: 'We are looking for a Staff Design Engineer to combine strong engineering skills with design thinking to build high-quality digital experiences.',
    responsibilities: [
      'Lead design engineering initiatives',
      'Build scalable and reusable interface systems',
      'Collaborate with designers and engineering teams',
      'Guide frontend architecture and implementation'
    ],
    requirements: [
      'Strong frontend engineering experience',
      'Strong understanding of CSS and design systems',
      'Experience leading technical projects',
      'Good knowledge of modern web technologies'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Cloud Co. builds technology products for modern teams with an emphasis on scalable engineering and thoughtful user experiences.'
  },
  {
    id: 4,
    title: 'Frontend Engineer, Platform',
    company: 'Orchid Systems',
    location: 'Austin',
    type: 'Full-time',
    experience: 'Entry level',
    salary: '₹12 LPA - ₹18 LPA',
    minSalary: 12,
    posted: '5 days ago',
    skills: ['Angular', 'JavaScript', 'HTML', 'CSS'],
    match: 85,
    about: 'We are looking for a Frontend Engineer to build reliable and scalable interfaces for our platform products.',
    responsibilities: [
      'Develop responsive frontend applications',
      'Build reusable Angular components',
      'Integrate frontend applications with APIs',
      'Work with backend engineers to deliver platform features'
    ],
    requirements: [
      'Good knowledge of Angular and JavaScript',
      'Strong understanding of HTML and CSS',
      'Experience working with web APIs',
      'Understanding of responsive web development'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Orchid Systems develops platform technologies and software solutions for businesses looking to build scalable digital products.'
  },
  {
    id: 5,
    title: 'Content UI Engineer',
    company: 'HarborTech',
    location: 'Remote',
    type: 'Contract',
    experience: 'Mid level',
    salary: '₹9 LPA - ₹14 LPA',
    minSalary: 9,
    posted: '3 days ago',
    skills: ['Vue', 'CSS', 'JavaScript'],
    match: 76,
    about: 'We are looking for a Content UI Engineer to create engaging and responsive interfaces for content-driven products.',
    responsibilities: [
      'Build responsive content interfaces',
      'Develop reusable UI components',
      'Collaborate with content and design teams',
      'Improve usability and accessibility across the product'
    ],
    requirements: [
      'Good knowledge of JavaScript and CSS',
      'Experience building responsive interfaces',
      'Understanding of modern frontend frameworks',
      'Strong attention to UI details'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'HarborTech builds digital content experiences with a focus on accessible, engaging and responsive interfaces.'
  },
  {
    id: 6,
    title: 'Product Design Intern',
    company: 'Lighthouse',
    location: 'Bengaluru',
    type: 'Internship',
    experience: 'Entry level',
    salary: '₹4 LPA - ₹8 LPA',
    minSalary: 4,
    posted: '6 days ago',
    skills: ['Research', 'Figma', 'Wireframes'],
    match: 74,
    about: 'We are looking for a Product Design Intern to support the team in creating thoughtful and user-friendly digital experiences.',
    responsibilities: [
      'Assist with user research and design activities',
      'Create wireframes and prototypes',
      'Support the product design team',
      'Participate in design reviews and feedback sessions'
    ],
    requirements: [
      'Basic understanding of UI/UX design',
      'Familiarity with Figma',
      'Interest in user research and product design',
      'Good communication and collaboration skills'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Lighthouse creates digital products and provides opportunities for emerging designers to learn and contribute to real-world product experiences.'
  },
  {
    id: 7,
    title: 'UI Developer',
    company: 'PixelWorks',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Entry level',
    salary: '₹10 LPA - ₹14 LPA',
    minSalary: 10,
    posted: '1 day ago',
    skills: ['Angular', 'HTML', 'CSS', 'JavaScript'],
    match: 80,
    about: 'We are looking for a UI Developer to build clean, responsive and user-friendly interfaces for our web applications.',
    responsibilities: [
      'Develop responsive web interfaces',
      'Build reusable UI components',
      'Work with designers to implement visual designs',
      'Maintain and improve existing frontend features'
    ],
    requirements: [
      'Good knowledge of Angular',
      'Strong understanding of HTML and CSS',
      'Knowledge of JavaScript',
      'Understanding of responsive web design'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'PixelWorks develops web applications with a focus on clean interfaces, responsive design and practical user experiences.'
  },
  {
    id: 8,
    title: 'Backend Engineer',
    company: 'DataForge',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid level',
    salary: '₹14 LPA - ₹19 LPA',
    minSalary: 14,
    posted: '2 days ago',
    skills: ['Node.js', 'SQL', 'APIs'],
    match: 88,
    about: 'We are looking for a Backend Engineer to build reliable APIs and scalable backend services for our products.',
    responsibilities: [
      'Develop and maintain backend APIs',
      'Work with databases and SQL',
      'Build reliable and scalable backend services',
      'Collaborate with frontend engineers to integrate APIs'
    ],
    requirements: [
      'Good knowledge of Node.js',
      'Strong understanding of SQL',
      'Understanding of REST APIs',
      'Knowledge of backend application development'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'DataForge develops data-driven software solutions with a focus on reliable backend systems, APIs and scalable technology.'
  },
  {
    id: 9,
    title: 'QA Automation Engineer',
    company: 'Nimbus QA',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Entry level',
    salary: '₹7 LPA - ₹11 LPA',
    minSalary: 7,
    posted: '5 days ago',
    skills: ['Testing', 'Automation', 'SQL'],
    match: 70,
    about: 'We are looking for a QA Automation Engineer to help ensure the quality and reliability of our software products.',
    responsibilities: [
      'Develop and maintain automated test cases',
      'Execute functional and regression testing',
      'Identify and report software defects',
      'Collaborate with developers to resolve issues'
    ],
    requirements: [
      'Basic knowledge of software testing',
      'Understanding of test automation',
      'Knowledge of SQL',
      'Good problem-solving skills'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'Nimbus QA focuses on software quality and automation solutions that help teams deliver reliable digital products.'
  },
  {
    id: 10,
    title: 'UX Researcher',
    company: 'BrightPath',
    location: 'Remote',
    type: 'Contract',
    experience: 'Entry level',
    salary: '₹6 LPA - ₹10 LPA',
    minSalary: 6,
    posted: '4 days ago',
    skills: ['User research', 'Interviews', 'Figma'],
    match: 78,
    about: 'We are looking for a UX Researcher to help us understand user needs and create better digital experiences.',
    responsibilities: [
      'Conduct user interviews and research studies',
      'Analyze user feedback and research findings',
      'Create research reports and share insights',
      'Collaborate with designers and product teams'
    ],
    requirements: [
      'Basic understanding of UX research',
      'Experience with user interviews',
      'Good analytical and communication skills',
      'Familiarity with user-centered design'
    ],
    benefits: STANDARD_BENEFITS,
    companyDescription: 'BrightPath focuses on creating user-centered digital experiences through research, design and thoughtful product development.'
  }
];

const EXPERIENCE_LEVELS = ['Entry level', 'Mid level', 'Senior level'];

export function getProfileMatch(job: Job, profile: any): number {

  if (!profile || !profile.name) {
    return job.match;
  }

  let score = 0;

  // Skills match is the strongest signal of fit (up to 40 points,
  // scaled by how many of the job's required skills the profile covers)
  if (profile.skills) {

    const profileSkills = profile.skills
      .toLowerCase()
      .split(',')
      .map((skill: string) => skill.trim())
      .filter(Boolean);

    const matchingSkills = job.skills.filter((skill: string) =>
      profileSkills.some((profileSkill: string) =>
        skill.toLowerCase().includes(profileSkill) ||
        profileSkill.includes(skill.toLowerCase())
      )
    );

    score += Math.round((matchingSkills.length / job.skills.length) * 40);
  }

  // Experience match (up to 30 points). Levels are ordinal, so being one
  // level off still earns partial credit, but a two-level gap (e.g. an
  // entry-level profile against a senior role) earns nothing.
  const profileLevelIndex = EXPERIENCE_LEVELS.indexOf(profile.experience);
  const jobLevelIndex = EXPERIENCE_LEVELS.indexOf(job.experience);

  if (profileLevelIndex !== -1 && jobLevelIndex !== -1) {
    const levelGap = Math.abs(profileLevelIndex - jobLevelIndex);

    if (levelGap === 0) {
      score += 30;
    } else if (levelGap === 1) {
      score += 10;
    }
  }

  // Location match
  if (
    profile.location &&
    job.location.toLowerCase() === profile.location.toLowerCase()
  ) {
    score += 10;
  }

  // Job type match
  if (
    profile.jobType &&
    job.type === profile.jobType
  ) {
    score += 10;
  }

  // Salary match
  const profileSalary = parseInt(
    profile.salary.replace(/\D/g, '')
  );

  if (profileSalary && job.minSalary >= profileSalary) {
    score += 10;
  }

  return score;
}
