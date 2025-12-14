import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./styles.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartProps {
  data: ChartData<"doughnut", number[], string>;
}

const DoughnutChart = ({ data }: DoughnutChartProps) => {
    const {chart} = styles;
  return <Doughnut data={data} className={chart}/>;
};

export default DoughnutChart;
