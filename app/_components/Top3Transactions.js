"use client";

import { format } from "date-fns";
import { useAccountDetails } from "./AccountDetailsContext";

function Top3Transactions() {
  const { accountDetails } = useAccountDetails();
  return (
    <div className="mt-2 md:mt-0 bg-gradient-to-t from-purple-200 to-purple-500 rounded-lg py-2 w-full px-4 h-full">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">
        Recent Transactions
      </h4>
      <ul className="space-y-3 mx-auto">
        {accountDetails?.recentTransactions?.slice(0, 3)?.map((transaction) => (
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
            <p className="text-gray-500 text-sm mb-1">
              {format(new Date(transaction.date), "MM/dd")}{" "}
              {/* Format the date here */}
            </p>
          </li>
        )) || <li>No transactions available.</li>}
      </ul>
    </div>
  );
}

export default Top3Transactions;
