import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ newamt }) => {
  const total = newamt.map((pr) => {
    return parseInt(pr.amt);
  });
  const names = newamt.map((pr) => {
    return pr.item;
  });

  return (
    <div>
      <div className="mainchart">
        <div className="chart">
          <Doughnut
            data={{
              labels: names,
              options: {
                animation: {
                  duration: 0,
                },
                hover: {
                  animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
                maintainAspectRatio: false,
              },
              datasets: [
                {
                  label: "Items",
                  data: total,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                  ],
                  borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
