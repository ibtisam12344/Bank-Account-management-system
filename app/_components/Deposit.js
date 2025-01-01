"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useAccountDetails } from "@/app/_components/AccountDetailsContext";
import UpdateBalance from "@/app/_components/UpdateBalance";
import AccountFrozenPage from "./AccountFrozenPage";

function Deposit() {
  const [amount, setAmount] = useState("");
  const [isClient, setIsClient] = useState(false); // State to check if client-side rendering

  const { accountDetails, setAccountDetails } = useAccountDetails();

  useEffect(() => {
    // Ensure the component runs after it is mounted on the client
    setIsClient(true);
  }, []);

  if (!isClient || !accountDetails) return null; // Prevent rendering until client-side

  if (accountDetails?.frozen) return <AccountFrozenPage />;

  const handleDeposit = () => {
    if (accountDetails.transactionCount >= accountDetails.limit) {
      toast.error("Transaction limit reached.");
      return;
    }
    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    UpdateBalance(numericAmount, "deposit", setAccountDetails);
    toast.success("Successfully Deposited!");
    setAmount("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Deposit Money
      </h1>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Amount ($)
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter amount to deposit"
        />
      </div>
      <button
        onClick={handleDeposit}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Deposit
      </button>
    </div>
  );
}

export default Deposit;
