import React, { useContext } from 'react';
import { MetricsContext } from '../context/MetricsContext';

const Filters = () => {
  const { fetchData } = useContext(MetricsContext);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div>
      <button onClick={handleRefresh}>Refresh Data</button>
    </div>
  );
};

export default Filters;
