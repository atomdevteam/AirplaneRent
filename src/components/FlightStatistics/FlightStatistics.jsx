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

function FlightStatistics(){


    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Reserved',
                backgroundColor: 'rgba(44, 44, 44, 1)',
                borderColor: 'rgba(44, 44, 44, 1)',
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.6)',
                hoverBorderColor: 'rgba(0, 0, 0, 1)',
                data: [1, 1, 2, 3, 4, 3, 5],
                barThickness: 18,
            },
            {
                label: 'Unreserved',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255, 165, 0, 0.4)',
                hoverBorderColor: 'rgba(255, 165, 0, 1)',
                data: [6, 6, 6, 6, 6, 6, 6],
                barThickness: 18,
            },
        ],
    };


    const options = {
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
                        if (value === 0) return '0h'
                        if (value === 1) return '1h';
                        if (value === 2) return '2h';
                        if (value === 3) return '3h';
                        if (value === 4) return '4h';
                        if (value === 5) return '5h';
                        if (value === 6) return '6h';
                    },
                },
                maxTicksLimit: 5, // Ajusta el número máximo de ticks
                autoSkip: true, // Permite saltar automáticamente algunos ticks
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
        <div className=" max-w-screen-lg mx-auto mt-8 bg-[#2C2C2C] rounded-xl ">
            <div className="mb-4">
                <h2 className="text-xl text-white font-bold leading-tight">Total Reserves</h2>
            </div>
            <Bar data={data} options={options} width={640}  height={200}/>
        </div>
    );
}

export default FlightStatistics