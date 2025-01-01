import Transfer from "@/app/_components/Transfer";

export const metadata = {
  title: "Transfer",
  description: "Transfer money from your account to another account securely.",
};
export default function TransferPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Transfer />
    </div>
  );
}
