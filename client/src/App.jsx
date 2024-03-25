import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import GoogleOAuth from './components/GoogleOAuth';
import { MetricsProvider } from './context/MetricsContext';
// import { gapi } from 'gapi-script';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const clientId = "3502942640-2hf4ardsu0qtk5e3trrjstdmntf3phnk.apps.googleusercontent.com";
  // console.log(setIsAuthenticated)
  // useEffect(() => {
  //   const start = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     });
  //   };
  //   gapi.load('client:auth2', start);
  // });

  return (
    <div>
      <Router>
        <MetricsProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </MetricsProvider>
      </Router>
    </div>
  );
}

export default App;
