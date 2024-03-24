import React, { useContext, useEffect, useState } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import { Bar, Pie, Line } from 'react-chartjs-2';
import axios from 'axios';
import Chart from 'chart.js/auto';
import _ from 'lodash';


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
          return dateParts[0]; // Extracted date part
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
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
        chart.labels = _.sortBy(chart.labels, date => new Date(date));
      }
    });
  
    // Sort the data arrays for each dataset based on the sorted labels
    _.forEach(sortedChartData, (chart) => {
      if (chart && chart.datasets) {
        chart.datasets.forEach(dataset => {
          dataset.data = _.sortBy(dataset.data, dataPoint => dataPoint);
        });
      }
    });
  
    console.log(sortedChartData)
    // Set the sorted chart data
    setChartData(sortedChartData);
  };

  
  
    
    
  

  return (
    <div>
      {chartData ? (
        <div>
          <button onClick={sortDataByDate}>Sort by Date</button>
          <Bar data={chartData.pageViewsChart} />
          <Pie data={chartData.bounceRateChart} />
          <Line data={chartData.avgSessionDurationChart} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DataVisualization;
