import { Line } from "react-chartjs-2" 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { lineChartData } from "../FAKE_DATA";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "bottom",
      },
      // title: {
      //   display: true,
      //   text: "This is a graph representing my daily steps",
      // },
    },
  };

  return (
    <>
     <Line options={options} data={lineChartData}/>
    </>
  )
}

export default LineGraph
