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
    start: 'March 2025',
    end: 'Present',
    description: [
      'Built and integrated a reusable chatbot UI component into internal consumer applications, enabling consistent agent-based experiences across products and supporting the launch of 84.51°\'s first AI-driven product feature.',
      'Developed a FastAPI based backend service to orchestrate multi-agent workflows, handling request routing, tool invocation, and integration with internal MCP-backed services.',
      'Architected and launched Custom Data Orders, a full-stack application successfully serving 20+ CPG customers with large custom data extracts, empowering customers with greater flexibility in selecting metrics and aggregations compared to traditional syndicated data offerings.',
      'Led development of the Client Management Service API, automating onboarding, contract processing, and subaccount creation with Java Spring, JDBC, and Snowpark, reducing a two–three-day manual process to a single API-driven workflow completed in under a day.',
      'Owned development of InQueries, a shopper data-driven survey platform, building a Java Spring service to orchestrate cross-system workflows, improving processing performance by 10x.',
    ],
  },
  {
    company: '84.51°',
    title: 'Software Engineer',
    location: 'Cincinnati, Ohio',
    start: 'June 2023',
    end: 'March 2025',
    description: [
      'Designed and implemented scalable, high-throughput data pipelines in Snowflake, processing and delivering supply chain data to 70+ customers, growing adoption from fewer than 10 and supporting production workloads at scale.',
      'Developed and maintained customer-facing Java Spring API and Svelte UI, enabling reliable and performant data access across distributed systems.',
    ],
  },
  {
    company: 'University of Kentucky Transformative Learning',
    title: 'Salesforce Technician',
    location: 'Lexington, Kentucky',
    start: 'August 2021',
    end: 'May 2023',
    description: [
      'Designed and implemented full-stack tooling for the organization that booked thousands of coaching appointments.',
      'Maintained back-end systems within Salesforce for error-free use by the organization.',
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
    category: 'Backend & Languages',
    skills: [
      'Java (Spring Boot)',
      'JavaScript (React, Angular, Svelte)',
      'State Management (NgRx, Svelte Stores)',
      'Python (FastAPI)',
    ],
  },
  {
    category: 'Data & Databases',
    skills: [
      'PostgreSQL',
      'Snowflake (Snowpark, ETL pipelines)',
      'Cosmos DB (MongoDB API)',
      'SQL',
    ],
  },
  {
    category: 'Distributed Systems & Messaging',
    skills: [
      'RabbitMQ',
      'Azure Service Bus',
      'Event-driven architecture',
      'Asynchronous processing',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      'Azure (Functions, Cosmos DB, App Services, DevOps)',
      'Kubernetes',
      'Helm',
      'Docker',
      'Datadog',
      'Grafana',
      'GitHub',
      'CI/CD (GitHub Actions, Azure DevOps)',
      'Testing (JUnit, Mockito, Jest, Playwright)',
    ],
  },
  {
    category: 'AI & LLM Systems',
    skills: [
      'Agent-based architectures (Google ADK)',
      'Multi-agent orchestration',
      'MCP integrations',
      'Claude Code',
      'Cursor',
      'Copilot',
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
      'A React-based web platform hosted in Azure that connects customers with local service providers in Northern Kentucky, with plans for expansion. Helps users discover, understand, and connect with providers — from lawn care and HVAC to cleaning and detailing — in an organized, searchable way. Built and deployed a scalable API using Azure Functions and Cosmos DB supporting user interactions and data persistence, with JWT authentication for secure login and API access.',
    tech: ['React', 'Azure Functions', 'JWT', 'Cosmos DB'],
  },
  {
    name: 'NKY Pickleball League Website',
    description:
      'Created and managed a Carrd-based pickleball league website that increased league engagement and participation beyond only family and friends.',
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
