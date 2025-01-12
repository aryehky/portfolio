import React from 'react';

interface Organization {
  name: string;
  period: string;
}

const organizations: Organization[] = [
  { name: "International Society for the Study of Xenobiotics (ISSX)", period: "2024 - Present" },
  { name: "Pacific Northwest Association of Toxicologists (PANWAT)", period: "2024 - Present" },
  { name: "Microphysiological Systems (MPS) Word Summit", period: "2024 - Present" },
  { name: "CompTIA", period: "2023 - Present" },
  { name: "CoMotion", period: "2022 - Present" },
  { name: "Science & Engineering Business Association (SEBA)", period: "2022 - Present" },
  { name: "Achievement rewards for College Scientist (ARCS) Scholar", period: "2022 - Present" },
  { name: "Society for Advancement of Chicanos/Hispanic and Native Americans in Science (SACNAS)", period: "2017-Present" },
  { name: "MexZona", period: "2017 - 2020" },
  { name: "Undergraduate Biology Research Program (UBRP)", period: "2017 - 2019" },
  { name: "Arizona's Science, Engineering, and Math Scholars (ASEMS)", period: "2015 - 2019" }
];

const Organizations: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Organizations</h2>
      <div className="grid gap-4">
        {organizations.map((org, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-900">{org.name}</h3>
              <span className="text-sm text-gray-500">{org.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations; 