import React from "react";
import { Doughnut } from "react-chartjs-2";
import RevenueChart from "./DoughnutChart";
import TrafficChart from "./LineChart";


function ChartComp() {
  return (
    <div className="">
        <h1 className=" text-xl font-semibold py-2 ">Charts</h1>
        
        <div className="flex flex-col md:flex-row">

      <RevenueChart />
      <TrafficChart/>
        </div>
   
    </div>
  );
}

export default ChartComp;
