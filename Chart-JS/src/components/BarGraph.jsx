import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
//importing data
import { barChartData } from "../FAKE_DATA";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const options = {};

    return (
      <>
       <Bar options={options} data={barChartData}/>
      </>
    )
  }
  
  export default BarGraph