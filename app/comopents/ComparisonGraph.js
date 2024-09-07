import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonGraph = ({ userPercentile, averagePercentile }) => {
  // Ensure data reflects the updated props
  console.log(userPercentile);
  
  const data = {
    labels: Array.from({ length: 101 }, (_, i) => i), // 0 to 100
    datasets: [
      {
        label: 'Percentile Distribution',
        data: [10, 15, 25, 35, 45, 55, 65, 70, 85, 90, 95, 100],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Your Percentile',
        data: Array.from({ length: 101 }, (_, i) =>
          i === userPercentile ? averagePercentile : null
        ),
        borderColor: 'rgba(255,99,132,1)',
        pointRadius: 5,
        showLine: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ComparisonGraph;
