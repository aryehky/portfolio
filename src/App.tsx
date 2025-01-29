// path: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import AcademicAwards from './components/AcademicAwards';
import Organizations from './components/Organizations';
import Certifications from './components/Certifications';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-serif">
        <div className="w-full md:w-64 p-4">
          <Sidebar />
        </div>
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/awards" element={<AcademicAwards />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
