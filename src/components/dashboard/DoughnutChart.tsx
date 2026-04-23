import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
const data = {
  labels: ["Shirts", "Shoes", "Bags"],
  datasets: [
    {
      data: [33, 33, 34],
      backgroundColor: ["#3b82f6", "#14b8a6", "#7c3aed"],
      borderWidth: 2,
    },
  ],
};

export default function RevenueChart() {
  return(   
       <div className="w-full h-full min-h-75">
      <Doughnut data={data} options={options} />
    </div>

  )}