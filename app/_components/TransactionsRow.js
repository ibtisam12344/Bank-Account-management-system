"use client";

import ViewDetails from "./ViewDetails";

function TransactionsRow({ account }) {
  return (
    <tr key={account.id} className="hover:bg-gray-50">
      <td className="py-2 px-4">{account.id}</td>
      <td className="py-2 px-4">{account.name}</td>
      <td className="py-2 px-4">{account.accountNumber}</td>
      <td className="py-2 px-4">{account.balance}</td>
      <td className="py-2 px-4">
        {/* Pass the account ID directly to ViewTransactions */}
        <ViewDetails accountId={account.id} />
      </td>
    </tr>
  );
}

export default TransactionsRow;
