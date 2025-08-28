"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Stats({id}) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Bar chart data (Allocated vs Redeemed)
  const barOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      foreColor: "#fff",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: { categories: days },
    yaxis: { labels: { style: { colors: "#ccc" } } },
    legend: { labels: { colors: "#fff" } },
    colors: ["#6366f1", "#ec4899"],
    grid: { borderColor: "#444" },
    tooltip: {
      theme: "dark",
    },
  };

  const barSeries = [
    { name: "Allocated", data: [8000, 7000, 6000, 7500, 5000, 5500, 6000] },
    { name: "Redeemed", data: [2000, 1500, 1200, 1800, 900, 800, 800] },
  ];

  // Line chart data (Customers gained)
  const lineOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      foreColor: "#fff",
    },
    stroke: { curve: "smooth", width: 3 },
    dataLabels: { enabled: false },
    markers: { size: 6, colors: ["#10b981"], strokeColors: "#fff", strokeWidth: 2 },
    xaxis: { categories: days },
    yaxis: { labels: { style: { colors: "#ccc" } } },
    colors: ["#10b981"],
    grid: { borderColor: "#444" },
    tooltip: { theme: "dark" },
  };

  const lineSeries = [
    { name: "Customers Gained", data: [50, 70, 90, 65, 120, 150, 180] },
  ];

  const otherStats = [
    {
      title: "Weekly Transactions",
      value: "580",
      description: "Users transacted at Bulawayo Center Shop",
      color: "bg-yellow-400",
    },
    {
      title: "Offers Converted",
      value: "120",
      description: "Special offers redeemed across shops",
      color: "bg-green-400",
    },
    {
      title: "Audits Completed",
      value: "100%",
      description: "Shop floats automatically verified",
      color: "bg-indigo-400",
    },
  ];

  return (
    <section id={id} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Quick Insights</h2>
        <p className="text-gray-300 mb-16">
          A glimpse at how Zimora helps your business operate smoothly and
          engage customers.
        </p>

        {/* Bar Chart */}
        <div className="bg-indigo-800 p-6 rounded-xl shadow-lg mb-12">
          <h3 className="text-xl font-bold mb-6">Points Allocated vs Redeemed</h3>
          <Chart options={barOptions} series={barSeries} type="bar" height={300} />
        </div>

        {/* Line Chart */}
        <div className="bg-indigo-800 p-6 rounded-xl shadow-lg mb-12">
          <h3 className="text-xl font-bold mb-6">Customers Gained This Week</h3>
          <Chart options={lineOptions} series={lineSeries} type="line" height={300} />
        </div>

        {/* Other Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherStats.map((stat, index) => (
            <div
              key={index}
              className="bg-indigo-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-200">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-300 mb-4 text-sm">{stat.description}</p>
              <div className={`h-2 w-full ${stat.color} rounded`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
