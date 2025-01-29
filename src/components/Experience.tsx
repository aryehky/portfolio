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
          "Designed and deployed decentralized applications and Solidity-based smart contracts, ensuring robust data integrity in transactions.",
          "Used JavaScript libraries (web3.js, ethers.js) to connect front-end interfaces with smart contracts, enhancing user engagement with blockchain features.",
          "Implemented features similar to NFT or DeFi use cases, tested across multiple blockchain test networks to ensure reliability and security.",
          "Leveraged well-known open-source libraries (e.g., OpenZeppelin) and secure storage (e.g., IPFS) to promote interoperability and safe contract deployment.",
          "Employed containerization (Docker) and cloud services to streamline deployments of .NET or JavaScript-based microservices for real-time data processing.",
          "Coordinated daily with researchers and product teams to ensure technical solutions aligned with overall project goals and compliance requirements."
        ],
        projects: [],
        skills: ["Solidity", "Web3.js", "Ethers.js", "NFT", "DeFi", "OpenZeppelin", "IPFS", "Smart Contracts", "Docker"]
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
          "Built RESTful APIs using Python (Flask) and integrated with relational databases (e.g., PostgreSQL, MySQL) to handle high-throughput data transactions.",
          "Migrated a monolithic application to containerized microservices (Docker) on cloud platforms, setting up automated CI/CD pipelines for faster, more reliable deployments.",
          "Implemented caching (Redis, Celery) and indexing strategies that reduced latency and improved system responsiveness.",
          "Created interactive dashboards and user interfaces (React.js, Angular) for data visualization and easier stakeholder decision-making.",
          "Applied OAuth 2.0, SSL/TLS, and best practices for securing sensitive user information.",
          "Worked closely with cross-functional teams—product owners, data scientists—to refine user stories, conduct code reviews, and ensure maintainable, high-quality code."
        ],
        projects: [],
        skills: ["Python", "Flask", "PostgreSQL", "MySQL", "Redis", "Celery", "Docker", "CI/CD", "React.js", "Angular", "OAuth 2.0", "AWS"]
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
          "Explored interaction between Goldenseal and CYP3A enzymes affecting drug metabolism",
          "PK/PD"
        ],
        projects: [],
        skills: ["RNA Sequencing", "Microphysiological Systems", "Drug Metabolism", "Genetic Analysis", "PK/PD"]
      }
    ]
  },
  {
    company: "VIRGINIA COMMONWEALTH UNIVERSITY",
    logo: `${process.env.PUBLIC_URL}/images/vcu.png`,
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
