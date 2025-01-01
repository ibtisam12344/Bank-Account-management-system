"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import AccountFrozenPage from "./AccountFrozenPage";
import { useAccountDetails } from "@/app/_components/AccountDetailsContext";
import UpdateBalance from "@/app/_components/UpdateBalance";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);

  const { accountDetails, setAccountDetails } = useAccountDetails();

  if (accountDetails?.frozen) return <AccountFrozenPage />;

  const handleTransfer = () => {
    // Check if account is frozen or transaction limit is reached
    if (accountDetails?.transactionCount >= accountDetails?.limit) {
      toast.error("Transaction limit reached.");
      return;
    }

    // Validate amount and recipient
    if (!recipient || !amount) {
      toast.error("Please provide both a recipient and an amount.");
      return;
    }

    // Validate amount format and check for positive value
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid amount greater than 0.");
      return;
    }

    // Check for sufficient funds
    if (numericAmount > accountDetails.balance) {
      toast.error("Insufficient funds.");
      return;
    }

    // Handle the transfer process
    setLoading(true);
    UpdateBalance(numericAmount, "transfer", setAccountDetails);

    toast.success("Successfully Transferred!");

    // Clear input fields
    setAmount("");
    setRecipient("");

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Transfer Money
      </h1>

      <div className="mb-4">
        <label
          htmlFor="recipient"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Recipient
        </label>
        <input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter recipient name"
        />
      </div>

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
          placeholder="Enter amount to transfer"
        />
      </div>

      <button
        onClick={handleTransfer}
        disabled={loading}
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : "Transfer"}
      </button>
    </div>
  );
}

export default Transfer;
