import BackBtnClient from "@/app/_components/BackBtnClient";

async function Page({ searchParams }) {
  // Access the query parameter safely
  const id = (await searchParams?.id) || "No ID Provided";

  console.log("ID from URL:", id);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    accountNumber: "1234567890",
    balance: "$1,250.00",
    joinedDate: "2023-01-15",
  };

  const transactions = [
    { id: 1, type: "Deposit", amount: "$500.00", date: "2024-01-01" },
    { id: 2, type: "Withdrawal", amount: "$200.00", date: "2024-01-05" },
    { id: 3, type: "Transfer", amount: "$300.00", date: "2024-01-10" },
    { id: 4, type: "Deposit", amount: "$100.00", date: "2024-01-12" },
    { id: 5, type: "Withdrawal", amount: "$50.00", date: "2024-01-14" },
    // Add more transactions for scrollable content
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <BackBtnClient />

        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          User Details
        </h1>
        <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side: User Details */}
          <div className="w-full md:w-1/3 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">User Info</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 font-semibold">Name</p>
                <p className="text-gray-800">{user.name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Email</p>
                <p className="text-gray-800">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Account Number</p>
                <p className="text-gray-800">{user.accountNumber}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Balance</p>
                <p className="text-gray-800">{user.balance}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Joined Date</p>
                <p className="text-gray-800">{user.joinedDate}</p>
              </div>
            </div>
          </div>

          {/* Right Side: Transactions */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Recent Transactions
            </h2>
            <div className="overflow-y-auto max-h-96 border rounded-lg bg-gray-50 p-4">
              <table className="min-w-full text-left text-gray-800">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Type</th>
                    <th className="py-2 px-4">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-gray-100 border-b"
                    >
                      <td className="py-2 px-4">{transaction.date}</td>
                      <td className="py-2 px-4">{transaction.type}</td>
                      <td className="py-2 px-4">{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
