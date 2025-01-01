import Withdraw from "@/app/_components/Withdraw";

export const metadata = {
  title: "Withdraw",
  description: "Withdraw money securely from your account.",
};

export default function WithdrawPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Withdraw />
    </div>
  );
}
