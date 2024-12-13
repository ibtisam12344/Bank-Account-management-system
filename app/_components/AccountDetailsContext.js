"use client";

import { createContext, useContext } from "react";

// Define the context
const AccountDetailsContext = createContext();

// Initial account details
const AccountDetails = {
  name: "Ibtisam Abid",
  email: "ibtisamtech88@gmail.com",
  password: "ibtisam",
  totalIncome: 10454,
  totalExpenses: 48780,
  currentBalance: 69541,
  accountNumber: 12345678,
  recentTransactions: [
    { id: 1, name: "Eshal", date: "June 1 at 3pm", amount: -70 },
    { id: 2, name: "Ibtisam", date: "June 5 at 5pm", amount: 45 },
    { id: 3, name: "Whites", date: "June 1 at 8pm", amount: -10 },
  ],
  myCard: {
    cardNumber: "5489 4542 1007 11489",
    expiry: "09/26",
  },
  incomeGraphData: [1951, 19555, 12023, 193, 491, 3951, 521],
  expenseGraphData: [1971, 2024, 2910, 3915, 8920, 11910, 50],
};

// Context provider component
function AccountDetailsProvider({ children }) {
  return (
    <AccountDetailsContext.Provider value={AccountDetails}>
      {children}
    </AccountDetailsContext.Provider>
  );
}

export default AccountDetailsProvider;

// Hook to use account details context
function useAccountDetails() {
  const context = useContext(AccountDetailsContext);

  if (context === undefined) {
    throw new Error(
      "useAccountDetails must be used within an AccountDetailsProvider"
    );
  }

  return context;
}

export { AccountDetailsProvider, useAccountDetails };
