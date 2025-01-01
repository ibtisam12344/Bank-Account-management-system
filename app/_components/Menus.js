"use client";

import Link from "next/link";

function Menus({ accountDetails }) {
  let options;
  if (accountDetails.isAdmin === false)
    options = [
      { id: 1, label: "Withdraw Money", url: "/dashboard/withdraw" },
      { id: 2, label: "Deposit", url: "/dashboard/deposit" },
      { id: 3, label: "View Transactions", url: "/dashboard/transactions" },
      { id: 4, label: "Transfer Money", url: "/dashboard/transfer" },
      { id: 5, label: "Settings", url: "/dashboard/settings" },
    ];
  else
    options = [
      { id: 6, label: "View All Accounts", url: "/dashboard/accounts" },
    ];

  return (
    <div className="mt-2 bg-gradient-to-b from-blue-100 to-blue-300 p-4 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {options.map((option) => (
          <li
            key={option.id}
            className="p-4  bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md cursor-pointer text-center font-medium text-white transition-transform transform hover:scale-105"
          >
            <Link href={option.url} className="block">
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menus;
