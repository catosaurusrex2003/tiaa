"use client";
import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";

// const data = ;

export function DoubleBarPlot() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartRef.current) {
      // @ts-ignore
      chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Dataset 1",
              categoryPercentage: 1.0, // here
              barPercentage: 0.6, // here
              barThickness: 10,
              borderRadius: {
                topLeft: 15,
                topRight: 15,
              },
              grouped: true,
              data: Array.from({ length: 10 }, () => ({
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100),
              })),
              backgroundColor: "rgb(213,213,213)",
              stack: "Stack 0",
            },
            {
              label: "Dataset 2",
              categoryPercentage: 1.0, // here
              barPercentage: 0.6, // here
              barThickness: 10,
              borderRadius: {
                topLeft: 15,
                topRight: 15,
              },
              grouped: true,
              data: Array.from({ length: 10 }, () => ({
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100),
              })),
              backgroundColor: "rgb(16,161,113)",
              stack: "Stack 1",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: "Chart.js Bar Chart - Stacked",
            },
          },
          responsive: true,
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              display: false,
              stacked: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full w-full sm:w-10/12 mx-auto">
      <canvas id="new" ref={chartRef} />
    </div>
  );
}
