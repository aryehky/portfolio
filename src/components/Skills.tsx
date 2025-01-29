// path: src/components/Skills.tsx
import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["TypeScript", "Python", "Solidity", "JavaScript", "Java", "Scala", "SwiftUI"]
    },
    {
      name: "Web Development",
      skills: ["React.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs"]
    },
    {
      name: "Blockchain",
      skills: ["Smart Contracts", "Web3.js", "Ethers.js", "NFT", "DeFi", "OpenZeppelin", "IPFS"]
    },
    {
      name: "Backend & Database",
      skills: ["Flask", "PostgreSQL", "MySQL", "Redis", "Celery", "Docker", "AWS"]
    },
    {
      name: "Research Skills",
      skills: ["RNA Sequencing", "Microphysiological Systems", "Drug Metabolism", "Genetic Analysis", "PK/PD"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
