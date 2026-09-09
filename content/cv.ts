// ---------------------------------------------------------------------------
// CV CONTENT - edit this file to update the website.
// Everything the site renders comes from here. No need to touch components.
// ---------------------------------------------------------------------------

export interface LanguageProficiency {
  name: string;
  level: string; // e.g. "Fluent", "Intermediate"
  /** 0-100 for the proficiency bar */
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
  /** Optional subtle note shown beneath the entry. */
  note?: string;
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

export interface ImpactMetric {
  /** Headline figure, e.g. "40%". */
  value: string;
  /** Short label describing the outcome. */
  label: string;
  /** One-sentence narrative explaining how the outcome was achieved. */
  narrative: string;
}

export interface CV {
  header: Header;
  summary: string;
  impact: ImpactMetric[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
}

export const cv: CV = {
  header: {
    name: 'Kabir Faye',
    title: 'Cloud Solutions Architect | Head of Engineering',
    location: 'Stuttgart, Baden-Württemberg, Germany',
    contacts: {
      email: 'fayekabir21@yahoo.com',
      linkedin: 'https://www.linkedin.com/in/kabir-faye',
      github: 'https://github.com/Salla21/realworld-cicd-pipeline-project-1',
      pdf: '/files/Kabir-Faye-CV.pdf', // real generated PDF, opens in browser PDF viewer
    },
    languages: [
      { name: 'English', level: 'Fluent', percent: 95 },
      { name: 'German', level: 'C1', percent: 80 },
    ],
  },

  summary:
    'Cloud Solutions Architect and Head of AWS Engineering with 12+ years across DevOps, cloud architecture, networking, and programming. Led multi-million dollar cloud transformations across automotive and retail. Designs and ships generative AI solutions such as multi-agent architectures, RAG pipelines, and AI/ML integrations with enterprise systems. Certified at Professional and Specialty levels across AWS and Aviatrix multicloud networking. Builds and mentors AWS engineering teams across DACH and EMEA.',

  impact: [
    {
      value: '40%',
      label: 'Higher Release Frequency',
      narrative:
        'End-to-end CI/CD automation using GitHub Actions, GitLab CI, AWS CodePipeline, CodeBuild, and CodeDeploy, enabling multiple production releases per day.',
    },
    {
      value: '30%',
      label: 'Faster Deployment Velocity',
      narrative:
        'Standardised Terraform modules and automated pipeline gates cut commit-to-production time.',
    },
    {
      value: '25%',
      label: 'Lower MTTR',
      narrative:
        'Observability across Datadog, Prisma Cloud, Prometheus, Grafana, CloudWatch, CloudTrail, GuardDuty, and Security Hub, with automated runbooks and structured incident response.',
    },
    {
      value: '20%',
      label: 'Lower Infrastructure Costs',
      narrative:
        'Right-sizing, Reserved Instance planning, serverless migration, container density improvements.',
    },
  ],

  experience: [
    {
      company: 'Rackspace Technology',
      dates: 'Mar 2024 - Present',
      location: 'Munich, Germany / Remote',
      roles: [
        {
          title: 'Senior DevOps Engineer / Professional Services Delivery Engineer',
          dates: '',
          project: 'Enterprise Cloud Platform Migration & AWS Engineering Practice',
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
            'Owned CI/CD strategy and infrastructure automation with GitHub Actions, GitLab CI, Terraform, Terragrunt, Docker, Amazon ECR, and ECS; deployment velocity rose 30%',
            'Enforced shift-left security in CI: gated Terraform validate/plan/apply behind automated scans using Trivy (IaC misconfiguration and secret scanning) and Deepfence (workload/runtime security), with OIDC role assumption for short-lived AWS access and secured private module access',
            'Delivered the Metis AI platform, an event-driven AWS AI system using Bedrock, Textract, Transcribe, Translate, Comprehend, Cognito, ECS, Lambda, API Gateway, and SNS/SQS',
            'Managed Aviatrix multicloud networking across AWS and Azure, including ActiveMesh, SmartGroups, Distributed Cloud Firewall, and centralized egress',
            'Built observability across Datadog, Prisma Cloud, Prometheus, Grafana, CloudWatch, GuardDuty, and Security Hub, with automated runbooks and structured incident response; MTTR fell 25%',
            'Grew and led a double-digit AWS engineering team across DACH and EMEA through hiring, onboarding, mentoring, and career frameworks that reduced attrition and built a promotion pipeline',
            'Defined and rolled out engineering standards (code review, IaC patterns, and documentation) adopted across all delivery teams, and led knowledge transfer on Agentic AI (Bedrock), local LLMs, and CI/CD shift-left',
          ],
        },
      ],
    },
    {
      company: 'JJ Tech Inc.',
      dates: 'Apr 2020 - Feb 2024',
      roles: [
        {
          title: 'Senior Principal Cloud Architect',
          dates: '',
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
            'Multi-Account AWS Foundations: Designed and scaled secure multi-account AWS environments using AWS Organizations, SCPs, Control Tower, centralized logging, and cross-account IAM roles across development, staging, and production workloads',
            'Reusable Terraform Architecture: Authored reusable Terraform modules for VPC, ECS, RDS, IAM, ALB, security groups, and environment baselines, cutting new environment provisioning from days to under 2 hours and improving deployment consistency',
            'CI/CD at Scale: Built and operated CI/CD pipelines using Jenkins, GitLab CI, GitHub, CodePipeline, CodeBuild, and CodeDeploy; release frequency increased 40% and manual-deployment configuration drift dropped',
            'Network & Security Architecture: Architected hub-and-spoke VPC topologies with Transit Gateway, custom route tables, private subnet segmentation, security groups, and IAM least-privilege controls to reduce identity and lateral-movement risk',
            'Disaster Recovery & Resilience: Designed high-availability and multi-region disaster recovery architectures, automated failover testing, documented operational runbooks, and established RTO/RPO-driven recovery practices for critical workloads',
            'Database & Application Operations: Managed RDS, DynamoDB, database snapshots, read replicas, lifecycle policies, and performance tuning in collaboration with application engineering teams to improve reliability and response times',
            'CloudFormation & Ansible Automation: Developed CloudFormation stacks and Ansible playbooks for EC2 configuration, application bootstrapping, compliance baselining, patching, and repeatable environment configuration',
            'Governance & Quality Controls: Integrated security scanning, code quality, and compliance practices using Checkov, SonarQube, CloudTrail, AWS Config, and CloudWatch to improve audit readiness and enforce operational standards',
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
          dates: '',
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
            'Migration Delivery: Led end-to-end AWS migration engagements for enterprise clients, producing Statements of Work, Proofs of Concept, architecture diagrams, and phased migration roadmaps that cut time-to-cloud by an average of 35% against client self-managed estimates',
            'Architecture Design: Designed target-state AWS architectures covering networking, compute, storage, IAM, monitoring, and compliance controls, translating business requirements into documented technical solutions aligned to AWS Well-Architected best practices',
            'Cross-Functional Delivery: Partnered with client security, DevOps, and development teams to harden cloud infrastructure, deliver operational runbooks, and conduct stakeholder workshops supporting post-handoff self-operation',
            'Post-Deployment Support: Provided architecture reviews, troubleshooting guidance, technical documentation, and knowledge transfer to help client teams operate and scale AWS environments independently',
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
          dates: '',
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
            'Legacy Migration: Migrated legacy applications from internal data centers to AWS, cutting infrastructure spend 20% while improving application availability and supporting enterprise cloud transformation initiatives',
            'Secure Architecture: Implemented private subnets, bastion hosts, NAT Gateways, Security Groups, NACLs, WAF, Shield, encryption in transit and at rest, and Route 53 routing policies for secure AWS workloads',
            'CI/CD & Containers: Developed Docker-based deployments and maintained Jenkins, GitHub, GitLab CI, and Ansible automation workflows for consistent application delivery across environments',
            'Operations & Governance: Configured CloudWatch alarms, Lambda automation, AWS Organizations governance, disaster recovery architectures, failover testing, and operational troubleshooting for cloud-hosted applications',
          ],
        },
      ],
    },
    {
      company: 'Riders for Health (RFH), The Gambia',
      dates: 'Jan 2008 - Dec 2012',
      roles: [
        {
          title: 'Data Clerk',
          dates: '',
          tech: [],
          results: [
            'Recorded, entered, and maintained operational and program data supporting health-delivery logistics across field operations',
            'Ensured data accuracy and consistency through validation, record-keeping, and routine reporting',
          ],
        },
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of The Gambia, Banjul',
      dates: '2009 - 2013',
    },
    {
      degree: 'Diploma in Software Application',
      institution: 'Microtech Institute of Technology',
      dates: '2012',
    },
    {
      degree: 'Diploma in Information Technology & Hardware',
      institution: 'QuantumNet Institute of Technology',
      dates: '2011 - 2012',
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      date: 'Jun 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: 'Apr 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'May 2024',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      url: 'https://www.credly.com/earner/earned/badge/d66eecdd-ce4a-40ab-b4c5-0562bf9c5997',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: 'Nov 2023',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Aviatrix Multicloud Network Professional',
      issuer: 'Aviatrix',
      date: 'Feb 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Aviatrix Multicloud Network Security Specialty',
      issuer: 'Aviatrix',
      date: 'May 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Aviatrix Multicloud Network Cloud Backbone Specialty',
      issuer: 'Aviatrix',
      date: 'Apr 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Aviatrix Multicloud Network Operations Specialty',
      issuer: 'Aviatrix',
      date: 'Feb 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Aviatrix Multicloud Network Associate',
      issuer: 'Aviatrix',
      date: 'Feb 2025',
      url: 'https://www.credly.com/users/kabir-faye',
    },
    {
      name: 'Artificial Intelligence and Business Strategy',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2024',
      url: 'https://www.linkedin.com/learning/certificates/0355c9bfcc9bbf298b24877ed3c8d33c42387698c8ff41c309f38d54c6f92baa',
    },
    {
      name: 'Generative AI for Business Leaders',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2024',
      url: 'https://www.linkedin.com/learning/certificates/2ec3816014e5dc6110982df703ebfec583204a34be790153383d851259c09716',
    },
    {
      name: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
    },
    {
      name: 'AI-Ready: Foundational',
      issuer: 'Rackspace Technology',
      date: 'Nov 2024',
      url: 'https://www.credly.com/badges/c5d85d9a-59ff-4620-9d27-5862b012a5e4/linked_in_profile',
    },
    {
      name: 'AI-Ready: Practitioner',
      issuer: 'Rackspace Technology',
      date: 'Apr 2024',
      url: 'https://www.credly.com/badges/1e173024-7796-4e7a-9fad-0ece6aefaeb1/linked_in_profile',
    },
  ],

  skills: [
    {
      category: 'Cloud & Compute',
      skills: [
        'AWS EC2',
        'VPC',
        'IAM',
        'S3',
        'ECS',
        'EKS',
        'Fargate',
        'ECR',
        'Lambda',
        'RDS',
        'Aurora',
        'DynamoDB',
        'API Gateway',
        'Route 53',
        'CloudFront',
        'Cognito',
        'SNS',
        'SQS',
        'WAF',
        'Shield',
      ],
    },
    {
      category: 'AI & ML Services',
      skills: [
        'Amazon Bedrock',
        'Textract',
        'Transcribe',
        'Translate',
        'Comprehend',
        'Rekognition',
        'Amazon Q',
        'SageMaker',
        'AWS Kiro',
        'Model Context Protocol (MCP)',
        'Agentic AI',
        'Claude Code',
        'GitHub Copilot',
        'Event-Driven AI Workflows',
      ],
    },
    {
      category: 'Containers & Platform',
      skills: [
        'Docker',
        'Amazon ECS',
        'Amazon EKS',
        'Kubernetes',
        'Fargate',
        'code-server',
        'Internal Developer Platforms',
        'Secure SSM Access',
        'Helm',
      ],
    },
    {
      category: 'IaC & CI/CD',
      skills: [
        'Terraform',
        'Terragrunt',
        'CloudFormation',
        'Ansible',
        'Makefile',
        'Systems Manager',
        'GitHub Actions',
        'GitLab CI',
        'Jenkins',
        'CodePipeline',
        'CodeBuild',
        'CodeDeploy',
        'ECR',
        'Nexus',
        'SonarQube',
        'Checkov',
        'TFLint',
        'Shift-Left Security Scanning',
        'OIDC Role Assumption',
      ],
    },
    {
      category: 'Networking & Multicloud',
      skills: [
        'Aviatrix Controller',
        'Aviatrix CoPilot',
        'ActiveMesh',
        'SmartGroups',
        'Distributed Cloud Firewall',
        'Central Egress',
        'Transit Gateway',
        'Direct Connect',
        'VPC Design',
        'ALB/NLB',
      ],
    },
    {
      category: 'Security & Observability',
      skills: [
        'IAM',
        'Cognito',
        'KMS',
        'Secrets Manager',
        'ACM',
        'Macie',
        'Prisma Cloud',
        'AWS Artifact',
        'Trivy',
        'Deepfence (Runtime/Workload Security)',
        'Checkov',
        'TFLint',
        'OIDC / Short-Lived Credentials',
        'Secret Scanning',
        'IaC Misconfiguration Scanning',
        'Datadog',
        'Prometheus',
        'Grafana',
        'CloudWatch',
        'CloudTrail',
        'GuardDuty',
        'Security Hub',
        'AWS Config',
        'WAF',
        'Incident Response',
      ],
    },
    {
      category: 'Programming',
      skills: [
        'Python',
        'Go',
        'Bash',
        'Shell Scripting',
        'Linux',
        'Git',
      ],
    },
    {
      category: 'FinOps & Cost Optimization',
      skills: [
        'Cloud Cost Management',
        'Resource Optimization',
        'AWS Cost Explorer',
        'Azure Cost Management',
        'Reserved Instance Planning',
        'FinOps Practices',
        'Right-sizing',
      ],
    },
    {
      category: 'Leadership & Soft Skills',
      skills: [
        'Stakeholder Management',
        'Executive-level Facilitation',
        'Technical Presentations',
        'Cross-cultural Team Leadership',
        'Mentoring & Coaching',
        'AWS Cloud Computing Instructor (Global Elite Computing)',
        'Agile/Scrum',
        'Cost Optimization',
        'AI-Assisted Delivery',
        'Talent Development',
        'Career Frameworks',
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// GERMAN (DE) OVERLAY — translated human-readable strings only.
// Technical bullets, tool names, and proper nouns stay as-is (standard practice).
// ---------------------------------------------------------------------------
export const de = {
  title: 'Cloud Solutions Architect | Head of Engineering',
  summary:
    'Cloud Solutions Architect und Head of AWS Engineering mit über 12 Jahren Erfahrung in DevOps, Cloud-Architektur, Netzwerken und Programmierung. Leitung millionenschwerer Cloud-Transformationen in der Automobil- und Handelsbranche. Konzeption und Umsetzung generativer KI-Lösungen wie Multi-Agenten-Architekturen, RAG-Pipelines und KI/ML-Integrationen in Unternehmenssysteme. Zertifiziert auf Professional- und Specialty-Niveau bei AWS und Aviatrix Multicloud-Networking. Aufbau und Mentoring von AWS-Engineering-Teams in der DACH-Region und EMEA.',
  sections: {
    summary: 'Zusammenfassung',
    experience: 'Berufserfahrung',
    skills: 'Technische Kompetenzen',
    certifications: 'Zertifizierungen & Weiterbildung',
    education: 'Ausbildung',
    languages: 'Sprachen',
  },
  languageLevels: {
    English: 'Englisch (fließend)',
    German: 'Deutsch (C1)',
  } as Record<string, string>,
  ui: {
    savePdf: 'Zum Speichern als PDF Strg/Cmd + P drücken.',
    meta: 'A4 · einspaltig · ATS-freundlich',
  },
};
