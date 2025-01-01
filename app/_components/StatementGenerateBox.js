"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { useAccountDetails } from "./AccountDetailsContext";

import GenerateTxt from "./GenerateTxt";
import GeneratePdf from "./GeneratePdf";

function StatementGenerateBox() {
  const [fileFormat, setFileFormat] = useState("");
  const { accountDetails } = useAccountDetails();

  // Handle file format selection
  const handleSelectChange = (e) => {
    setFileFormat(e.target.value);
  };

  // Generate the bank statement based on file type
  const generateBankStatement = (fileType, transactions) => {
    toast.loading("Generating...");

    const month = new Date(transactions[0]?.date).getMonth() + 1;

    switch (fileType) {
      case "txt":
        GenerateTxt(transactions, "IE Bankings", month);
        break;
      case "pdf":
        GeneratePdf(transactions, "IE Bankings", month);
        break;
      default:
        toast.dismiss();
        toast.error("Unsupported file format. Please choose 'txt' or 'pdf'.");
        return;
    }

    toast.dismiss();
    toast.success("Generated bank statements");
  };

  const handleGenerateStatements = () => {
    if (!fileFormat) {
      toast.error("Please select a file format first.");
      return;
    }

    const transactions = accountDetails?.recentTransactions?.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() + 1 === new Date().getMonth() + 1
    );

    if (!transactions || transactions.length === 0) {
      toast.error("No transactions available for the current month.");
      return;
    }

    generateBankStatement(fileFormat, transactions);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor="file-format"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Select File Format:
      </label>
      <select
        id="file-format"
        value={fileFormat}
        onChange={handleSelectChange}
        className="w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
        aria-describedby="file-format-description"
      >
        <option value="">Select Format</option>
        <option value="txt">TXT</option>
        <option value="pdf">PDF</option>
      </select>
      {fileFormat && (
        <div className="mt-2 text-gray-700">
          <strong>Selected Format: </strong>
          {fileFormat.toUpperCase()}
        </div>
      )}
      {!fileFormat && (
        <p id="file-format-description" className="text-sm text-red-500 mt-2">
          Please select a file format to proceed.
        </p>
      )}

      <button
        onClick={handleGenerateStatements}
        className={`py-2 px-4 text-white font-semibold rounded-md transition bg-green-500 hover:bg-green-600 mt-4`}
      >
        Done
      </button>
    </div>
  );
}

export default StatementGenerateBox;
