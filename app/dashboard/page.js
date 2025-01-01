import BankCard from "../_components/BankCard";
import Graphs from "../_components/Graphs";
import Top3Transactions from "../_components/Top3Transactions";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 flex flex-col space-y-6">
      {/* My Card and Transactions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[50vh] flex flex-col md:flex-row items-start md:space-x-6">
        {/* Card Section */}
        <div>
          <BankCard />
        </div>

        {/* Transactions Section */}
        <Top3Transactions />
      </div>

      {/* Income vs Expenses Section */}
      <Graphs />
    </div>
  );
}
