// path: src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-serif">
        <div className="w-full md:w-64 p-4">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <MainComponent />
        </div>
      </div>
    </Router>
  );
};

export default App;
