import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MetricsContext = createContext();

const MetricsProvider = ({ children }) => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/metrics');
      setMetrics(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <MetricsContext.Provider value={{ metrics, fetchData }}>
      {children}
    </MetricsContext.Provider>
  );
};

export { MetricsContext, MetricsProvider };
