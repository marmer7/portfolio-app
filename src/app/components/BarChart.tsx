import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "../context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  labels: string[];
  values: number[];
}

// Defining colors for light and dark modes
const LIGHT_COLOR = "rgba(26, 145, 218, 1)"; // A moderate blue color for the outline in light mode
const LIGHT_BG_COLOR = "rgba(26, 145, 218, 0.2)"; // A light blue color (same hue but lighter) for the bar filling in light mode
const DARK_COLOR = "rgba(255, 99, 132, 1)"; // A bright pink color for the outline in dark mode
const DARK_BG_COLOR = "rgba(255, 99, 132, 0.2)"; // A light pink color (same hue but lighter) for the bar filling in dark mode

const BarChart: React.FC<BarChartProps> = ({ labels, values }) => {
  const { isDarkMode } = useTheme();

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Technical Skills",
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "white" : "black", // Change x-axis labels color based on the theme
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Change grid line color based on the theme
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "white" : "black", // Change y-axis labels color based on the theme
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Change grid line color based on the theme
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: isDarkMode ? DARK_COLOR : LIGHT_COLOR,
        backgroundColor: isDarkMode ? DARK_BG_COLOR : LIGHT_BG_COLOR,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
