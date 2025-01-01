"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAccountDetails } from "@/app/_components/AccountDetailsContext";
import UpdateBalance from "@/app/_components/UpdateBalance";
import AccountFrozenPage from "./AccountFrozenPage";

function Withdraw() {
  const { accountDetails, setAccountDetails } = useAccountDetails();
  const [amount, setAmount] = useState("");

  if (accountDetails?.frozen) return <AccountFrozenPage />;

  const handleWithdraw = () => {
    // Check if the transaction count exceeds the limit
    if (accountDetails.transactionCount >= accountDetails.limit) {
      toast.error(
        `Transaction limit reached. Max transactions: ${accountDetails.limit}`
      );
      return;
    }

    // Validate the withdrawal amount
    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    // Check if the user has sufficient balance
    if (numericAmount > accountDetails.balance) {
      toast.error("Insufficient funds.");
      return;
    }

    // Proceed with the withdrawal
    UpdateBalance(numericAmount, "withdraw", setAccountDetails);
    toast.success("Successfully Withdrawn!");

    // Clear the input field
    setAmount("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Withdraw Money
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
          placeholder="Enter amount to withdraw"
        />
      </div>
      <button
        onClick={handleWithdraw}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Withdraw
      </button>

      {/* Display transaction count and balance */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Transaction Count: {accountDetails.transactionCount} /{" "}
          {accountDetails.limit}
        </p>
        <p>Available Balance: ${accountDetails.balance}</p>
      </div>
    </div>
  );
}

export default Withdraw;
