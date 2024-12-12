"use client";

import Link from "next/link";
import { useAccountDetails } from "./AccountDetailsContext";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Menu() {
  const [showDetails, setShowDetails] = useState(false);

  const options = [
    { id: 1, label: "Withdraw Money", url: "/dashboard/withdraw" },
    { id: 2, label: "Deposit", url: "/dashboard/deposit" },
    { id: 3, label: "View Transactions", url: "/dashboard/transactions" },
    { id: 4, label: "Transfer Money", url: "/dashboard/transfer" },
    { id: 5, label: "Settings", url: "/dashboard/settings" },
  ];

  const accountDetails = useAccountDetails();

  return (
    <aside className="w-full md:max-w-xs lg:max-w-sm bg-gradient-to-b from-blue-500 to-blue-700 text-white flex-shrink-0 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Welcome, {accountDetails.name}
      </h2>
      <p className="text-sm leading-relaxed flex items-center">
        Account Balance :
        <span className="font-semibold ml-2">
          $
          {showDetails
            ? accountDetails.currentBalance
            : "*".repeat(accountDetails.currentBalance.toString().length)}
        </span>
        <button
          className="ml-auto p-1 text-white rounded"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <HiEyeOff className="w-5 h-5" />
          ) : (
            <HiEye className="w-5 h-5" />
          )}
        </button>
      </p>

      <p className="text-sm leading-relaxed">
        Account Number :
        <span className="font-semibold ml-1">
          {showDetails
            ? accountDetails.accountNumber
            : "*".repeat(accountDetails.accountNumber.toString().length)}
        </span>
      </p>

      <div className="mt-6 bg-gradient-to-b from-blue-100 to-blue-300 p-4 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {options.map((option) => (
            <Link href={option.url} key={option.id} className="block">
              <li className="p-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md cursor-pointer text-center font-medium text-white transition-transform transform hover:scale-105">
                {option.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Menu;
