import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { MetricsProvider } from './context/MetricsContext';

function App() {
  return (
    <Router>
      <MetricsProvider>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </MetricsProvider>
    </Router>
  );
}

export default App;
