import React, { useContext, useEffect, useState } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import { Bar, Pie, Line } from 'react-chartjs-2';
import axios from 'axios';
import { Typography, Box, Button } from '@mui/material';
import Chart from 'chart.js/auto';
import _ from 'lodash';
import '../styles/Data.css'

const DataVisualization = () => {
  const { metrics } = useContext(MetricsContext);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/metrics');
      const data = response.data;

      // Extracting data for charts
      const labels = data.map(metric => {
        // Check if metric.date exists before splitting
        if (metric.date) {
          // Extract only the date part from the full date-time string
          const dateParts = metric.date.split('T');
          // return dateParts[0];
          const newData = dateParts[0];
          const newdateParts = newData.split('-');
          const formattedDate = `${newdateParts[2]}-${newdateParts[1]}-${newdateParts[0]}`;
          return formattedDate;
        }
        return ''; // Return an empty string if date is undefined
      });
      const pageViews = data.map(metric => metric.pageViews);
      const bounceRates = data.map(metric => metric.bounceRate);
      const avgSessionDurations = data.map(metric => metric.averageSessionDuration);

      // Setting chart data
      setChartData({
        pageViewsChart: {
          labels: labels,
          datasets: [
            {
              label: 'Page Views',
              data: pageViews,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        bounceRateChart: {
          labels: labels,
          datasets: [
            {
              label: 'Bounce Rate',
              data: bounceRates,
              backgroundColor: getRandomColors(bounceRates.length),
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
            },
          ],
        },
        avgSessionDurationChart: {
          labels: labels,
          datasets: [
            {
              label: 'Average Session Duration',
              data: avgSessionDurations,
              // backgroundColor: getRandomColors(avgSessionDurations.length),
              fill: false,
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1,
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortDataByDate = () => {
    // Clone the chartData object
    const sortedChartData = _.cloneDeep(chartData);
  
    // Sort the labels array using lodash for each dataset
    _.forEach(sortedChartData, (chart) => {
      if (chart && chart.labels) {
          chart.labels.sort((a, b) => {
              const [dayA, monthA, yearA] = a.split('-').map(Number);
              const [dayB, monthB, yearB] = b.split('-').map(Number);
              
              // First, compare years
              if (yearA !== yearB) {
                  return yearA - yearB;
              }
              // If years are equal, compare months
              if (monthA !== monthB) {
                  return monthA - monthB;
              }
              // If months are equal, compare days
              return dayA - dayB;
          });
      }
  });
  
  
    // Sort the data arrays for each dataset based on the sorted labels
    _.forEach(sortedChartData, (chart) => {
      if (chart && chart.datasets) {
        chart.datasets.forEach(dataset => {
          // console.log(dataset.data);
          dataset.data = _.sortBy(dataset.data, dataPoint => dataPoint);
        });
      }
    });
  
    console.log(sortedChartData)
    // Set the sorted chart data
    setChartData(sortedChartData);
  };

  const getRandomColors = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.4)`;
      colors.push(color);
    }
    return colors;
  };

  const pieChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Bounce Rate', 
      },
      legend: {
        position: 'bottom', // Adjust the legend position here
        align: 'middle', // Align the legend items to start from the top
        labels: {
          padding: 10,
          font: {
            size: 6, // Adjust font size for legend labels
          },// Add padding between legend items
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    
    rotation: 0.5 * Math.PI, // Adjust the starting angle here
  };



  const chartOptions = {
    // Other options...
    scales: {
      // Configure your scales here...
      x: {
        ticks: {
          font: {
            size: 6, // Initial font size for labels
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 7, // Initial font size for labels
          },
        },
      },
    },
  };

  return (
    <Box mt={4}>
      {chartData ? (
        <Box className="chart-container">
          <Button onClick={sortDataByDate} variant="contained" color="primary" mb={2} sx={{
          fontSize: '1rem', // Default font size
          '@media (min-width: 768px) and (max-width: 1024px)': {
            fontSize: '0.8rem', // Font size for tablets
          },
          '@media (max-width: 767px)': {
            fontSize: '0.5rem', // Font size for mobile devices
          },
        }}>
            Sort by Date
          </Button>
            <Bar data={chartData.pageViewsChart} options={chartOptions} className="chart-item" />
            <br/>
            <Pie data={chartData.bounceRateChart} options={pieChartOptions} className="chart-item" />
            <br/>
            <Line data={chartData.avgSessionDurationChart} options={chartOptions} className="chart-item" />
            <br/>
        </Box>
      ) : (
        <div className="loading-message">Loading...</div>
      )}
    </Box>
  );
  
};

export default DataVisualization;