import React from 'react';
import DataVisualization from './DataVisualization';
import Filters from './Filters';

const Dashboard = () => {
  return (
    <div>
      <h1>Website Engagement Overview</h1>
      <Filters />
      <DataVisualization />
    </div>
  );
};

export default Dashboard;
