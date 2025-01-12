// path: src/components/Experience.tsx
import React from 'react';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

interface ExperienceItem {
  company: string;
  logo: string;
  roles: {
    title: string;
    date: string;
    location: string;
    details: string[];
    projects: Project[];
    skills: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TREASURE",
    logo: `${process.env.PUBLIC_URL}/images/treasureicon.png`,
    roles: [
      {
        title: "SOLIDITY WEB3 DEVELOPER",
        date: "JANUARY 2024 - DECEMBER 2024",
        location: "REMOTE",
        details: [
          "Designed and deployed decentralized applications and smart contracts, collaborating closely with researchers and product teams to ensure secure, reliable data transactions",
          "Utilized JavaScript libraries (e.g., ethers.js, web3.js) to integrate front-end interfaces with Solidity-based smart contracts, enabling seamless user interactions with NFT and DeFi functionalities",
          "Integrated NFT and DeFi protocols, tested across multiple Ethereum test networks, and gained experience with complex data transformations relevant to next-generation biotech pipelines",
          "Implemented OpenZeppelin standards to deploy IPFS-backed NFTs, ensuring robust security and interoperability within decentralized ecosystems"
        ],
        projects: [],
        skills: ["Solidity", "Web3.js", "Ethers.js", "NFT", "DeFi", "OpenZeppelin", "IPFS", "Smart Contracts"]
      }
    ]
  },
  {
    company: "PARADES",
    logo: `${process.env.PUBLIC_URL}/images/paradessquare.png`,
    roles: [
      {
        title: "SOFTWARE ENGINEER",
        date: "SEPTEMBER 2022 - SEPTEMBER 2023",
        location: "REMOTE",
        details: [
          "Built RESTful APIs in Python (Flask) and integrated with databases (PostgreSQL) and caching (Redis, Celery) to enhance throughput and reduce latency by 40%",
          "Implemented code reviews, followed agile methodologies, and contributed to design patterns ensuring maintainable integration frameworks",
          "Developed and maintained internal RESTful APIs in Python (Flask) and integrated with MySQL databases to process and query scientific and financial data",
          "Leveraged AWS services (EC2, S3, RDS) for scalable, secure application deployments",
          "Implemented CI/CD pipelines and version control best practices, ensuring smooth updates and feature releases",
          "Built responsive UI components with React.js and integrated them with back-end APIs for data visualization and exploration tools",
          "Applied OAuth 2.0, SSL/TLS, and other security practices for handling sensitive genomic and health data",
          "Experience with RAML/OpenAPI for defining APIs and schemas, ensuring consistent and scalable communication layers",
          "Coordinated with data scientists, geneticists, and medical researchers to understand requirements and prototype features"
        ],
        projects: [],
        skills: ["Python", "Flask", "PostgreSQL", "Redis", "Celery", "AWS", "React.js", "CI/CD", "OAuth 2.0", "RAML", "OpenAPI"]
      }
    ]
  },
  {
    company: "UNIVERSITY OF WASHINGTON",
    logo: `${process.env.PUBLIC_URL}/images/uwcrestsquare.png`,
    roles: [
      {
        title: "GRADUATE RESEARCH ASSISTANT",
        date: "SEPTEMBER 2022 - DECEMBER 2024",
        location: "SEATTLE, WA",
        details: [
          "Thesis: Investigate the nephrotoxic effects of Cyclosporine A and Voclosporin on proximal tubule epithelial cells",
          "Researched nephrotoxic effects of calcineurin inhibitors (CNIs) using RNA sequencing and mitochondrial biosensors",
          "Used microphysiological systems to compare toxicity across multiple CNIs",
          "Examined genetic factors in CNI-induced nephrotoxicity, focusing on CYP3A5 gene variants",
          "Researched TLR7/8 and 4-HNE in immune response within premetastatic lung model",
          "Explored interaction between Goldenseal and CYP3A enzymes affecting drug metabolism"
        ],
        projects: [],
        skills: ["RNA Sequencing", "Microphysiological Systems", "Drug Metabolism", "Genetic Analysis", "Research Methods"]
      }
    ]
  },
  {
    company: "VIRGINIA COMMONWEALTH UNIVERSITY",
    logo: `https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1736720703/portfolio/vcu-logo_woha55.svg`,
    roles: [
      {
        title: "RESEARCH SCIENTIST",
        date: "SEPTEMBER 2021 - SEPTEMBER 2022",
        location: "RICHMOND, VA",
        details: [
          "Identified pathogenesis of myotonic dystrophy and related muscular dystrophies",
          "Investigated RNA splicing dysregulation using muscle biopsies and blood samples",
          "Analyzed MADS-domain transcription enhancer factor 2 gene (MEF2C) targetability",
          "Developed predictive models for splicing-based biomarkers",
          "Assessed clinical endpoints for muscular dystrophies to enhance trial design"
        ],
        projects: [],
        skills: ["RNA Splicing", "Clinical Research", "Biomarker Development", "Gene Analysis", "Trial Design"]
      }
    ]
  },
  {
    company: "UNIVERSITY OF ARIZONA",
    logo: `${process.env.PUBLIC_URL}/images/university-of-arizona-logo.png`,
    roles: [
      {
        title: "RESEARCH SCIENTIST",
        date: "AUGUST 2019 - FEBRUARY 2021",
        location: "TUCSON, AZ",
        details: [
          "Monitored animal behavior and cognition in response to opioids and stimulants",
          "Utilized neurological biomarkers to explore mesolimbic system pathways",
          "Performed protein studies on FKBP12.6 and RyR2 channels",
          "Developed AAV constructs and DREADDs for neural circuit manipulation",
          "Analyzed Kv7 channels and serotonin receptors in drug-seeking behavior",
          "Conducted rodent surgeries and electrophysiological recordings",
          "Mentored students and staff in research techniques"
        ],
        projects: [],
        skills: ["Neuroscience", "Behavioral Studies", "Protein Analysis", "Electrophysiology", "Animal Surgery"]
      },
      {
        title: "RESEARCH SCIENTIST",
        date: "OCTOBER 2016 - MAY 2019",
        location: "TUCSON, AZ",
        details: [
          "Investigated cancer molecular basis using single-cell analysis and MATLAB",
          "Analyzed FOXO transcription factors under stress conditions",
          "Explored PI3K/Akt pathway mechanisms",
          "Conducted CRISPR/Cas9 experiments for FOXO1 localization",
          "Generated stable cell lines through vector construction"
        ],
        projects: [],
        skills: ["MATLAB", "Single-cell Analysis", "CRISPR/Cas9", "Cell Culture", "Molecular Biology"]
      }
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = React.useState<{[key: string]: boolean}>(() => {
    const initialState: {[key: string]: boolean} = {};
    experiences.forEach((exp, companyIndex) => {
      exp.roles.forEach((_, roleIndex) => {
        initialState[`${companyIndex}-${roleIndex}`] = true;
      });
    });
    return initialState;
  });

  const toggleRole = (companyIndex: number, roleIndex: number) => {
    const key = `${companyIndex}-${roleIndex}`;
    setExpandedRoles(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <div className="space-y-8">
      {experiences.map((exp, companyIndex) => (
        <div key={companyIndex} className="border rounded-lg p-4">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={exp.logo} 
              alt={`${exp.company} logo`} 
              className="w-12 h-12 object-contain"
            />
            <h3 className="font-bold text-xl">{exp.company}</h3>
          </div>
          
          <div className="space-y-6">
            {exp.roles.map((role, roleIndex) => {
              const isExpanded = expandedRoles[`${companyIndex}-${roleIndex}`];
              return (
                <div key={roleIndex} className="ml-16">
                  <button 
                    onClick={() => toggleRole(companyIndex, roleIndex)}
                    className="flex items-center gap-2 text-left w-full"
                  >
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        fill="currentColor" 
                        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">{role.title}</p>
                      <p className="text-sm text-gray-500">{role.date} • {role.location}</p>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-4 ml-6">
                      <ul className="list-disc list-inside mb-4">
                        {role.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-700">{detail}</li>
                        ))}
                      </ul>
                      
                      {role.projects.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Projects</h4>
                          {role.projects.map((project, idx) => (
                            <div key={idx} className="mb-4 bg-gray-50 p-4 rounded">
                              <h5 className="font-medium mb-2">{project.title}</h5>
                              <ul className="list-disc list-inside mb-2">
                                {project.description.map((desc, descIdx) => (
                                  <li key={descIdx} className="text-gray-600 text-sm">{desc}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIdx) => (
                                  <span key={techIdx} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
