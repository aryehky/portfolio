// path: src/components/MainComponent.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import AcademicAwards from './AcademicAwards';
import Organizations from './Organizations';
import Certifications from './Certifications';
import Skills from './Skills';

const MainComponent: React.FC = () => {
  return (
    <main className="flex-1 p-6 overflow-auto">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<AcademicAwards />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </main>
  );
};

export default MainComponent;
