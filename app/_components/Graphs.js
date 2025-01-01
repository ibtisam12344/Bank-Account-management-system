"use client";

import { format } from "date-fns"; // Importing date-fns for date formatting
import { useEffect, useRef } from "react";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useAccountDetails } from "./AccountDetailsContext";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);
function Graphs() {
  const { accountDetails } = useAccountDetails();
  // Extract top income and expense transactions
  const getTopTransactions = (transactions = [], isIncome) => {
    const topTransactions = [];
    let count = 0;

    for (let i = transactions.length - 1; i >= 0; i--) {
      const transaction = transactions[i];
      if (
        (isIncome && transaction.amount > 0) ||
        (!isIncome && transaction.amount < 0)
      ) {
        topTransactions.push(transaction);
        count++;
        if (count === 7) break; // Stop once we have 7 transactions
      }
    }

    return topTransactions.reverse(); // Reverse at the end to maintain order
  };

  const topTransactionsIncome = getTopTransactions(
    accountDetails?.recentTransactions || [],
    true
  );
  const topTransactionsExpense = getTopTransactions(
    accountDetails?.recentTransactions || [],
    false
  );

  // Format the date (month/day)
  const labelsIncome = topTransactionsIncome.map(
    (transaction) => format(new Date(transaction.date), "MM/dd") // Use date-fns to format date as month/day
  );
  const labelsExpenses = topTransactionsExpense.map(
    (transaction) => format(new Date(transaction.date), "MM/dd") // Format date here too
  );

  const incomeData = topTransactionsIncome.map(
    (transaction) => transaction.amount
  );
  const expenseData = topTransactionsExpense.map((transaction) =>
    Math.abs(transaction.amount)
  );

  const incomeRef = useRef(null);
  const expenseRef = useRef(null);
  const incomeChartRef = useRef(null);
  const expenseChartRef = useRef(null);

  useEffect(() => {
    // Clean up previous charts
    if (incomeChartRef.current) incomeChartRef.current.destroy();
    if (expenseChartRef.current) expenseChartRef.current.destroy();

    // Create new income chart
    if (incomeRef.current) {
      incomeChartRef.current = new ChartJS(incomeRef.current, {
        type: "bar",
        data: {
          labels: labelsIncome,
          datasets: [
            {
              label: "Income",
              data: incomeData,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    // Create new expense chart
    if (expenseRef.current) {
      expenseChartRef.current = new ChartJS(expenseRef.current, {
        type: "bar",
        data: {
          labels: labelsExpenses,
          datasets: [
            {
              label: "Expenses",
              data: expenseData,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      // Cleanup on component unmount
      if (incomeChartRef.current) incomeChartRef.current.destroy();
      if (expenseChartRef.current) expenseChartRef.current.destroy();
    };
  }, [labelsIncome, labelsExpenses, incomeData, expenseData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Income vs Expenses
      </h3>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <div className="p-4 bg-gradient-to-r from-teal-100 to-teal-300 rounded-lg">
          <h4 className="text-md font-medium mb-2 text-teal-800">Income</h4>
          <canvas ref={incomeRef} className="w-full h-40"></canvas>
        </div>
        <div className="p-4 bg-gradient-to-r from-rose-100 to-rose-300 rounded-lg">
          <h4 className="text-md font-medium mb-2 text-rose-800">Expenses</h4>
          <canvas ref={expenseRef} className="w-full h-40"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
