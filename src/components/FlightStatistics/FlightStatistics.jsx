import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function FlightStatistics() {
  const [selectedOption, setSelectedOption] = useState('');

  const optionss = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Unreserved',
        backgroundColor: 'rgba(255, 165, 0, 1)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: 'rgba(255, 165, 0, 0.4)',
        hoverBorderColor: 'rgba(255, 165, 0, 1)',
        data: [6, 6, 6, 6, 6, 6],
        barThickness: 18,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Permite que el gráfico no mantenga su aspecto original
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stepSize: 1,
        ticks: {
          callback: (value) => {
            if (value === 0) return '0h';
            if (value === 1) return '1h';
            if (value === 2) return '2h';
            if (value === 3) return '3h';
            if (value === 4) return '4h';
            if (value === 5) return '5h';
          },
        },
        maxTicksLimit: 5,
        autoSkip: true,
        grid: {
          display: true,
          drawBorder: false,
          drawTicks: false,
          color: 'rgba(75, 85, 99, 1)',
          zeroLineColor: 'rgba(75, 85, 99, 1)',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto bg-[#2C2C2C] rounded-xl p-4">
      <div className="flex justify-between ">
        <div className="mb-4">
          <h2 className="text-xl text-white font-bold leading-tight">Flight Statistics</h2>
        </div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="py-3 px-4 mr-[2rem] block  pb-2 text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
        >
          <option value="" disabled selected hidden>
            Filter by date
          </option>
          {optionss.map((option) => (
            <option className='text-black' key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <div className="h-72 w-full lg:mx-4 xl:mx-8">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default FlightStatistics;
