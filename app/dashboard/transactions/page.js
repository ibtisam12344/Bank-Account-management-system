export default function Page() {
  const transactions = [
    { id: 1, type: "Deposit", amount: 500, date: "2024-12-10" },
    { id: 2, type: "Withdraw", amount: 200, date: "2024-12-11" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Transaction History
        </h1>
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-gray-800 font-medium">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <p className="text-gray-800">${transaction.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
