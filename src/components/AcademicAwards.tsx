import React from 'react';

interface Award {
  title: string;
  date: string;
}

const awards: Award[] = [
  { title: "MPower", date: "Spring 2024" },
  { title: "Achievement rewards for College Scientist (ARCS) Scholarship", date: "Fall 2022-2024" },
  { title: "University of Washington Top Scholar Research Assistantship", date: "Fall 2022" },
  { title: "Galileo Circle Scholarship", date: "Spring 2019" },
  { title: "Magellan Circle Scholarship", date: "Spring 2019" },
  { title: "Dottie Sams Research Grant", date: "Spring 2018" },
  { title: "University of Arizona Global Health Competition 1st Place", date: "Spring 2018" },
  { title: "University of Arizona Student Showcase Competition 1st Place", date: "Spring 2018" },
  { title: "Society for Advancement of Chicanos/Hispanic and Native Americans in Science (SACNAS) Travel Scholarship", date: "Fall 2017" },
  { title: "Research, Discovery and Innovation Research Fellow", date: "2018 - 2019" },
  { title: "Dougherty Foundation Scholarship", date: "2017 - 2018" }
];

const AcademicAwards: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Academic Awards</h2>
      <div className="grid gap-4">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
              <span className="text-sm text-gray-500">{award.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicAwards; 