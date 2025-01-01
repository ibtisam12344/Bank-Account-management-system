import Deposit from "@/app/_components/Deposit";

export const metadata = {
  title: "Deposit",
};

export default function DepositPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Deposit />
    </div>
  );
}
