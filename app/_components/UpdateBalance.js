import toast from "react-hot-toast";

function UpdateBalance(money, type, setAccountDetails) {
  const amount = Number(money);
  const today = new Date();
  const date = today.toISOString().slice(0, 10); // Format: YYYY-MM-DD
  const time = today.toLocaleTimeString("en-US", { hour12: false }); // Format: HH:mm:ss

  // Updated function to calculate the balance and return the updated account details
  const calculatedBalanceObj = (prevDetails) => {
    const updatedDetails = { ...prevDetails };

    // Ensure the transaction amount is valid (positive numbers)
    if (isNaN(amount) || amount <= 0) {
      toast.error("Invalid transaction amount.");
      return prevDetails; // No update
    }

    // Handle deposit transaction
    if (type === "deposit") {
      updatedDetails.income = [...updatedDetails.income, amount];
      updatedDetails.balance += amount; // Update balance on deposit
      updatedDetails.recentTransactions = [
        ...updatedDetails.recentTransactions,
        {
          id: updatedDetails.recentTransactions.length + 1,
          name: "Deposit",
          date,
          amount,
          time,
        },
      ];
      updatedDetails.transactionCount += 1;
    }
    // Handle withdraw or transfer transaction
    else if (type === "withdraw" || type === "transfer") {
      if (updatedDetails.balance < amount) {
        toast.error("Insufficient funds for withdrawal or transfer.");
        return prevDetails; // No update
      }
      updatedDetails.expenses = [...updatedDetails.expenses, amount];
      updatedDetails.balance -= amount; // Update balance on withdrawal/transfer
      updatedDetails.recentTransactions = [
        ...updatedDetails.recentTransactions,
        {
          id: updatedDetails.recentTransactions.length + 1,
          name: type === "withdraw" ? "Withdrawal" : "Transfer",
          date,
          amount: -amount,
          time,
        },
      ];
      updatedDetails.transactionCount += 1;
    }
    // Handle invalid transaction type
    else {
      toast.error("Invalid transaction type.");
      return prevDetails; // No update
    }

    // Limit the number of recent transactions (e.g., keep only the last 50 transactions)
    if (updatedDetails.recentTransactions.length > 50) {
      updatedDetails.recentTransactions.shift(); // Remove the oldest transaction
    }

    return updatedDetails; // Return the updated state
  };

  // Call setAccountDetails to update the state safely
  setAccountDetails((prevDetails) => {
    const updatedDetails = calculatedBalanceObj(prevDetails);

    return updatedDetails;
  });
}

export default UpdateBalance;
