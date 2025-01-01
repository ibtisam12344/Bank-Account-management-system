function GenerateTxt(transactions, bankName, monthName) {
  // Create a header with the bank name and statement month
  let textContent = `${bankName}\n${monthName} Statement\n`;
  textContent += `${"-".repeat(80)}\n`; // Line separator

  // Add table headers
  textContent += `No.  | Transaction Name         | Amount ($) | Date       | Time\n`;
  textContent += `${"-".repeat(80)}\n`; // Line separator

  // Loop through the transactions to format them
  transactions.forEach((transaction, index) => {
    const transactionAmount = `$${transaction.amount.toFixed(2)}`;
    const transactionDate = transaction.date;
    const transactionTime = transaction.time;

    // Ensure each part fits within its column size
    textContent += `${(index + 1).toString().padEnd(5)}`; // Align No. column
    textContent += `${transaction.name.padEnd(25)}`; // Align Transaction Name column
    textContent += `${transactionAmount.padEnd(12)}`; // Align Amount column
    textContent += `${transactionDate.padEnd(12)}`; // Align Date column
    textContent += `${transactionTime}\n`; // Time column
  });

  // Add footer with the current date (consistent format)
  textContent += `${"-".repeat(80)}\n`; // Line separator
  const currentDate = new Date().toLocaleDateString("en-US"); // Ensure consistent format
  textContent += `Generated on: ${currentDate}\n`;

  // Create a Blob and trigger the download
  const blob = new Blob([textContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `bank_statement_${currentDate}.txt`;
  link.click();
}

export default GenerateTxt;
