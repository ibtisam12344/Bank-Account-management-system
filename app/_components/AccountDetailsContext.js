"use client";

import { createContext, useContext, useState } from "react";

const AccountDetailsContext = createContext();

const initialState = {
  id: 8,
  name: "Eshal Atif",
  email: "eshalatif@gmail.com",
  password: "123123123",
  frozen: false,
  limit: 10,
  transactionCount: 6,
  income: [42235],
  expenses: [-70, -10, -10, -10, -10],
  balance: 0,
  accountNumber: 12345678,
  isAdmin: false,
  recentTransactions: [
    {
      id: 1,
      name: "Ali",
      date: "2024-12-25T01:36:34Z",
      amount: -70,
      time: "01:36:34",
    },
    {
      id: 2,
      name: "Eshal",
      date: "2024-12-10T03:23:34Z",
      amount: 42235,
      time: "03:23:34",
    },
    {
      id: 3,
      name: "Ibtisam",
      date: "2023-11-12T05:06:34Z",
      amount: -10,
      time: "05:06:34",
    },
    {
      id: 4,
      name: "Haider",
      date: "2024-12-17T05:06:34Z",
      amount: -10,
      time: "05:06:34",
    },
    {
      id: 5,
      name: "Whites",
      date: "2023-12-22T05:06:34Z",
      amount: -10,
      time: "05:06:34",
    },
    {
      id: 6,
      name: "Abid",
      date: "2023-11-12T05:06:34Z",
      amount: -10,
      time: "05:06:34",
    },
  ],
  Card: { cardNumber: "5489 4542 1007 1148", expiry: "09/26" },
};

function AccountDetailsProvider({ children }) {
  const calculateBalance = (income, expenses) => {
    const totalIncome = income.reduce((sum, value) => sum + value, 0);
    const totalExpenses = expenses.reduce((sum, value) => sum + value, 0);
    const balance = totalIncome + totalExpenses;
    return { totalIncome, totalExpenses, balance };
  };

  const [accountDetails, updateAccountDetails] = useState(() => {
    const { totalIncome, totalExpenses, balance } = calculateBalance(
      initialState.income,
      initialState.expenses
    );
    return {
      ...initialState,
      totalIncome,
      totalExpenses,
      balance,
    };
  });

  const setAccountDetails = (updatedDetails) => {
    updateAccountDetails(updatedDetails);
  };

  return (
    <AccountDetailsContext.Provider
      value={{ accountDetails, setAccountDetails }}
    >
      {children}
    </AccountDetailsContext.Provider>
  );
}

export default AccountDetailsProvider;

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
