// path: src/components/Certifications.tsx
import React from 'react';

interface Certification {
  name: string;
  period: string;
}

const certifications: Certification[] = [
  { name: "AWS Certified Solutions Architect", period: "2023 - Present" },
  { name: "RAML, OpenAPI, and microservices design principles", period: "2023 - Present" },
  { name: "Containerization (Docker, Kubernetes) and ESB patterns", period: "2023 - Present" },
  { name: "AWS Developer Associate: Network Security", period: "2022 - Present" },
  { name: "AWS SysOps Associate: Database & EBS Volume Management", period: "2022 - Present" },
  { name: "Blockchains & Ethereum: Mining & Smart Contracts in Ethereum", period: "2022 - Present" },
  { name: "Ethereum Smart Contracts with Solidity: Functions in Solidity", period: "2022 - Present" },
  { name: "Smart Contracts & Hyperledger Fabric: Foundations of Hyperledger Fabric", period: "2022 - Present" },
  { name: "Agile project management practices", period: "2022 - Present" }
];

const Certifications: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
              <span className="text-sm text-gray-500">{cert.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;