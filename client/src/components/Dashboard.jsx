import React from 'react';
import DataVisualization from './DataVisualization';
// import Filters from './Filters';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box p={4} sx={{ 
      '& .MuiTypography-h1': {
        fontSize: '5rem', // Default font size
        '@media (min-width: 768px) and (max-width: 1024px)': {
          fontSize: '3rem', // Font size for tablets
        },
        '@media (max-width: 767px)': {
          fontSize: '2rem', // Font size for mobile devices
        },
      },
    }}>
      <Typography variant="h1" gutterBottom>
        Website Engagement Overview
      </Typography>
      {/* <Filters /> */}
      <DataVisualization />
    </Box>
  );
};

export default Dashboard;