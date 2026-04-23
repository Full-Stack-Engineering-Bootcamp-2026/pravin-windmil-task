import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Organic",
      data: [43, 48, 40, 54, 67, 73, 70],
      borderColor: "#14b8a6",
      tension: 0.4,
    },
    {
      label: "Paid",
      data: [24, 50, 64, 74, 52, 51, 65],
      borderColor: "#7c3aed",
      tension: 0.4,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false, // 👈 missing in your TrafficChart
};
export default function TrafficChart() {
  return (
    <div className="w-full h-fulln min-h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
}
