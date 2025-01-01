"use client";

import { useAccountDetails } from "./AccountDetailsContext";
import AccountFrozenPage from "./AccountFrozenPage";
import { format } from "date-fns"; // You can use date-fns for date formatting

function Transactions() {
  const { accountDetails } = useAccountDetails();

  const transactions = accountDetails.recentTransactions;

  if (accountDetails.frozen) return <AccountFrozenPage />;

  // Format dates and times if required
  const formatDate = (date) => format(new Date(date), "MMMM dd, yyyy");

  const formatTime = (time) => {
    // Parse the time correctly
    const [hours, minutes, seconds] = time.split(":");
    const formattedTime = `1970-01-01T${hours}:${minutes}:${seconds}Z`; // Set the time with a valid date
    return format(new Date(formattedTime), "hh:mm a");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full my-5 ">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Transaction History
      </h1>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions available</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-gray-800 font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(transaction.date)}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    transaction.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  ${transaction.amount}
                </p>
                <p className="text-sm text-gray-500">
                  {formatTime(transaction.time)}{" "}
                  {/* Here we call the formatTime function */}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;
