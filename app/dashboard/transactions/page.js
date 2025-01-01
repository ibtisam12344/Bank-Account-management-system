import Transactions from "@/app/_components/Transactions";

export const metadata = {
  title: "Transactions",
  description:
    "View your transaction history, including deposits, withdrawals, and transfers.",
};

export default function TransactionHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <Transactions />
    </div>
  );
}
