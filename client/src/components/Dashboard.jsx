import React from 'react';
import DataVisualization from './DataVisualization';
// import Filters from './Filters';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box p={4}>
      <Typography variant="h1" gutterBottom>
        Website Engagement Overview
      </Typography>
      {/* <Filters /> */}
      <DataVisualization />
    </Box>
  );
};

export default Dashboard;
