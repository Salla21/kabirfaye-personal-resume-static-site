// ---------------------------------------------------------------------------
// CV CONTENT — edit this file to update the website.
// Everything the site renders comes from here. No need to touch components.
// ---------------------------------------------------------------------------

export interface LanguageProficiency {
  name: string;
  level: string; // e.g. "Fluent", "Intermediate"
  /** 0–100 for the proficiency bar */
  percent: number;
}

export interface ContactLinks {
  email: string;
  linkedin: string;
  github: string;
  /** Path to a PDF resume placed in /public, or an external URL. Leave empty to hide. */
  pdf?: string;
}

export interface Header {
  name: string;
  title: string;
  location: string;
  contacts: ContactLinks;
  languages: LanguageProficiency[];
}

export interface Role {
  title: string;
  dates: string;
  project?: string;
  tech: string[];
  results: string[];
  /** Optional longer project description shown under "Show project details". */
  details?: string;
}

export interface Experience {
  company: string;
  dates: string;
  location?: string;
  /** One or more roles. Multiple roles = promotion progression within a company. */
  roles: Role[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
  /** Set true to render an "editable placeholder" hint. */
  placeholder?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Optional verification URL. */
  url?: string;
  placeholder?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface CV {
  header: Header;
  summary: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
}

export const cv: CV = {
  header: {
    name: 'Kabir Faye',
    title: 'Head of AWS Engineering | Cloud Platform & DevOps Leader',
    location: 'Stuttgart, Baden-Württemberg, Germany',
    contacts: {
      email: 'fayekabir21@yahoo.com',
      linkedin: 'https://www.linkedin.com/in/kabir-faye',
      github: 'https://github.com/Salla21',
      pdf: '', // e.g. '/kabir-faye-cv.pdf' — drop a PDF in /public to enable
    },
    languages: [
      { name: 'English', level: 'Fluent', percent: 95 },
      { name: 'German', level: 'Intermediate', percent: 55 },
    ],
  },

  summary:
    'Head of AWS Engineering at Rackspace Technology with 12+ years of IT experience leading teams, designing enterprise cloud platforms, and driving engineering excellence at scale. Internally promoted from Senior DevOps Engineer to lead the AWS engineering team — responsible for technical strategy, team delivery, architecture decisions, and stakeholder management across enterprise cloud migrations, platform engineering, and AI-integrated workloads. Track record of building high-performing engineering teams, mentoring engineers, and delivering measurable outcomes including 40% higher release frequency, 30% faster deployment velocity, 25% lower MTTR, and 20% infrastructure cost reduction.',

  experience: [
    {
      company: 'Rackspace Technology',
      dates: 'Nov 2023 - Present',
      location: 'Frankfurt am Main / Remote',
      roles: [
        {
          title: 'Head of AWS Engineering',
          dates: 'Nov 2025 - Present',
          project: 'AWS Engineering Practice',
          tech: [
            'Team Leadership',
            'AWS Bedrock',
            'Agentic AI',
            'CI/CD',
            'IaC',
            'Terraform',
          ],
          results: [
            'Grew and led a double-digit AWS engineering team through hiring cycles, onboarding, and talent development',
            'Established mentoring programs and career frameworks that reduced attrition and built a promotion pipeline, ensuring project continuity across customer engagements',
            'Led cross-functional knowledge transfer sessions across DACH and EMEA covering Agentic AI on Bedrock, local LLMs, CI/CD shift-left, quantum computing, and NAS',
            'Defined and rolled out engineering standards (code review, IaC patterns, documentation) adopted across all delivery teams',
          ],
          details:
            'Own the technical strategy and delivery for the AWS engineering practice — balancing hands-on architecture with team leadership, hiring, and stakeholder management across enterprise customer engagements.',
        },
        {
          title: 'Senior DevOps Engineer',
          dates: 'Mar 2024 - Nov 2025',
          project: 'Enterprise Cloud Platform Migration',
          tech: [
            'AWS ECS Fargate',
            'Terraform',
            'Terragrunt',
            'GitHub Actions',
            'GitLab CI',
            'Docker',
            'AWS Bedrock',
            'Aviatrix',
            'Datadog',
          ],
          results: [
            'Led cloud migration of a centralized planning and monitoring platform from on-premises to AWS across ECS Fargate, Route 53, CloudFront, WAF, ALB/NLB, Secrets Manager, S3, KMS, and secure RDS/Aurora access',
            'Owned CI/CD strategy and infrastructure automation using GitHub Actions, GitLab CI, Terraform, Terragrunt, Docker, Amazon ECR, and ECS — accelerating deployment velocity by 30%',
            'Delivered the Metis AI platform — an event-driven AWS AI system using Bedrock, Textract, Transcribe, Translate, Comprehend, Cognito, ECS, Lambda, API Gateway, and SNS/SQS',
            'Managed Aviatrix multicloud networking across AWS and Azure — ActiveMesh, SmartGroups, Distributed Cloud Firewall, centralized egress',
            'Drove observability with Datadog, Prisma Cloud, Prometheus, Grafana, CloudWatch, GuardDuty, Security Hub — reducing MTTR by 25%',
          ],
          details:
            'Hands-on engineering lead for a large enterprise cloud migration and AI platform build, spanning compute, networking, security, CI/CD, and observability.',
        },
      ],
    },
    {
      company: 'JJ Tech Inc.',
      dates: 'Apr 2020 - Feb 2024',
      roles: [
        {
          title: 'Senior Principal Cloud Architect',
          dates: 'Apr 2020 - Feb 2024',
          tech: [
            'AWS Organizations',
            'Control Tower',
            'Terraform',
            'Jenkins',
            'GitLab CI',
            'Transit Gateway',
            'IAM',
          ],
          results: [
            'Designed and scaled secure multi-account AWS environments using AWS Organizations, SCPs, Control Tower, centralized logging, and cross-account IAM roles',
            'Authored reusable Terraform modules reducing new environment provisioning from days to under 2 hours',
            'Built CI/CD pipelines using Jenkins, GitLab CI, GitHub, CodePipeline, CodeBuild, CodeDeploy — increasing release frequency by 40%',
            'Architected hub-and-spoke VPC topologies with Transit Gateway reducing lateral movement risk by 30%',
            'Designed multi-region disaster recovery architectures with RTO/RPO-driven recovery practices',
          ],
        },
      ],
    },
    {
      company: 'The Will Group, Inc.',
      dates: 'Feb 2019 - Mar 2020',
      roles: [
        {
          title: 'AWS Cloud Consultant',
          dates: 'Feb 2019 - Mar 2020',
          tech: [
            'AWS',
            'VPC',
            'EC2',
            'IAM',
            'CloudWatch',
            'Terraform',
            'CloudFormation',
            'Docker',
          ],
          results: [
            'Led end-to-end AWS migration engagements producing SOWs, PoCs, architecture diagrams — reducing time-to-cloud by 35%',
            'Designed target-state AWS architectures aligned to AWS Well-Architected best practices',
            'Partnered with client security, DevOps, and development teams to harden infrastructure',
          ],
        },
      ],
    },
    {
      company: 'Olam Group',
      dates: 'Jan 2017 - Jan 2019',
      roles: [
        {
          title: 'AWS Cloud Engineer',
          dates: 'Jan 2017 - Jan 2019',
          tech: [
            'AWS',
            'EC2',
            'VPC',
            'S3',
            'Route 53',
            'Docker',
            'Jenkins',
            'GitLab CI',
            'Ansible',
          ],
          results: [
            'Migrated legacy applications from data centers to AWS, reducing infrastructure spend by 20%',
            'Implemented private subnets, bastion hosts, NAT Gateways, Security Groups, WAF, Shield, encryption',
            'Developed Docker-based deployments with Jenkins, GitHub, GitLab CI, Ansible automation',
          ],
        },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's degree in Computer Science / IT",
      institution: '[Update with your institution]',
      dates: '[Update with dates]',
      placeholder: true,
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      date: '[Update date]',
      placeholder: true,
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      issuer: 'Amazon Web Services',
      date: '[Update date]',
      placeholder: true,
    },
    {
      name: 'AWS Certified Security – Specialty',
      issuer: 'Amazon Web Services',
      date: '[Update date]',
      placeholder: true,
    },
    {
      name: 'AWS Certified Advanced Networking – Specialty',
      issuer: 'Amazon Web Services',
      date: '[Update date]',
      placeholder: true,
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '[Update date]',
      placeholder: true,
    },
    {
      name: 'Aviatrix Certified Engineer (ACE) – Multicloud',
      issuer: 'Aviatrix',
      date: '[Update date]',
      placeholder: true,
    },
  ],

  skills: [
    {
      category: 'Cloud Platforms',
      skills: ['AWS', 'Microsoft Azure'],
    },
    {
      category: 'Kubernetes & Containers',
      skills: ['Amazon ECS', 'ECS Fargate', 'Docker', 'Amazon ECR'],
    },
    {
      category: 'Infrastructure as Code',
      skills: ['Terraform', 'Terragrunt', 'CloudFormation', 'Ansible', 'Checkov'],
    },
    {
      category: 'CI/CD & GitOps',
      skills: [
        'GitHub Actions',
        'GitLab CI',
        'Jenkins',
        'CodePipeline',
        'CodeBuild',
        'CodeDeploy',
      ],
    },
    {
      category: 'Programming',
      skills: ['Python', 'Bash'],
    },
    {
      category: 'Networking',
      skills: [
        'VPC design',
        'Transit Gateway',
        'Route 53',
        'ALB/NLB',
        'Aviatrix',
        'Direct Connect',
      ],
    },
    {
      category: 'Security & Compliance',
      skills: [
        'IAM',
        'KMS',
        'WAF',
        'Cognito',
        'GuardDuty',
        'Security Hub',
        'AWS Config',
        'Prisma Cloud',
      ],
    },
    {
      category: 'Generative & Agentic AI',
      skills: [
        'Amazon Bedrock',
        'Textract',
        'Transcribe',
        'Translate',
        'Comprehend',
        'Agentic AI workflows',
        'MCP',
      ],
    },
    {
      category: 'Observability',
      skills: ['Datadog', 'Prometheus', 'Grafana', 'CloudWatch', 'CloudTrail'],
    },
    {
      category: 'Leadership',
      skills: [
        'Team leadership',
        'Mentoring',
        'Stakeholder management',
        'Engineering standards',
        'Talent development',
      ],
    },
  ],
};
