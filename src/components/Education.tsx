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
        "Research focused on genomic data analysis, drug-drug interactions, and personalized medicine, providing domain insights directly applicable to building genomic data exploration tools."
      ]
    },
    {
      school: "FLATIRON SCHOOL",
      logo: `https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1736651851/portfolio/flatiron-logo_zdpvzv.png`,
      degree: "SOFTWARE ENGINEERING",
      date: "NOVEMBER 2020",
      location: "",
      details: [
        "Intensive training in full-stack development, reinforcing modern web development practices and agile methodologies."
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
        "Minor in Persian"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
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
