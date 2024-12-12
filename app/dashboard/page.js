"use client";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";
import BankCard from "../_components/BankCard";
import { useAccountDetails } from "../_components/AccountDetailsContext";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);

export default function Dashboard() {
  const accountDetails = useAccountDetails();

  const incomeRef = useRef(null);
  const expenseRef = useRef(null);

  useEffect(() => {
    if (incomeRef.current && expenseRef.current) {
      new ChartJS(incomeRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Income",
              data: accountDetails.incomeGraphData,
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

      new ChartJS(expenseRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Expenses",
              data: accountDetails.expenseGraphData,
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
  }, [accountDetails]);

  return (
    <div className="container mx-auto p-6 bg-gray-50 flex flex-col space-y-6">
      {/* My Card and Transactions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[50vh] flex flex-col md:flex-row items-start md:space-x-6">
        {/* Card Section */}
        <div>
          <BankCard accountDetails={accountDetails} />
        </div>

        {/* Transactions Section */}
        <div className="mt-2 md:mt-0 bg-gradient-to-t from-purple-200 to-purple-500 rounded-lg py-2 w-full px-4 h-full">
          <h4 className="text-lg font-semibold mb-2 text-gray-800">
            Recent Transactions
          </h4>
          <ul className="space-y-3 mx-auto">
            {accountDetails.recentTransactions.map((transaction) => (
              <li
                key={transaction.id}
                className="px-3 py-1 bg-purple-100 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">
                    {transaction.name}
                  </span>
                  <span
                    className={`${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    } font-bold`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}$
                    {Math.abs(transaction.amount)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{transaction.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Income vs Expenses Section */}
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
    </div>
  );
}
