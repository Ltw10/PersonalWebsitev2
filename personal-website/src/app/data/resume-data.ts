/**
 * Resume content for Luke Williams.
 */

export interface Job {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  description: string[];
  url?: string;
}

export interface Education {
  school: string;
  location: string;
  /** Short date range for display, e.g. "2019 – 2023" */
  yearRange: string;
  start: string;
  end: string;
  /** Degree abbreviation + major, e.g. "B.S. Computer Science" */
  degreeLine: string;
  major?: string;
  minor?: string;
  honorsPathway?: string;
  /** GPA value only, e.g. "4.0" — displayed as "GPA: 4.0" */
  gpa?: string;
  highlights?: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  tech?: string[];
}

export interface Involvement {
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  description: string[];
}

export const contact = {
  name: 'Luke Williams',
  email: 'luke.williams.0207@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luke-williams-t102701',
  github: 'https://github.com/Ltw10',
  resumePdfUrl: '/assets/nov_2025_resume.pdf',
};

export const about = {
  tagline: 'Senior Software Engineer',
  bio: [
    'I design and ship data-driven products, build scalable APIs, and create tools that connect people. From growing enterprise data platforms to launching community-focused projects, I\'m passionate about turning ideas into real, usable systems.',
    'Outside of work, I spend my time training for a marathon, playing in local pickleball leagues, following the Cincinnati Bengals, and managing my fantasy football teams.',
  ],
};

/** Most recent first. Timeline alternates left/right by index (0 = right, 1 = left, etc.). */
export const jobs: Job[] = [
  {
    company: '84.51°',
    title: 'Senior Software Engineer',
    location: 'Cincinnati, Ohio',
    start: 'June 2023',
    end: 'Present',
    description: [
      'Designing and implementing scalable data pipelines in Snowflake, transforming and delivering supply chain data to over 50 customers, growing adoption from fewer than 10.',
      'Developing and maintaining customer-facing Java Spring API and Svelte UI, enabling seamless data access and improved user experience.',
      'Leading the development of the Client Management Service API, leveraging Java Spring and Snowpark to automate client onboarding, contract processing, and subaccount creation.',
      'Architecting and launching the Custom Data Orders experience, empowering customers with greater flexibility in selecting metrics and aggregations compared to traditional syndicated data offerings.',
    ],
  },
  {
    company: 'University of Kentucky Transformative Learning',
    title: 'Salesforce Technician',
    location: 'Lexington, Kentucky',
    start: 'August 2021',
    end: 'May 2023',
    description: [
      'Designed and implemented a UI tool for the organization that booked thousands of coaching appointments.',
      'Maintained back-end systems within the Salesforce for error-free use by the organization.',
    ],
  },
  {
    company: 'JPMorgan Chase',
    title: 'Software Engineer Intern',
    location: 'Columbus, Ohio',
    start: 'June 2022',
    end: 'August 2022',
    description: [
      'Programmed a chatbot using Rasa framework to answer FAQs and assist users with application support.',
      'Created microservices using Java Spring framework to retrieve data from an API endpoint and store in an Oracle DB.',
    ],
  },
  {
    company: 'Total Quality Logistics',
    title: 'Application Development Intern',
    location: 'Cincinnati, Ohio',
    start: 'January 2022',
    end: 'May 2022',
    description: [
      'Developed in-house WinForms app using the .NET tech stack that allowed employees to manage over 10k loads a day.',
      'Wrote stored procedures and queries in SQL for manipulation and retrieval of company data in databases.',
    ],
  },
];

export const education: Education[] = [
  {
    school: 'University of Kentucky',
    location: 'Lexington, KY',
    yearRange: '2019 – 2023',
    start: 'August 2019',
    end: 'May 2023',
    degreeLine: 'B.S. Computer Science',
    minor: 'Mathematics',
    honorsPathway: 'Seam Honors Pathway',
    gpa: '4.0',
  },
];

/** Skills grouped for display. Flattened into a single list for the pill section. */
export const skillsByCategory: { category: string; skills: string[] }[] = [
  {
    category: 'Software Development and Architecture',
    skills: [
      'Java (Spring Boot)',
      'JavaScript (React, Angular, Svelte)',
      'State Management (NgRx, Svelte Stores)',
      'Python',
      'SQL',
    ],
  },
  {
    category: 'Cloud, Data, & Infrastructure',
    skills: [
      'Snowflake (Snowpark, ETL pipelines)',
      'Azure (Functions, Cosmos DB, App Services, DevOps)',
      'PostgreSQL',
      'CI/CD (GitHub Actions, Azure DevOps)',
      'Testing (JUnit, Mockito, Jest, Playwright)',
    ],
  },
  {
    category: 'Personal',
    skills: [
      'Technical leadership',
      'Event planning',
      'Object-oriented programming',
      'Agile methodology',
      'Lean System Certified',
    ],
  },
];

export const skills: string[] = skillsByCategory.flatMap((c) => c.skills);

export const projects: Project[] = [
  {
    name: 'NKY Connect',
    description:
      'A web application for the Northern Kentucky region that helps users discover, understand, and connect with local service providers — from lawn care and HVAC to cleaning and detailing. The app presents services in an organized, searchable way so users can see who offers what, what’s included, and how to contact or engage with providers. Built with a React frontend (routing, components) and an Azure Functions backend; APIs handle provider accounts and service listings, with JWT authentication for secure login and API access.',
    tech: ['React', 'Azure Functions', 'JWT', 'Cosmos DB'],
  },
  {
    name: 'NKY Pickleball League Website',
    description:
      'Created and manage a pickleball league website using Carrd that allowed the league to enhance its engagement and expand participation beyond only family and friends.',
    url: 'https://www.nkypickleballleague.com/',
    tech: ['Carrd'],
  },
];

export const involvement: Involvement[] = [
  {
    role: 'Leader',
    organization: '84.51° In The Know',
    start: 'November 2023',
    end: 'November 2024',
    description: [
      'Organized and facilitated the widely attended "Ask the Execs" session, moderating discussions with the CEO and executive leadership to address employee-submitted questions.',
      'Managed end-to-end event logistics, including speaker coordination, technical support, and hybrid accessibility, ensuring smooth execution of both virtual and in-person sessions.',
    ],
  },
];
