"use client";
import { useState } from "react";

export default function TransferPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTransfer = () => {
    if (!amount || isNaN(amount) || amount <= 0 || !recipient) {
      alert("Please enter valid details.");
      return;
    }
    alert(`Successfully transferred $${amount} to ${recipient}`);
    setAmount("");
    setRecipient("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Transfer
        </button>
      </div>
    </div>
  );
}
