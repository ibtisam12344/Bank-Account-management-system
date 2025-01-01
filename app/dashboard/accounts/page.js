"use client";

import { useState } from "react";
import TransactionsRow from "@/app/_components/TransactionsRow";

function Page() {
  const accountsData = [
    {
      id: 1,
      name: "John Doe",
      accountNumber: "123456789",
      balance: "$1,250.00",
      transactions: [
        { id: 1, type: "Deposit", amount: "$500.00", date: "2024-01-01" },
        { id: 2, type: "Withdrawal", amount: "$200.00", date: "2024-01-05" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      accountNumber: "987654321",
      balance: "$2,500.00",
      transactions: [
        { id: 1, type: "Deposit", amount: "$1000.00", date: "2024-01-02" },
        { id: 2, type: "Withdrawal", amount: "$300.00", date: "2024-01-06" },
      ],
    },
    // More accounts can be added here
  ];

  const [accounts, setAccounts] = useState(accountsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredAccounts = accountsData.filter(
      (account) =>
        account.name.toLowerCase().includes(value) ||
        account.accountNumber.includes(value)
    );

    setAccounts(filteredAccounts);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          View All Accounts
        </h1>

        {/* Search Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Name or Account Number"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Accounts Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">Account ID</th>
                <th className="py-2 px-4">Account Holder</th>
                <th className="py-2 px-4">Account Number</th>
                <th className="py-2 px-4">Balance</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {accounts.length > 0 ? (
                accounts.map((account) => (
                  <TransactionsRow key={account.id} account={account} />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-gray-500 font-semibold"
                  >
                    No accounts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
