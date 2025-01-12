// path: src/components/Education.tsx
import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      school: "UNIVERSITY OF WASHINGTON",
      logo: `${process.env.PUBLIC_URL}/images/uwcrestsquare.png`,
      degree: "M.S., PHARMACEUTICAL SCIENCES",
      date: "DECEMBER 2024",
      location: "SEATTLE, WA",
      details: [
        "Graduate Research Assistant in Department of Pharmaceutics",
        "Thesis: Investigating nephrotoxic effects of Cyclosporine A and Voclosporin on proximal tubule epithelial cells",
        "Research in RNA sequencing, microphysiological systems, and drug metabolism",
        "Focus on genomic data analysis and personalized medicine"
      ]
    },
    {
      school: "TREASURE",
      logo: `${process.env.PUBLIC_URL}/images/treasureicon.png`,
      degree: "SOLIDITY WEB3 DEVELOPER",
      date: "JANUARY 2024 - DECEMBER 2024",
      location: "REMOTE",
      details: [
        "Designed and deployed decentralized applications and smart contracts",
        "Integrated front-end interfaces with Solidity-based smart contracts using ethers.js and web3.js",
        "Implemented OpenZeppelin standards for IPFS-backed NFTs",
        "Experience with NFT and DeFi protocols across multiple Ethereum test networks"
      ]
    },
    {
      school: "PARADES",
      logo: `${process.env.PUBLIC_URL}/images/paradessquare.png`,
      degree: "SOFTWARE ENGINEER",
      date: "SEPTEMBER 2022 - SEPTEMBER 2023",
      location: "REMOTE",
      details: [
        "Built RESTful APIs using Python (Flask) with PostgreSQL and Redis/Celery integration",
        "Implemented CI/CD pipelines and AWS services (EC2, S3, RDS) for deployments",
        "Developed React.js UI components for data visualization tools",
        "Applied OAuth 2.0 and SSL/TLS security practices for sensitive data handling"
      ]
    },
    {
      school: "UNIVERSITY OF ARIZONA",
      logo: `${process.env.PUBLIC_URL}/images/university-of-arizona-logo.png`,
      degree: "DUAL DEGREE: B.A. PHILOSOPHY & B.S. MOLECULAR AND CELLULAR BIOLOGY",
      date: "MAY 2019",
      location: "TUCSON, AZ",
      details: [
        "B.A. Philosophy with Ethics Emphasis - College of Social and Behavioral Sciences",
        "B.S. Molecular and Cellular Biology - College of Science",
        "Minor in Computer Science",
        "Minor in Persian",
        "Research Scientist in Department of Molecular and Cellular Biology (2016-2019)"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={edu.logo}
              alt={`${edu.school} logo`}
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
              <p className="text-gray-600 font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.date} • {edu.location}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            {edu.details.map((detail, idx) => (
              <li key={idx} className="text-base">
                <span className="ml-[-4px]">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;