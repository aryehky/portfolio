import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/solid';

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

const getFontSizeClass = (title: string) => {
  if (title.length > 60) return 'text-sm';
  if (title.length > 40) return 'text-base';
  return 'text-lg';
};

const AcademicAwards: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Academic Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <TrophyIcon className="absolute top-2 right-2 h-8 w-8 text-yellow-500" />
            <div className="mb-4 pr-10">
              <h3 className={`font-semibold text-gray-900 ${getFontSizeClass(award.title)}`}>{award.title}</h3>
            </div>
            <span className="text-sm text-gray-500">{award.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicAwards;
